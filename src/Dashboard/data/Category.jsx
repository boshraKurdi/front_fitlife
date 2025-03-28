import { Box, IconButton, Tooltip, Button, useTheme } from "@mui/material";
import Header from "../components/Header";
import { tokens } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
import Table from "../components/Table";
import AddIcon from "@mui/icons-material/Add";
import Swal from 'sweetalert2'
import { ActIndex , ActDestroy } from "../../Redux/Dashboard/Category/CategorySlice";
const Category = () => {
  const nav = useNavigate()
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActIndex());
  }, [dispatch]);
  const { categories, loading } = useSelector((state) => state.Dcategory);
    const { language } = useSelector((state) => state.mode)
    const headerID = "ID";
    const headerTitle = language === "en" ? "Title" : "العنوان";
    const headerEvent = language === "en" ? "Event" : "الحدث";
    
    const columns = [
        { field: "id", headerName: headerID },
        {
          field: "title",
          headerName: headerTitle,
          flex: 1,
        },
        {
          field: "event",
          headerName: headerEvent,
          flex: 1,
          renderCell: (categories) => (
            <strong>
              <Tooltip title="Delete" arrow placement="top" onClick={() => HandelDelete(categories.id)}>
                <IconButton
                  variant="contained"
                  size="small"
                  style={{
                    margin:"0 0.5rem",
                    background: "red",
                    padding: "5px",
                    borderRadius: "8px",
                  }}
                >
                  <DeleteIcon sx={{ color: "#fff" }} className="delete" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Update" arrow placement="top" onClick={() => nav("update/" + categories.id)}>
                <IconButton
                  variant="contained"
                  size="small"
                  style={{
                    margin: "0 0.5rem",
                    background: "green",
                    padding: "5px",
                    borderRadius: "8px",
                  }}
                >
                  <EditIcon sx={{ color: "#fff" }} className="update" />
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
        <Header title={language ==='en' ? "CATEGORY" : "الفئات"} subtitle={language ==='en' ?  "List of Category Table" : "سجلات جدول الفئات"} />
        <Link to={"/dashboard/CategoryForm"}>
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
            {language ==='en' ?  "New Categorie" : "فئة جديدة"}
          </Button>
        </Link>
      </Box>
      <Table data={categories} columns={columns} loading={loading} />
    </Box>
  );
};

export default Category;
