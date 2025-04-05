import { Box, IconButton, Tooltip , Button ,  useTheme} from "@mui/material";
import Header from "../components/Header";
import { tokens } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Swal from 'sweetalert2'
import {
  ActGetPlanForGoal,
  PlanForGoalCleanUp,
  ActDestroy
} from "../../Redux/Dashboard/Plan/PlanSlice";
import { Link, useParams } from "react-router-dom";
import Table from "../components/Table";
const PlanIndex = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { plansForGoal, loading } = useSelector((state) => state.plan);
  const { language } = useSelector((state) => state.mode)
  const headerID = "ID";
  const headerTitle = language === "en" ? "Tile plan" : "العنوان الخطة";
  const headerTitleGoal = language === "en" ? "Tile Goal" : "العنوان الهدف";
  const headerDuration = language === "en" ? "Duration" : "المدة";
  const headerE = language === "en" ? "Exercises" : "التمرين";
  const headerEvent = language === "en" ? "Event" : "الحدث";
  useEffect(() => {
    dispatch(ActGetPlanForGoal(id));
    return () => {
      dispatch(PlanForGoalCleanUp());
    };
  }, [dispatch, id]);
  const columns = [
    { field: "id", headerName: headerID },
    {
      field: "title",
      headerName:headerTitleGoal,
      flex: 1,
      valueGetter: (value, plansForGoal) => plansForGoal.goals.title,
    },
    {
      field: "plan",
      headerName: headerTitle,
      flex: 1,
      valueGetter: (value, plansForGoal) => plansForGoal.plan.title,
    },
    {
      field: "duration",
      headerName: headerDuration,
      flex: 1,
      valueGetter: (value, plansForGoal) =>
        plansForGoal.plan.duration,
    },
    {
      field: "exercises",
      headerName: headerE,
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (plansForGoal) => {
        return (
          <Link to={"exercises/" + plansForGoal.row.plan.id}>
            exercises
          </Link>
        );
      },
    },
    {
      field: "event",
      headerName:headerEvent,
      flex: 1,
      renderCell: (plansForGoal) => (
        <strong>
           <Tooltip title="Delete" arrow placement="top" onClick={()=>{HandelDelete(plansForGoal.id)}}>
          <IconButton
            variant="contained"
            size="small"
            style={{ margin:"0 0.5rem" ,background: 'red' , padding: '5px' , borderRadius: '8px' }}
          >
            <DeleteIcon sx={{color:'#fff'}} className="delete"/>
          </IconButton>
          </Tooltip>
          <Tooltip title="Update" arrow placement="top">
          <IconButton
            variant="contained"
            size="small"
            style={{  margin:"0 0.5rem"  , background: 'green' , padding: '5px' , borderRadius: '8px' }}
          >
            <EditIcon sx={{color:'#fff'}} className="update" />
          </IconButton>
          </Tooltip>
          <Tooltip title="Open" arrow placement="top">
          <IconButton
            variant="contained"
            size="small"
            style={{  margin:"0 0.5rem"  , background: '#aaa' , padding: '5px' , borderRadius: '8px' }}
          >
            <FolderOpenIcon sx={{color:'#fff'}} onClick={()=>{window.location.pathname="/dashboard/DetailsPlan/"+plansForGoal.row.plan_levels.id}} className="open" />
          </IconButton>
          </Tooltip>
        </strong>
      ),
    },
  ];
  const HandelDestroy = useCallback(
    (id) => {
      dispatch(ActDestroy(id));
    },
    [dispatch]
  );
  function HandelDelete(id){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        HandelDestroy(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title={language ==='en' ? "PLAN" : "الخطط"} subtitle={language ==='en' ?"List of Plan Table" : "سجلات من جدول الخطط"} />
        <Link to={"/dashboard/PlanForm"}>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <AddIcon sx={{ fontSize: "2rem", mr: "10px" }} />
            {language ==='en' ? "New Plan" : "خطة جديدة"}
          </Button>
        </Link>
      </Box>
      <Table loading={loading} columns={columns} data={plansForGoal} />
    </Box>
  );
};

export default PlanIndex;
