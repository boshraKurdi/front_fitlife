import { Box, IconButton, Tooltip } from "@mui/material";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Table from "../components/Table";
import Swal from "sweetalert2";
import { ActGetRequestGoals, ActRequestGoalConfirm, ActRequestGoalUnConfirm } from "../../Redux/Dashboard/Admin/AdminSlice";
import { Link } from "react-router-dom";
const RequestGoals = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActGetRequestGoals());
  }, [dispatch]);
  const { dataRequestGoal } = useSelector((state) => state.admin);

  const [rows, setRows] = useState(dataRequestGoal);
  const [updatedRows, setUpdatedRows] = useState();

  useEffect(() => {
    setUpdatedRows(rows);
  }, [rows]);
  const columns = [
    { field: "id", headerName: "ID" },
    {
     
      field: "name",
      headerName: " Name",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (dataRequestGoal) => <Link to={"user/" + dataRequestGoal?.row.users?.id}>{dataRequestGoal?.row.users?.name}</Link>,
    },
    {
      field: "goal",
      headerName: "Goal",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (dataRequestGoal) => <Link to={"goal/" + dataRequestGoal?.row.goal_plan?.goals.id}>{dataRequestGoal?.row.goal_plan?.goals.title}</Link>,
    },
    {
      field: "event",
      headerName: "event",
      flex: 1,
      renderCell: (dataRequestGoal) => (
        <strong>
          <Tooltip
            title="unconfirm"
            arrow
            placement="top"
            onClick={() => {
              HandelDelete(dataRequestGoal.id);
            }}
          >
            <IconButton
              variant="contained"
              size="small"
              style={{
                background: "red",
                padding: "5px",
                height:'32px',
                borderRadius: "8px",
              }}
            >
             unconfirm <DeleteIcon sx={{ color: "#fff" }} className="delete" />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="confirm"
            arrow
            placement="top"
            onClick={() => {
                HandelUpdateRquest(dataRequestGoal.id);
            }}
          >
            <IconButton
              variant="contained"
              size="small"
              style={{
                marginLeft: 16,
                background: "green",
                padding: "5px",
                height:'32px',
                borderRadius: "8px",
              }}
            >
              confirm <EditIcon sx={{ color: "#fff" }} className="update" />
            </IconButton>
          </Tooltip>
        </strong>
      ),
    },
  ];
  const HandelDestroy = useCallback((id) => {
      dispatch(ActRequestGoalUnConfirm(id)).unwrap().then(()=>{
         
          }).catch(()=>{
            
          });
          setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  }, [dispatch]);
  function HandelDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you don't want to accept the request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, unconfirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        HandelDestroy(id);
        Swal.fire({
          title: "unconfirm!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }
  const HandelUpdate = useCallback((id) => {
    dispatch(ActRequestGoalConfirm(id));
}, [dispatch]);
function HandelUpdateRquest(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "Are you sure to accept the request?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, accept it!",
  }).then((result) => {
    if (result.isConfirmed) {
        HandelUpdate(id);
      Swal.fire({
        title: "accepted!",
        text: "Your request has been accept.",
        icon: "success",
      });
    }
  });
}

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Request Goals"
          subtitle="List of Data Request Goals Table"
        />
      </Box>
      <Table  key={rows.length} columns={columns} data={updatedRows} getRowId={(row) => row.id} />
    </Box>
  );
};

export default RequestGoals;
