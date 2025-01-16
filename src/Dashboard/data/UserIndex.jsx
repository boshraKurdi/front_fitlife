import { Box, IconButton } from "@mui/material";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActIndex } from "../../Redux/Dashboard/User/UserSlice";
import EditIcon from '@mui/icons-material/Edit';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Table from "../components/Table";
const UserIndex = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "created_at",
      headerName: "Date",
      flex: 1,
    },
     {
      field: "event",
      headerName: "event",
      flex: 1,
      renderCell: (params) => (
        <strong>
        <IconButton
          className="iconButton"
          variant="contained"
          size="small"
          style={{background: 'green' , padding: '5px' , borderRadius: '8px'  }}
          tabIndex={params.hasFocus ? 0 : -1}
        >
         <EditIcon sx={{color:'#fff'}} className="update" />
        </IconButton >
        <IconButton
          className="iconButton"
          variant="contained"
          size="small"
          style={{ marginLeft: 16 , background: '#aaa' , padding: '5px' , borderRadius: '8px' }}
          tabIndex={params.hasFocus ? 0 : -1}
        >
         <FolderOpenIcon sx={{color:'#fff'}} className="open" />
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
      <Header title="USERS" subtitle="List of Users Table" />
      <Table loading={loading} columns={columns} data={users} />
    </Box>
  );
};

export default UserIndex;
