import { Avatar, Stack } from "@mui/material";
export default function Content({ chat , setIdChat }) {
  return (
    <div onClick={()=>{
      setIdChat(chat?.id)
    }}  className="chat-box" id="Msg">
      <div className="chat-img">
        <Stack direction="row" spacing={2}>
          <Avatar
            style={{
              fontSize: "1.6rem",
              fontWeight: "bold",
              width: "50px",
              height: "50px",
            }}
          >
            {chat?.user && chat?.user[0]?.name.charAt(0)}
          </Avatar>
        </Stack>
      </div>
      <div className="chat-details">
        <div className="chat-title">
          <h3>{chat?.type === "public"? chat?.name : (chat.user && chat?.user[0]?.name)}</h3>
          <span>06:04 PM</span>
        </div>
        <div className="chat-msg">
          <p>{chat?.lastMessage}</p>
          <span>1</span>
        </div>
      </div>
    </div>
  );
}
