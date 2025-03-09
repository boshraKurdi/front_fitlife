import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({ language ,setOpen ,open, handleClose, steps }) {
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open.status}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {language == 'en' ? "steps" : "الخطوة"} {open.index+1}
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers>
          <div style={{ textAlign: "center" }}>
            <img
              src={steps[open.index]?.media[0]?.original_url}
              alt="preview"
              style={{
                width: "400px",
                height: "300px",
                margin:"0 auto 16px auto",
                borderRadius: "8px",
              }}
            />
            <Typography style={{fontSize:'1.7rem'}} gutterBottom>
              {language == 'en' ? steps[open.index]?.content : steps[open.index]?.content_ar}
            </Typography>
          </div>
        </DialogContent>

        <DialogActions>
        <Typography style={{display:'flex' , alignItems:'center' , justifyContent:'space-between' , width:'100%'}} >
         
          <Button style={{pointerEvents: open.index===0 && "none"}} onClick={()=>{
            setOpen({...open , index:open.index-1})
          }}>
            <ChevronLeftIcon style={{fontSize:'2.4rem' , color:"hsl(294.74deg 16.89% 62.04%)"}} />
          </Button>
          <Button style={{pointerEvents: open.index===steps.length-1 && "none"}} onClick={()=>{
            setOpen({...open , index:open.index+1})
          }} >
            <ChevronRightIcon style={{ fontSize:'2.4rem' , color:"hsl(294.74deg 16.89% 62.04%)"}} />
          </Button>
          </Typography>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
