import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useTheme , Box, TextField } from "@mui/material";
import { tokens } from "../../theme";
import { useEffect } from "react";
import { ActShow } from "../../../Redux/Dashboard/User/UserSlice";
import { useParams } from "react-router-dom";



const DetailsUser = () => {
  const { value } = useSelector((state) => state.mode);
  const theme = useTheme()
  const { id } = useParams()
  const colors = tokens(theme.palette.mode)
  const dispatch = useDispatch()
  const { user , loading } = useSelector((state) => state.Duser)
  useEffect(()=>{
    dispatch(ActShow(id))
  } , [dispatch , id])
//   const newData = goal?.plan_level ? goal.plan_level?.map((data) => {
//     return(
//       <CardContentDetails key={data.id}  title={data.plan.title} description={data.plan.description} img={data.plan.media && data.plan.media[0]?.original_url} />
//     )
//   }) : ''
  return (
    <Box m="20px">
      <Header title="DETAILS GOAL" subtitle="Information Goal" />
      {loading === "pending" ? (
        "loading..."
      ) : (
        <>
        <Card sx={{ width: '70vw' , margin:'auto' , display: "flex", alignItems: "center", marginTop: "4rem" , background:colors.primary[900]  }}>
          <Box sx={{ display: "flex", width: "100%", padding: "2rem",  [theme.breakpoints.down('lg')]: {
            flexDirection:'column'
          }, }}>
            {/* <CardMedia
            component="img"
              sx={{
                width: "300px",
                minHeight: "300px",
                maxHeight: "100%",
                borderRadius: "30px",
                margin: 'auto'
              }}
              image={user.media && user?.media[0]?.original_url}
              title="green iguana"
            /> */}
            <CardContent sx={{ flex: "1", display: "flex", flexWrap: "wrap",  [theme.breakpoints.down('lg')]: {
            justifyContent:'center'
          }, }}>
              <Box m="15px">
                <TextField
                  id="outlined-read-only-input"
                  label="Title"
                    className="width"
                  defaultValue={user?.name}
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
                  label="Description"
                    className="width"
                  sx={{ height: "80px" }}
                  defaultValue={user?.description}
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
                  label="illness"
                    className="width"
                  sx={{ fontSize: "2rem", height: "80px" }}
                  defaultValue={user?.illness}
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
                  label="email"
                    className="width"
                  sx={{ fontSize: "2rem", height: "80px" }}
                  defaultValue={user?.email}
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
                  label="width"
                    className="width"
                  sx={{ fontSize: "2rem", height: "80px" }}
                  defaultValue={user?.width+" kg"}
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
                  label="height"
                    className="width"
                  sx={{ fontSize: "2rem", height: "80px" }}
                  defaultValue={user?.height+' cm'}
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
                  label="age"
                    className="width"
                  sx={{ fontSize: "2rem", height: "80px" }}
                  defaultValue={user?.age}
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
                  label="address"
                    className="width"
                  sx={{ fontSize: "2rem", height: "80px" }}
                  defaultValue={user?.address}
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
        {/* <h1 style={{margin: '2rem 0 1rem 0 ', fontSize: '2.5rem'}}>Plans</h1>
        <section style={{display:'flex' , alignItems:'center' , justifyContent:'center' , width:'70vw' , margin:'auto'}}>
        {goal?.plan_level && <SwiperComponent data={newData}/>}
        </section> */}
        </>
      )}
    </Box>
  )
 
};
export default DetailsUser;
