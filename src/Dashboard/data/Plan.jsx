import { Box, IconButton, Tooltip , Button , useTheme } from "@mui/material";
import Header from "../components/Header";
import { tokens } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { Link, useNavigate } from "react-router-dom";
import { ActDestroy ,ActIndex } from "../../Redux/Dashboard/Plan/PlanSlice";
import AddIcon from "@mui/icons-material/Add";
import Table from "../components/Table";
import Swal from 'sweetalert2'
const Plan = () => {
    const nav = useNavigate()
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActIndex());
  }, [dispatch]);
  const { plans, loading } = useSelector((state) => state.Dplan);
  const columns = [
    { field: "id", headerName: "ID" },
    {
        field: "title",
        headerName: "Title",
        flex: 1,
        cellClassName: "name-column--cell",
        valueGetter: (value, plans) => plans.title,
      },
      {
        field: "duration",
        headerName: "Duration",
        flex: 1,
        cellClassName: "name-column--cell",
        valueGetter: (value, plans) => plans.duration,
      },
    {
      field: "event",
      headerName: "event",
      flex: 1,
      renderCell: (plans) => (
        <strong>
          <Tooltip title="Delete" arrow placement="top" onClick={()=>{HandelDelete(plans.id)}}>
            <IconButton
              variant="contained"
              size="small"
              style={{
                background: "red",
                padding: "5px",
                borderRadius: "8px",
              }}
            >
              <DeleteIcon sx={{color:'#fff'}} className="delete" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Update" arrow placement="top" onClick={()=>{nav('update/'+plans.id)}} >
            <IconButton
              variant="contained"
              size="small"
              style={{
                marginLeft: 16,
                background: "green",
                padding: "5px",
                borderRadius: "8px",
              }}
            >
              <EditIcon sx={{color:'#fff'}} className="update" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Open" arrow placement="top">
            <IconButton
              variant="contained"
              size="small"
              style={{
                marginLeft: 16,
                background: "#aaa",
                padding: "5px",
                borderRadius: "8px",
              }}
            >
              <FolderOpenIcon sx={{color:'#fff'}} className="open" onClick={() => {nav('DetailsPlan/'+plans.id)}}/>
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
        <Header title="PLAN" subtitle="List of Plan Table" />
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
            New Plan
          </Button>
        </Link>
      </Box>
      <Table 
      loading={loading}
      columns={columns}
      data={plans}
      />
    </Box>
  );
};

export default Plan;
