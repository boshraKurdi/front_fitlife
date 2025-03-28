import { Box, IconButton } from "@mui/material";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActIndex } from "../../Redux/Dashboard/User/UserSlice";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Table from "../components/Table";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const UserIndex = () => {
  const nav = useNavigate()

  const { language } = useSelector((state) => state.mode)
const headerID = "ID";
const headerName = language === "en" ? "Name" : "الاسم";
const headerEmail = language === "en" ? "Email" : "البريد الإلكتروني";
const headerAddress = language === "en" ? "Address" : "العنوان";
const headerDate = language === "en" ? "Date" : "التاريخ";
const headerEvent = language === "en" ? "Event" : "الحدث";

const columns = [
    { field: "id", headerName: headerID },
    {
      field: "name",
      headerName: headerName,
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: headerEmail,
      flex: 1,
    },
    {
      field: "address",
      headerName: headerAddress,
      flex: 1,
    },
    {
      field: "created_at",
      headerName: headerDate,
      flex: 1,
      renderCell: (params) => moment(params.value).fromNow(),
    },
    {
      field: "event",
      headerName: headerEvent,
      flex: 1,
      renderCell: (users) => (
        <strong>
          <IconButton
            className="iconButton"
            variant="contained"
            size="small"
            style={{  margin:"0 0.5rem" , background: "#aaa", padding: "5px", borderRadius: "8px" }}
            onClick={() => { nav("DetailsUser/" + users.id); }}
          >
            <FolderOpenIcon sx={{ color: "#fff" }} className="open" />
          </IconButton>
        </strong>
      ),
    },
];

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(ActIndex());
  } , [dispatch])
  const { users , loading } = useSelector((state) => state.user);
  return (
    <Box m="20px">
      <Header title={language ==='en' ?"USERS" : "المستخدمين"} subtitle={language ==='en' ?"List of Users Table" : "سجلات من جدول الستخدمين"} />
      <Table loading={loading} columns={columns} data={users} />
    </Box>
  );
};

export default UserIndex;
