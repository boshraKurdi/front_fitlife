import "./Chat.css";
import "../../components/chat/Content/Content.css";
import Content from "../../components/chat/Content/Content";
import SideBar from "../../components/chat/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { ActGetChat } from "../../../Redux/Dashboard/Chat/ChatSlice";
import { useEffect, useState } from "react";

import { Bg_Image } from "../../../Website/index";
import Header from "../../components/Header";
import { Box } from "@mui/material";
export default function Chat() {
  const dispatch = useDispatch();
  const { value , language } = useSelector((state) => state.mode);
  const { myChats , loading , error , users } = useSelector((state) => state.Dchat);
  const [idchat , setIdChat] = useState(myChats[0]?.id)
  useEffect(() => {
    dispatch(ActGetChat())
  } , [dispatch])
  return (
    <Box m="20px">
      <Header title={language === 'en' ? "CHATS" : "محاداثي"} subtitle={language === "en" ? "List of Chat" : "سجلات المحادثات"} />
      <main
        style={{direction: "ltr" , backgroundImage: `url(${Bg_Image})` }}
        className={`${value} chat`}
      >
        <div
          style={{ margin: "0 auto", width: "90%" }}
          className="container_chat"
        >
          <SideBar users={users}  myChats={myChats} loading={loading} error={error} setIdChat={setIdChat} />
          <Content id={idchat} myChats={myChats} />
        </div>
      </main>
    </Box>
  );
}
