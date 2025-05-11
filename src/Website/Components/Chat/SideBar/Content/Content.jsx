import { Link } from "react-router-dom";
import { format } from 'date-fns';
export default function Content({chat , check , setCheck}){
    return(
        <Link onClick={()=>{
          setCheck(prevCheck => [...prevCheck, chat?.id]);
        }} to={`/services/chat/${chat.id}`} className="chat-box" id="Msg">
            <div className="chat-img">
              <img src={chat.user && chat?.user[0]?.media[0]?.original_url} alt="" />
            </div>
            <div className="chat-details">
              <div className="chat-title">
                <h3>{chat.user && chat?.user[0]?.name}</h3>
                <span>{format(chat?.updated_at, 'HH:mm')}</span>
              </div>
              <div className="chat-msg">
                <p>{chat.lastMessage}</p>
                {!check.includes(chat?.id) ? (chat?.countMessageIsNotSeen ? <span>{chat?.countMessageIsNotSeen}</span> : ""):""}
              </div>
            </div>
          </Link>
    )
}