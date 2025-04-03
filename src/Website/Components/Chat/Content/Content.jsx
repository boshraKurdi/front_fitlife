import { useEffect, useRef, useState } from "react";
import "../Chat.css";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import EmojiPicker from "emoji-picker-react";
import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { ActGetMessages, ActSendMessage } from "../../../../Redux/Chat/ChatSlice";
import LoadingPage from "../../Loading/LoadingPage/LoadingPage";

export default function Content({ id }) {
  const endRef = useRef(null);
  const lastMessageRef = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { messages, loading3, message, loadingMessage } = useSelector((state) => state.chat);
  const { value } = useSelector((state) => state.mode);
  
  const [localMessages, setLocalMessages] = useState([...messages]); 
  const [previewImage, setPreviewImage] = useState(null); 
  const [caption, setCaption] = useState(""); 
  const [data, setData] = useState({ user_id: user.id, chat_id: id, text: "", media: null });
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
          group: { user_id: user.id },
          user_id: user.id,
        },
      ]);
    }

    dispatch(ActSendMessage(formData));

    setData((prev) => ({ ...prev, text: "", media: null }));
    setPreviewImage(null);
    setCaption("");
  }

  return (
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
                    ? user.id !== message?.group?.user_id
                      ? "chat-msg light"
                      : "chat-msg light user"
                    : user.id !== message?.group?.user_id
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
                    {message?.isSeen && user.id === message?.group?.user_id ? <DoneAllIcon /> : 
                    (!message?.isSeen && user.id === message?.group?.user_id ? <CheckIcon /> : "")}
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
            {message !== "" ? (
              <p className="time_error">{message}</p>
            ) : (
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
            )}
          </div>
        </>
      )}
    </>
  );
}
