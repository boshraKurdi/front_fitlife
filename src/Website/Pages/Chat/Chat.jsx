import "./Chat.css";
import "../../Components/Chat/Content/Content.css";
import { useParams } from "react-router-dom";
import Content from "../../Components/Chat/Content/Content";
import SideBar from "../../Components/Chat/SideBar/SideBar";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActShow } from "../../../Redux/Chat/ChatSlice";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
export default function Chat() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { myChat, loading2 } = useSelector((state) => state.chat);
  const { value } = useSelector((state) => state.mode);
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch, id]);
  return (
    <main className="chat">
      <SideBar />
      <section
        className={
          value === "light" ? "chat_content light" : "chat_content dark"
        }
      >
        <div className="chat_container" id="chatBox">
          <div className={`content-header ${value}`}>
            <HorizontalSplitIcon
              className="barsChat"
              style={{ fontSize: "3rem" }}
            />
            <SkeletonLoading loading={loading2} type="headerChat">
              <div className="image">
                <img
                  src={myChat.user && myChat.user[0].media[0].original_url}
                  alt=""
                />
              </div>
              <div className="details">
                <h3>{myChat.user && myChat.user[0].name}</h3>
                <span>last seen 10 minutes ago</span>
              </div>
            </SkeletonLoading>
            <div className="icons">
              <PhoneIcon />
              <SearchIcon />
            </div>
          </div>
          <Content id={id} />
        </div>
      </section>
    </main>
  );
}
