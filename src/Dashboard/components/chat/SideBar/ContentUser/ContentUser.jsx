import { Avatar, Stack } from "@mui/material";
import { useState } from "react";
export default function ContentUser({ user , chipData, setChipData }) {
    const [check , setCheck] = useState(false)
  return (
    <>
   
    <label
    onClick={()=>{
        setCheck((prev => !prev))
        check ?
        setChipData((prevChipData) => [
            ...prevChipData,
            user.id,
          ]):
          setChipData((chips) =>
            chips.filter((chip) => chip.key !== user.id)
          );
    }}
    htmlFor={`${user?.name}`} className="chat-box" id="Msg">
        <div className="chat-img">
          <Stack direction="row" spacing={2}>
            <Avatar
              style={{
                fontSize: "1.6rem",
                fontWeight: "bold",
                width: "50px",
                height: "50px",
              }}
            >{user.name.charAt(0)}
            </Avatar>
          </Stack>
        </div>
        <div className="chat-details">
          <div className="chat-title">
            <h3>{user?.name}</h3>
            <span><input type="checkbox"  id={`${user?.name}`} /></span>
          </div>
          <div className="chat-msg">
            
            {/* <p>chat?.lastMessage</p> */}
            {/* <span></span> */}
          </div>
        </div>
      </label>
      </>
  );
}
