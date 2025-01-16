import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { SetOpen } from "../Redux/Mode/ModeSlice";
import Alert from "@mui/material/Alert";

export default function Message() {
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(SetOpen());
  };

  const { open , message , type} = useSelector((state) => state.mode);

  return (
    <div>
      <Snackbar
        open={open}
        fontSize="large"
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={`${type}`}
          variant="filled"
          sx={{ width: "100%", fontSize: "1.5rem", alignItems: "center" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
