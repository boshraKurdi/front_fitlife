import "./ChatBot.css";
import Cody from "../../../assets/Cody.jpg";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ActGetMessages, ActSendMessageAi } from "../../../Redux/Chat/ChatSlice";
import { Avatar } from "@mui/material";

const ChatBot = () => {
  const chatBoxRef = useRef(null); // مرجع لصندوق المحادثة فقط
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { messages, loadingMessage } = useSelector((state) => state.chat);
  const [localMessages, setLocalMessages] = useState([...messages]);

  useEffect(() => {
    setLocalMessages([...messages]); // تحديث الرسائل عند تغيّرها في Redux
  }, [messages]);

  const [data, setData] = useState({ user_id: user.id, chat_id: id, text: "" });

  // دالة للتمرير داخل الصندوق فقط
  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [localMessages]); // تحديث التمرير عند تحديث الرسائل

  useEffect(() => {
    dispatch(ActGetMessages(id));
  }, [dispatch, id]);

  const handleSend = async () => {
    if (!data.text.trim()) return;
    event.preventDefault();

    // إضافة رسالة المستخدم فورًا إلى المحادثة
    const userMessage = { ...data, isCoach: false };
    setLocalMessages([...localMessages, userMessage]);

    dispatch(ActSendMessageAi(data));

    setData({ ...data, text: "" });

    // التمرير إلى الأسفل بعد الإرسال مباشرة
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <img src={Cody} alt="none" />
        <h2>FitBot</h2>
      </div>

      <div ref={chatBoxRef} className="chat-box">
        {localMessages.map((msg, index) => (
          <div className="aa" key={index}>
            {msg.isCoach ? <img className="bot-icon" src={Cody} alt="none" /> : null}
            <div className={msg.isCoach ? "message bot" : "message user"}>
              {msg.text}
            </div>
            {!msg.isCoach ? (
              <Avatar
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                  width: "30px",
                  height: "30px",
                }}
              >
                {"a"}
              </Avatar>
            ) : null}
          </div>
        ))}

        {loadingMessage === "pending" && (
          <div className="aa">
            <img className="bot-icon" src={Cody} alt="none" />
            <div className="message bot">يرجى انتظار جواب البوت...</div>
          </div>
        )}
      </div>

      <div className="input-box">
        <input
          type="text"
          value={data.text}
          onChange={(e) => setData({ ...data, text: e.target.value })}
          placeholder="📝 اكتب سؤالك هنا..."
        />
        <button onClick={handleSend} disabled={loadingMessage === "pending"}>
          🚀 إرسال
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
