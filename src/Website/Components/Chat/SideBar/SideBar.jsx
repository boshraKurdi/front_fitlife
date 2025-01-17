import "../Chat.css";
import "./SideBar.css";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActGetChat } from "../../../../Redux/Chat/ChatSlice";
import Content from "./Content/Content";
import SkeletonLoading from "../../Loading/SkeletonLoading/SkeletonLoading";
export default function SideBar() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.mode);
  const { myChats , loading , error } = useSelector((state) => state.chat);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    dispatch(ActGetChat())
  } , [dispatch])
  const filteredChats = searchTerm
  ? myChats.filter(chat => 
    chat.user && chat.user[0]?.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    )
  : myChats;
  let newData = filteredChats.map((chat)=>{
    return(
      <Content key={chat.id} chat={chat} />
    )
  })
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);
  return (
    <div className={`right-side ${value}`}>
      <div className="header-container">
        <div className="chat_header">
          <div className="toggle-button">
            <ArrowBackIcon />
          </div>
          <div className="search-box">
            <SearchIcon />
            <input value={searchTerm} onChange={handleSearchChange} type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="body-container">
        <div className="chat-list">
        <SkeletonLoading loading={loading} error={error} type="chat">
            {newData.length > 0 ? (
              newData
            ) : (
              'no chat found'
            )}
          </SkeletonLoading>
        </div>
      </div>
      <div className="pen">
        <CreateIcon />
      </div>
    </div>
  );
}
