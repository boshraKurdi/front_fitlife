import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Header from "../../components/Header";
import UseDetailsExercise from "../../hooks/UseDetailsExercise";
import { useSelector } from "react-redux";
import { useTheme, Box, TextField } from "@mui/material";
import { tokens } from "../../theme";
import SwiperComponent from "../../components/swiper/SwiperComponent";
import CardContentDetails from "../../components/card/cardContentDetails";

const DetailsExercise = () => {
  const { value , language } = useSelector((state) => state.mode);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { exercise, loadingShow } = UseDetailsExercise();
  const newData = exercise?.steps
    ? exercise.steps.map((data, index) => {
        return (
          <>
            <CardContentDetails
             key={data.id}
              title={(language === 'en' ?"Step " : "الخطوة ")+ (index + 1)}
              description={language === 'en' ?data.content  : data.content_ar}
              img={data?.media && data?.media[0]?.original_url}
            />
          </>
        );
      })
    : "";
  return (
    <Box m="20px">
      <Header title={language === 'en' ? "DETAILS EXERCISE" : "تفاصيل التمرين"} subtitle={language === 'en' ?"Information Exercise" : "معلومات التمرين"} />
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
                image={exercise?.media && exercise?.media[0]?.original_url}
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
                    label={language === 'en' ? "Title" : "العنوان"}
                    className="width"
                    defaultValue={exercise?.title}
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
                    label={language === 'en' ?"Description" : "الوصف" }
                    className="width"
                    sx={{ height: "80px" }}
                    defaultValue={language === 'en' ?exercise?.description : exercise?.description_ar}
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
                    label={language === 'en' ? "Duration" : "المدة"}
                    className="width"
                    sx={{ fontSize: "2rem", height: "80px" }}
                    defaultValue={exercise?.duration}
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
                    label={language === 'en' ?"Calories" : "الصعرات الحرارية"}
                    className="width"
                    sx={{ fontSize: "2rem", height: "80px" }}
                    defaultValue={exercise?.calories}
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
                    label={language === 'en' ?"Counter" : "العداد"}
                    className="width"
                    sx={{ fontSize: "2rem", height: "80px" }}
                    defaultValue={exercise?.counter}
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
                <Box
                  sx={{
                    padding: "2rem 2rem 0 2rem",
                    [theme.breakpoints.down("lg")]: {
                      flexDirection: "column",
                    },
                  }}
                >
                  <Header title={language === 'en' ?"STEPS" : "خطوات التمرين"} />
                </Box>
                <section
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "65vw",
                    margin: "auto",
                  }}
                >
                  {exercise?.steps && <SwiperComponent data={newData} />}
                </section>
              </CardContent>
            </Box>
          </Card>
        </>
      )}
    </Box>
  );
};
export default DetailsExercise;
