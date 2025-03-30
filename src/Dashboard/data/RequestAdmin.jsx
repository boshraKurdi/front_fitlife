import { Box, IconButton, Tooltip } from "@mui/material";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Table from "../components/Table";
import Swal from "sweetalert2";
import {
  ActGetRequestAdmin,
  ActActiveAdmin,
  ActNotActiveCoachAndAdmin,
} from "../../Redux/Dashboard/Admin/AdminSlice";
import { Link } from "react-router-dom";
const RequestAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActGetRequestAdmin());
  }, [dispatch]);
  const { Radmin, loading } = useSelector((state) => state.admin);

  const { language } = useSelector((state) => state.mode);
  const headerID = "ID";
  const headerName = language === "en" ? "Name" : "اسم المستخدم";
  const Why = language === "en" ? "Why Admin" : "لماذا اريد ان اصبح ادمن";
  const headerEvent = language === "en" ? "Event" : "الحدث";
  const columns = [
    { field: "id", headerName: headerID },
    {
      field: "name",
      headerName: headerName,
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (Radmin) => (
        <Link to={"/dashboard/user/" + Radmin?.row.id}>{Radmin?.row.name}</Link>
      ),
    },
    {
      field: "why_admin",
      headerName: Why,
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (Radmin) => (
        <Link to={"/dashboard/goal/" + Radmin?.row.id}>
          {Radmin?.row.why_admin}
        </Link>
      ),
    },
    {
      field: "event",
      headerName: headerEvent,
      flex: 1,
      renderCell: (Radmin) => (
        <strong>
          <Tooltip
            title="unconfirm"
            arrow
            placement="top"
            onClick={() => {
              HandelDelete(Radmin.id);
            }}
          >
            <IconButton
              variant="contained"
              size="small"
              style={{
                margin: "0 0.5rem",
                background: "red",
                padding: "5px",
                height: "32px",
                color: "#Fff",
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
              HandelUpdateRquest(Radmin.id);
            }}
          >
            <IconButton
              variant="contained"
              size="small"
              style={{
                margin: "0 0.5rem",
                background: "green",
                padding: "5px",
                height: "32px",
                color: "#Fff",
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
  const HandelDestroy = useCallback(
    (id) => {
      dispatch(ActNotActiveCoachAndAdmin(id))
        .unwrap()
        .then(() => {})
        .catch(() => {});
    },
    [dispatch]
  );
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
            "aria-label": "Type your message here",
          },
          showCancelButton: true,
        });
        if (text) {
          Swal.fire(text);
        }
      }
    });
  }
  const HandelUpdate = useCallback(
    (id) => {
      dispatch(ActActiveAdmin(id));
    },
    [dispatch]
  );
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
          title={
            language === "en" ? "Request Admins" : "طلبات الترقية الى ادمن"
          }
          subtitle={
            language === "en"
              ? "List of Data Request Admin Table"
              : "سجلات المستخدمين"
          }
        />
      </Box>
      <Table loading={loading} columns={columns} data={Radmin} />
    </Box>
  );
};

export default RequestAdmin;
