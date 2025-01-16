import "../Chat.css";
import { useForm } from "react-hook-form";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActGetMessages, ActSendMessage } from "../../../../Redux/Chat/ChatSlice";
import Components from "../../../Style/Components/Components";
import LoadingPage from "../../Loading/LoadingPage/LoadingPage";

export default function Content({ id }) {
  const endRef = useRef(null);
  const { MyComponentDivHeader } = Components();
  const { user } = useSelector((state) => state.auth);
  const { messages, loading3 } = useSelector((state) => state.chat);
  const { value } = useSelector((state) => state.mode);
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset
} = useForm();
  useEffect(() => {
    dispatch(ActGetMessages(id));
  }, [dispatch, id]);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  let newData = messages.map((message) => {
    return (
      <div
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
        <span className="time">06:04 PM</span>
      </div>
    );
  });
  const HandelMessage = async (data) => {
    dispatch(ActSendMessage(data))
    reset();
  }
  return (
    <>
      {loading3 === "pending" ? (
        <LoadingPage />
      ) : (
        <>
          <div className="chat-container">{newData}</div>
          <div ref={endRef}></div>
          <div className="message-box">
            <form
              style={{ display: "flex", alignItems: "center" }}
              onSubmit={handleSubmit(HandelMessage)}
            >
              <MyComponentDivHeader className="message-content">
                <SentimentSatisfiedAltIcon />
                <input

                  type="text"
                  name="text"
                  {...register("text")}
                />
                <input
                  type="hidden"
                  name="chat_id"
                  value={id}
                  {...register("chat_id")}
                />
                <input
                  type="hidden"
                  name="user_id"
                  value={user.id}
                  {...register("user_id")}
                />
                <AttachFileIcon />
                <KeyboardVoiceIcon />
              </MyComponentDivHeader>
              <button style={{ marginLeft: "1rem" }} className="micro">
                <SendIcon />
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
