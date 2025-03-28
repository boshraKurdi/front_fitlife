import { Box, IconButton, Tooltip  , Button , useTheme} from "@mui/material";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { tokens } from "../theme";
import { useCallback, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ActDestroy ,ActIndex } from "../../Redux/Dashboard/Gym/GymSlice";
import Table from "../components/Table";
import AddIcon from "@mui/icons-material/Add";
import Swal from 'sweetalert2'
const GymIndex = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate()
  useEffect(() => {
    dispatch(ActIndex(id));
  }, [dispatch, id]);
  const { gyms , loading } = useSelector((state) => state.Dgym);
  const { language } = useSelector((state) => state.mode)
   const headerID = "ID";
   const headerTitle = language === "en" ? "Name" : "اسم النادي";
   const headerDuration = language === "en" ? "Type" : "نوع النادي";
   const headerEvent = language === "en" ? "Event" : "الحدث";
   const headerPlan = language === "en" ? "Location" : "الموقع";
  const columns = [
    { field: "id", headerName: headerID },
    {
      field: "name",
      headerName: headerTitle,
      flex: 1,
    },
    {
      field: "type",
      headerName: headerDuration,
      flex: 1,
    },
    {
        field: "address",
        headerName: headerPlan,
        flex: 1,
    },
    {
      field: "event",
      headerName:headerEvent,
      flex: 1,
      renderCell: (gyms) => (
        <strong>
          <Tooltip title="Delete" arrow placement="top" onClick={()=>{HandelDelete(gyms.id)}}>
            <IconButton
              variant="contained"
              size="small"
              style={{
                margin:"0 0.5rem" ,
                background: "red",
                padding: "5px",
                borderRadius: "8px",
              }}
            >
              <DeleteIcon sx={{color:'#fff'}} className="delete" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Update" arrow placement="top" onClick={() => {nav('update/'+gyms.id)}}>
            <IconButton
              variant="contained"
              size="small"
              style={{
                 margin:"0 0.5rem" ,
                background: "green",
                padding: "5px",
                borderRadius: "8px",
              }}
            >
              <EditIcon sx={{color:'#fff'}} className="update" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Open" arrow placement="top" onClick={() => {nav('DetailsGym/'+gyms.id)}}>
            <IconButton
              variant="contained"
              size="small"
              style={{
                 margin:"0 0.5rem" ,
                background: "#aaa",
                padding: "5px",
                borderRadius: "8px",
              }}
            >
              <FolderOpenIcon sx={{color:'#fff'}} className="open" />
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
        <Header title={language ==='en' ?"GYM":"النوادي الرياضية"} subtitle={language ==='en' ?"List of Gym Table" : "سجلات من جدول النوادي الرياضية"} />
        <Link to={"/dashboard/GymForm"}>
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
            {language ==='en' ? "New Gym" : "نادي جديد"}
          </Button>
        </Link>
      </Box>
      <Table loading={loading} columns={columns} data={gyms} />
    </Box>
  );
};

export default GymIndex;
