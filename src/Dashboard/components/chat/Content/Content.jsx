import "../Chat.css";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import { Avatar, Stack } from "@mui/material";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import SkeletonLoading from "../../../../Website/Components/Loading/SkeletonLoading/SkeletonLoading";
import { ActShow } from "../../../../Redux/Dashboard/Chat/ChatSlice";
import {
  ActGetMessages,
  ActSendMessage,
} from "../../../../Redux/Dashboard/Chat/ChatSlice";
import LoadingPage from "../../../../Website/Components/Loading/LoadingPage/LoadingPage";

export default function Content({ id }) {
  const endRef = useRef(null);
  const lastMessageRef = useRef(null);
  const [active, setActive] = useState(false);
  const { admin } = useSelector((state) => state.auth);
  const { messages, loading3, message } = useSelector((state) => state.Dchat);
  const { value } = useSelector((state) => state.mode);
  const [data, setData] = useState({
    user_id: admin.id,
    chat_id: id,
    text: "",
  });
  const dispatch = useDispatch();
  const { myChat, loading2 } = useSelector((state) => state.Dchat);
  console.log(myChat, id);
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch, id]);
  useEffect(() => {
    if (endRef.current && lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [messages]);
  function HandelEomji(e) {
    setData((prevForm) => ({
      ...prevForm,
      text: prevForm.text + e.emoji,
    }));

    setActive(false);
  }

  useEffect(() => {
    dispatch(ActGetMessages(id));
    setData({ ...data, chat_id: id });
  }, [dispatch, id]);
  let newData = messages.map((message, index) => {
    return (
      <>
        <div
          ref={index === messages.length - 1 ? lastMessageRef : null}
          key={index}
          className={
            value === "light"
              ? admin.id !== message.group?.user.id
                ? "chat-msg light"
                : "chat-msg light user"
              : admin.id !== message.group?.user.id
              ? "chat-msg dark"
              : "chat-msg dark user"
          }
        >
          {admin.id !== message.group?.user.id && myChat.type === "public" ? (
            <p
              style={{ color: "var(--fc-bg-event-color)", fontSize: "1.3rem" }}
            >
              {message?.group?.user?.name}
            </p>
          ) : (
            ""
          )}
          <p>{message.text}</p>
          <span className="time">
            {format(new Date(message.created_at), "HH:mm")}
          </span>
        </div>
      </>
    );
  });
  return (
    <section
      className={value === "light" ? "chat_content light" : "chat_content dark"}
    >
      <div className="chat_container" id="chatBox">
        {loading2 === "pending" ? (
          <LoadingPage />
        ) : (
          <>
            <div className={`content-header ${value}`}>
              <HorizontalSplitIcon
                className="barsChat"
                style={{ fontSize: "3rem" }}
              />
              <SkeletonLoading loading={loading2} type="headerChat">
                <div className="image">
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      style={{
                        fontSize: "1.6rem",
                        fontWeight: "bold",
                        width: "50px",
                        height: "50px",
                      }}
                    >
                      {myChat?.user && myChat?.user[0]?.name.charAt(0)}
                    </Avatar>
                  </Stack>
                </div>
                <div className="details">
                  <h3>
                    {myChat.type === "public"
                      ? myChat?.name
                      : myChat?.user && myChat?.user[0]?.name}
                  </h3>
                  <span>
                    {myChat.type === "public" ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        users:
                        {myChat?.user?.map((data) => {
                          return (
                            <>
                              <span style={{margin:'0 .5rem' , fontSize:'1.2rem'}}>{data?.name}</span>
                            </>
                          );
                        })}
                      </div>
                    ) : (
                      "last seen 10 minutes ago"
                    )}
                  </span>
                </div>
              </SkeletonLoading>
              <div className="icons">
                <PhoneIcon />
                <SearchIcon />
              </div>
            </div>
            <div ref={endRef} className="chat-container">
              {newData}
            </div>
            <div></div>

            <div className="message-box">
              <form style={{ display: "flex", alignItems: "center" }}>
                <div className="message-content">
                  <SentimentSatisfiedAltIcon
                    className="emo"
                    onClick={(e) => {
                      setActive((prev) => !prev);
                    }}
                  />
                  <div className="piker">
                    <EmojiPicker
                      style={{ height: "350px", width: "300px" }}
                      open={active}
                      onEmojiClick={HandelEomji}
                    />
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
            </div>
          </>
        )}
      </div>
    </section>
  );
}
