import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, MenuItem, Select, TextField, useTheme } from "@mui/material";
import Header from "../../components/Header";
import UseDetalisPlan from "../../hooks/UseDetalisPlan";
import { useSelector } from "react-redux";
import SwiperComponent from "../../components/swiper/SwiperComponent";
// import CardContentDetails from "../../components/card/cardContentDetails";
// import SwiperComponent from "../../components/swiper/SwiperComponent";
import { tokens } from "../../theme";
import CardContentDetails from "../../components/card/cardContentDetails";
import { useState } from "react";

const DetailsPlan = () => {
  const { value } = useSelector((state) => state.mode);
  const [selectedDay, setSelectedDay] = useState({week:1 , day:1});
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { plan, loadingShow } = UseDetalisPlan();
  const filteredExercises = plan?.exercise?.filter(
    (exercise) => exercise?.pivot?.day === selectedDay.day && exercise?.pivot?.week === selectedDay.week 
  );
  const newData = filteredExercises
    ? filteredExercises?.map((data) => (
        <CardContentDetails
          key={data.id}
          title={data?.title}
          description={data?.description}
          img={data?.media && data?.media[0]?.original_url}
        />
      ))
    : "";
  const HandleChange = (event) => {
    setSelectedDay({...selectedDay , week:Math.floor(event.target.value/7)+1 , day:(event.target.value%7)+1});
  };

  // const newData = plan?.exercise && plan.exercise.map((data) => {
  //   return(
  //     <CardContentDetails  title={data.title} description={data.description} img={data.media && data.media[0].original_url} />
  //   )
  // })

  return (
    <Box m="20px">
      <Header title="DETAILS PLAN" subtitle="Information Plan" />
      {loadingShow === "pending" ? (
        "loading..."
      ) : (
        <>
          <Card
            sx={{
              width: "70vw",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              marginTop: "4rem",
              background: colors.primary[900],
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                padding: "2rem",
                [theme.breakpoints.down("lg")]: {
                  flexDirection: "column",
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: "300px",
                  minHeight: "300px",
                  maxHeight: "100%",
                  borderRadius: "30px",
                  margin: "auto",
                }}
                image={plan?.media && plan.media[0]?.original_url}
                title="green iguana"
              />
              <CardContent
                sx={{
                  flex: "1",
                  display: "flex",
                  flexWrap: "wrap",
                  [theme.breakpoints.down("lg")]: {
                    justifyContent: "center",
                  },
                }}
              >
                <Box m="15px">
                  <TextField
                    id="outlined-read-only-input"
                    label="Title"
                    className="width"
                    defaultValue={plan?.title}
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
                    defaultValue={plan?.description}
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
                    className="width"
                    sx={{ fontSize: "2rem", height: "80px" }}
                    defaultValue={plan?.duration}
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
                    label="Muscle"
                    className="width"
                    sx={{ fontSize: "2rem", height: "80px" }}
                    defaultValue={plan?.muscle}
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
          <Card
            sx={{
              width: "70vw",
              margin: "auto",

              marginTop: "4rem",
              background: colors.primary[900],
            }}
          >
            <Box
              sx={{
                padding: "2rem 2rem 0 2rem",
                [theme.breakpoints.down("lg")]: {
                  flexDirection: "column",
                },
              }}
            >
              <Header title="PLANS EXERCISE" />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedDay.day}
                label="Day"
                onChange={HandleChange}
              >
                {Array(plan?.duration * 7)
                  .fill(0)
                  .map((_, index) => (
                    <MenuItem key={index} value={index+1}>
                      يوم {index+1}
                    </MenuItem>
                  ))}
              </Select>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                padding: "2rem",
                [theme.breakpoints.down("lg")]: {
                  flexDirection: "column",
                },
              }}
            >
              <CardContent
                sx={{
                  flex: "1",
                  display: "flex",
                  flexWrap: "wrap",
                  [theme.breakpoints.down("lg")]: {
                    justifyContent: "center",
                  },
                }}
              >
                <Box m="15px">
                  <section
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "65vw",
                      margin: "auto",
                    }}
                  >
                    {plan?.exercise && <SwiperComponent data={newData} />}
                  </section>
                </Box>
              </CardContent>
            </Box>
          </Card>
          {/* <h1 style={{margin: '2rem 0 1rem 0 ', fontSize: '2.5rem'}}>Exercise</h1>
        <section style={{display:'flex' , alignItems:'center' , justifyContent:'center' , width:'70vw' , margin:'auto'}}>
        
        <SwiperComponent data={newData}/>
        </section> */}
        </>
      )}
    </Box>
  );
};
export default DetailsPlan;
