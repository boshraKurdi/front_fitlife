import "../Chat.css";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useRef, useState } from "react";
import { format } from 'date-fns';
import { useDispatch, useSelector } from "react-redux";
import {
  ActGetMessages,
  ActSendMessage,
} from "../../../../Redux/Chat/ChatSlice";
import LoadingPage from "../../Loading/LoadingPage/LoadingPage";

export default function Content({ id }) {
  const endRef = useRef(null);
  const lastMessageRef = useRef(null);
  const [active , setActive] = useState(false)
  const { user } = useSelector((state) => state.auth);
  const { messages, loading3 , message } = useSelector((state) => state.chat);
  const { value } = useSelector((state) => state.mode);
  const [data, setData] = useState({ user_id: user.id, chat_id: id, text: "" });
  const dispatch = useDispatch();
  useEffect(() => {
    if (endRef.current && lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [messages]);
  function HandelEomji(e){
    setData(prevForm => ({
      ...prevForm,
      text: prevForm.text + e.emoji
    }));
    
    setActive(false)

}

  useEffect(() => {
    dispatch(ActGetMessages(id));
    setData({...data , chat_id:id})
  }, [dispatch ,id]);
  let newData = messages.map((message, index) => {
    return (
      <>
        <div
          ref={index === messages.length - 1 ? lastMessageRef : null}
          key={index}
          className={
            value === "light"
              ? user.id !== message.group?.user.id
                ? "chat-msg light"
                : "chat-msg light user"
              : user.id !== message.group?.user.id
              ? "chat-msg dark"
              : "chat-msg dark user"
          }
        >
          <p>{message.text}</p>
          <span className="time">{format(new Date(message.created_at), 'HH:mm')}</span>
        </div>
      </>
    );
  });
  return (
    <>
      {loading3 === "pending" ? (
        <LoadingPage />
      ) : (
        <>
          <div ref={endRef} className="chat-container">
            {newData}
          </div>
          <div></div>
          {message === '' ?
          <div className="message-box">
            <form style={{ display: "flex", alignItems: "center" }}>
              <div className="message-content">
              <SentimentSatisfiedAltIcon className='emo' onClick={(e)=>{setActive(prev => !prev)}} />
                <div className='piker'>
                  <EmojiPicker style={{height: '350px' ,width: '300px'}} open={active} onEmojiClick={HandelEomji} />
                </div>
                <input
                  type="text"
                  name="text"
                  placeholder="message..."
                  value={data.text}
                  onChange={(e) => {
                    setData({ ...data, text: e.target.value });
                  }}
                />
                <AttachFileIcon />
                <KeyboardVoiceIcon />
              </div>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(ActSendMessage(data));
                  setData({ ...data, text: "" });
                }}
                style={{ marginLeft: "1rem" }}
                className="micro"
              >
                <SendIcon />
              </button>
            </form>
          </div>:
            <p style={{color:'#000' ,background: "#fff" , padding: "1rem" , borderRadius: "8px"}} className="message-box">{message}</p>
}
        </>
      )}
    </>
  );
}
