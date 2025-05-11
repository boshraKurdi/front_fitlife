import "../Chat.css";
import "./SideBar.css";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "./Content/Content";
import SkeletonLoading from "../../../../Website/Components/Loading/SkeletonLoading/SkeletonLoading";
import ContentUser from "./ContentUser/ContentUser";
import { ActCreateGroup } from "../../../../Redux/Dashboard/Chat/ChatSlice";
export default function SideBar({ myChats, loading, error, setIdChat, users }) {
  const { value } = useSelector((state) => state.mode);
  const { admin } = useSelector((state) => state.auth);
  const [chipData, setChipData] = useState([admin.id]);
  const [check , setCheck ]= useState([])
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const filteredChats = searchTerm
    ? myChats.filter(
        (chat) =>
          chat.user &&
          chat.user[0]?.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : myChats;
  let newData = status
    ? users?.map((user) => {
        return (
          <ContentUser
            setChipData={setChipData}
            chipData={chipData}
            key={user.id}
            user={user}
          />
        );
      })
    : filteredChats?.map((chat) => {
        return <Content check={check} setCheck={setCheck} key={chat.id} chat={chat} setIdChat={setIdChat} />;
      });
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);
  console.log(status)
  return (
    <div className={`right-side ${value}`}>
      <div className="header-container">
        <div className="chat_header">
          <div className="toggle-button">
            <ArrowBackIcon />
          </div>
          <div className="search-box">
            <SearchIcon />
            <input
              value={searchTerm}
              onChange={handleSearchChange}
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div style={{ height: "345px" }} className="body-container">
        <div className="chat-list">
          <SkeletonLoading loading={loading} error={error} type="chat">
            {status ? (
              <div className="display-group">
                <input placeholder="group name ..." className="input-group" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
              <button
                onClick={() => {
                  dispatch(
                    ActCreateGroup({ data: chipData, name: name })
                  );
                  setStatus(false)
                }}
              >
                create +
              </button>
              </div>
            ) : (
              ""
            )}
            {newData.length > 0 ? newData : "no chat found"}
          </SkeletonLoading>
        </div>
      </div>
      <div
        onClick={() => {
          setStatus((prev) => !prev);
        }}
        className="pen"
      >
        <CreateIcon />
      </div>
    </div>
  );
}
