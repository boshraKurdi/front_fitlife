import "../Chat.css";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";
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
  const { admin } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { myChat, loading2 } = useSelector((state) => state.Dchat);
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch, id]);
  const endRef = useRef(null);
  const lastMessageRef = useRef(null);
  const { messages, loading3, loadingMessage } = useSelector((state) => state.Dchat);
  const { value } = useSelector((state) => state.mode);
  
  const [localMessages, setLocalMessages] = useState([...messages]); 
  const [previewImage, setPreviewImage] = useState(null); 
  const [caption, setCaption] = useState(""); 
  const [data, setData] = useState({ user_id: admin.id, chat_id: id, text: "", media: null });
  const [active, setActive] = useState(false); 

  useEffect(() => {
    dispatch(ActGetMessages(id));
    setData((prev) => ({ ...prev, chat_id: id }));
  }, [dispatch, id]);

  useEffect(() => {
    setLocalMessages([...messages]);
  }, [messages]);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollTop = endRef.current.scrollHeight;
    }
  }, [localMessages]);

  function HandelEomji(e) {
    setCaption((prev) => prev + e.emoji);
    setActive(false);
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setData((prev) => ({ ...prev, media: file }));
    }
  }

  function handleSend(event) {
    event.preventDefault();

    if (!caption.trim() && !data.media) return;

    const formData = new FormData();
    formData.append("user_id", data.user_id);
    formData.append("chat_id", data.chat_id);
    formData.append("text", caption); // ✅ يتم إرسال التعليق مع الصورة

    if (data.media) {
      formData.append("media", data.media);
    }

    if (loadingMessage !== "pending") {
      setLocalMessages((prev) => [
        ...prev,
        {
          text: caption,
          media: data.media ? [{ original_url: previewImage }] : null,
          group: { user_id: admin.id },
          user_id: admin.id,
        },
      ]);
    }

    dispatch(ActSendMessage(formData));

    setData((prev) => ({ ...prev, text: "", media: null }));
    setPreviewImage(null);
    setCaption("");
  }
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
                    {myChat?.type === "public"
                      ? myChat?.name
                      : myChat?.user && myChat?.user[0]?.name}
                  </h3>
                  <span>
                    {myChat?.type === "public" ? (
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
              <>
                 {loading3 === "pending" ? (
                   <LoadingPage />
                 ) : (
                   <>
                     <div ref={endRef} className="chat-container">
                       {localMessages?.map((message, index) => (
                         <div
                           ref={index === localMessages.length - 1 ? lastMessageRef : null}
                           key={index}
                           className={
                             value === "light"
                               ? admin.id !== message?.group?.user_id
                                 ? "chat-msg light"
                                 : "chat-msg light user"
                               : admin.id !== message?.group?.user_id
                               ? "chat-msg dark"
                               : "chat-msg dark user"
                           }
                         >
                           {message?.media?.length ? (
                             <img className="img_message" src={message?.media[0]?.original_url} alt="media" />
                           ) : (
                             ""
                           )}
                           <p>{message?.text}</p>
                           <div className="isseen">
                             <span className="is_check">
                               {message?.isSeen && admin.id === message?.group?.user_id ? <DoneAllIcon /> : 
                               (!message?.isSeen && admin.id === message?.group?.user_id ? <CheckIcon /> : "")}
                             </span>
                             <span className="time">{format(new Date(), "HH:mm")}</span>
                           </div>
                         </div>
                       ))}
                     </div>
           
                     {previewImage && (
                       <div className="upload-box">
                         <img className="preview-image" src={previewImage} alt="preview" />
                         <input
                           type="text"
                           className="caption-input"
                           placeholder="أدخل تعليقًا..."
                           value={caption}
                           onChange={(e) => setCaption(e.target.value)}
                         />
                         <div className="buttons">
                           <button className="cancel-btn" onClick={() => setPreviewImage(null)}>إلغاء</button>
                           <button className="send-btn" onClick={handleSend}>إرسال</button>
                         </div>
                       </div>
                     )}
           
                     <div className="message-box">
                      
                         <form onSubmit={handleSend} style={{ display: "flex", alignItems: "center" }}>
                           <div className="message-content">
                             <SentimentSatisfiedAltIcon className="emo" onClick={() => setActive((prev) => !prev)} />
                             <div className="piker">
                               <EmojiPicker style={{ height: "350px", width: "300px" }} open={active} onEmojiClick={HandelEomji} />
                             </div>
                             <input
                               type="text"
                               name="text"
                               placeholder="أدخل رسالة..."
                               value={caption}
                               onChange={(e) => setCaption(e.target.value)}
                             />
                             <label htmlFor="file">
                               <AttachFileIcon />
                             </label>
                             <input
                               style={{ display: "none" }}
                               type="file"
                               name="media"
                               id="file"
                               onChange={handleFileChange}
                             />
                             <KeyboardVoiceIcon />
                           </div>
                           <button type="submit" style={{ marginLeft: "1rem" }} className="micro">
                             <SendIcon />
                           </button>
                         </form>
                     </div>
                   </>
                 )}
               </>
          </>
        )}
      </div>
    </section>
  );
}
