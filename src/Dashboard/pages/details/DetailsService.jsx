import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Header from "../../components/Header";
import UseDetailsService from "../../hooks/UseDetailsService";
import { useSelector } from "react-redux";
import { useTheme , Box, TextField } from "@mui/material";
import { tokens } from "../../theme";



const DetailsService = () => {
  const { value } = useSelector((state) => state.mode);
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const {service , loadingShow } = UseDetailsService()
  return (
    <Box m="20px">
      <Header title="DETAILS SERVICE" subtitle="Information Service" />
      {loadingShow === "pending" ? (
        "loading..."
      ) : (
        <>
        <Card sx={{ width: '70vw' , margin:'auto' , display: "flex", alignItems: "center", marginTop: "4rem" , background:colors.primary[900]  }}>
          <Box sx={{ display: "flex", width: "100%", padding: "2rem",  [theme.breakpoints.down('lg')]: {
            flexDirection:'column'
          }, }}>
            <CardContent sx={{ flex: "1", display: "flex", flexWrap: "wrap",  [theme.breakpoints.down('lg')]: {
            justifyContent:'center'
          }, }}>
              <Box m="15px">
                <TextField
                  id="outlined-read-only-input"
                  label="Service"
                  defaultValue={service?.service}
                  sx={{ height: "80px" }}
                  slotProps={{
                    input: {
                      sx: {
                        fontSize: "1.5rem",
                        height: "100%",
                      },
                      readOnly: true,
                    },
                  }}
                 InputLabelProps={{
                    sx: {
                      fontSize: "1.5rem",
                      "&.Mui-focused": {
                        color: value === "dark" ? "#fff" : "#000",
                      },
                    },
                  }}
                />
              </Box>
              <Box m="15px">
                <TextField
                  id="outlined-read-only-input"
                  label="Price"
                  sx={{ height: "80px" }}
                  defaultValue={service?.price}
                  multiline
                  maxRows={2}
                 InputLabelProps={{
                    sx: {
                      fontSize: "1.5rem",
                      "&.Mui-focused": {
                        color: value === "dark" ? "#fff" : "#000",
                      },
                    },
                  }}
                  slotProps={{
                    input: {
                      style: { fontSize: "1.5rem", height: "100%" },
                      readOnly: true,
                    },
                  }}
                />
              </Box>
              <Box m="15px">
                <TextField
                  id="outlined-read-only-input"
                  label="Duration"
                  sx={{ height: "80px" }}
                  defaultValue={service?.duration}
                  multiline
                  maxRows={2}
                 InputLabelProps={{
                    sx: {
                      fontSize: "1.5rem",
                      "&.Mui-focused": {
                        color: value === "dark" ? "#fff" : "#000",
                      },
                    },
                  }}
                  slotProps={{
                    input: {
                      style: { fontSize: "1.5rem", height: "100%" },
                      readOnly: true,
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Box>
        </Card>
        </>
      )}
    </Box>
  )
 
};
export default DetailsService;
