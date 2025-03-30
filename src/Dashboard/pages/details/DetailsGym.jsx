import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Header from "../../components/Header";
import UseDetalisGym from "../../hooks/UseDetailsGym";
import { useSelector } from "react-redux";
import { useTheme , Box, TextField } from "@mui/material";
import { tokens } from "../../theme";
import SwiperComponent from "../../components/swiper/SwiperComponent";
import CardContentDetails from "../../components/card/cardContentDetails";



const DetailsGym = () => {
  const { value , language } = useSelector((state) => state.mode);
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const {gym , loadingShow } = UseDetalisGym()
  const newData = gym.section ? gym.section.map((data) => {
    return(
      <>
      <CardContentDetails  title={language === 'en' ?data.title : data?.title_ar} description={language === 'en' ?data.description:data?.description_ar} img={data.media && data.media[0]?.original_url} />
      </>
    )
  } ) :''
  return (
    <Box m="20px">
      <Header title={language === 'en' ?"DETAILS GYM" : "تفاصيل النادي"} subtitle={language === 'en' ?"Information Gym" : "معلومات النادي"} />
      {loadingShow === "pending" ? (
        "loading..."
      ) : (
        <>
        <Card sx={{ width: '70vw' , margin:'auto' , display: "flex", alignItems: "center", marginTop: "4rem" , background:colors.primary[900]  }}>
          <Box sx={{ display: "flex", width: "100%", padding: "2rem",  [theme.breakpoints.down('lg')]: {
            flexDirection:'column'
          }, }}>
            <CardMedia
            component="img"
              sx={{
                width: "300px",
                minHeight: "300px",
                maxHeight: "100%",
                borderRadius: "30px",
                margin: 'auto'
              }}
              image={gym.media && gym.media[0].original_url}
              title="green iguana"
            />
            <CardContent sx={{ flex: "1", display: "flex", flexWrap: "wrap",  [theme.breakpoints.down('lg')]: {
            justifyContent:'center'
          }, }}>
              <Box m="15px">
                <TextField
                  id="outlined-read-only-input"
                  label={language === 'en' ?"Name" : "اسم النادي"}
                   className="width"
                  defaultValue={gym?.name}
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
                  label={language === 'en' ?"Description" : "الوصف"}
                   className="width"
                  sx={{ height: "80px" }}
                  defaultValue={language === 'en' ?gym?.description : gym?.description_ar}
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
                  label={language === 'en' ?"Price" : "تكلفة النادي"}
                   className="width"
                  sx={{ fontSize: "2rem", height: "80px" }}
                  defaultValue={gym?.price}
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
                  label={language === 'en' ?"Open" : "وقت الفتح"}
                   className="width"
                  sx={{ fontSize: "2rem", height: "80px" }}
                  defaultValue={gym?.open}
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
                  label={language === 'en' ?"Close" : "وقت الاغلاق"}
                   className="width"
                  sx={{ fontSize: "2rem", height: "80px" }}
                  defaultValue={gym?.close}
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
                  label={language === 'en' ?"Type" : "نوع النادي"}
                   className="width"
                  sx={{ fontSize: "2rem", height: "80px" }}
                  defaultValue={gym?.type}
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
                  label={language === 'en' ?"Address" : "عنوان النادي"}
                   className="width"
                  sx={{ fontSize: "2rem", height: "80px" }}
                  defaultValue={gym?.address}
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
                     <Header title={language === 'en' ?"SECTIONS"  : "اقسام النادي"}/>
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
                            {gym.section && <SwiperComponent data={newData}/>}
                          </section>
                        </Box>
                      </CardContent>
                    </Box>
                  </Card>
        
        </>
      )}
    </Box>
  )
 
};
export default DetailsGym;
