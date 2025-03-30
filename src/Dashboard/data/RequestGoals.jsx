import { Box, IconButton, Tooltip } from "@mui/material";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
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
  const { dataRequestGoal , loading  } = useSelector((state) => state.admin);
  const { language } = useSelector((state) => state.mode)
  const headerID = "ID";
  const headerName = language === "en" ? "Name" : "اسم المستخدم";
  const Goal = language === "en" ? "Goal" : "الهدف";
  const headerEvent = language === "en" ? "Event" : "الحدث";
  
  const columns = [
    { field: "id", headerName: headerID },
    {
     
      field: "name",
      headerName: headerName,
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (dataRequestGoal) => <Link to={"/dashboard/user/" + dataRequestGoal?.row.users?.id}>{dataRequestGoal?.row.users?.name}</Link>,
    },
    {
      field: "goal",
      headerName: Goal,
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (dataRequestGoal) => <Link to={"/dashboard/goal/" + dataRequestGoal?.row.goal_plan?.goals.id}>{dataRequestGoal?.row.goal_plan?.goals.title}</Link>,
    },
    {
      field: "event",
      headerName: headerEvent,
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
                margin:"0 0.5rem" ,
                background: "red",
                padding: "5px",
                height:'32px',
                color:"#Fff",
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
                margin:"0 0.5rem" ,
                background: "green",
                padding: "5px",
                height:'32px',
                color:"#Fff",
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
        const { value: text } = Swal.fire({
          input: "textarea",
          inputLabel: "Message",
          inputPlaceholder: "Type your message here...",
          inputAttributes: {
            "aria-label": "Type your message here"
          },
          showCancelButton: true
        });
        if (text) {
          Swal.fire(text);
        }
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
          title={language ==='en' ? "Request Goals" : "طلبات الاشتراك بهدف"}
          subtitle={language ==='en' ?"List of Data Request coach Table" :"سجلات المستخدمين"}
        />
      </Box>
      <Table loading={loading} columns={columns} data={dataRequestGoal} />
    </Box>
  );
};

export default RequestGoals;
