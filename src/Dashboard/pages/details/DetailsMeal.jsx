import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Header from "../../components/Header";
import UseDetailsMeal from "../../hooks/UseDetailsMeal";
import { useSelector } from "react-redux";
import { useTheme, Box, TextField } from "@mui/material";
import { tokens } from "../../theme";
import CardContentDetails from "../../components/card/cardContentDetails";
import SwiperComponent from "../../components/swiper/SwiperComponent";

const DetailsMeal = () => {
  const { value , language } = useSelector((state) => state.mode);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { meal, loadingShow } = UseDetailsMeal();
  const newData = meal?.ingredients
    ? meal?.ingredients?.map((data) => {
        return (
          <CardContentDetails
            key={data.id}
            title={language === 'en' ?data?.title : data?.title_ar}
            description={data?.num + " " + data?.name}
            img={data?.media && data?.media[0]?.original_url}
          />
        );
      })
    : "";
  return (
    <Box m="20px">
      <Header title={language === 'en' ?"DETAILS MEAL" : "تفاصيل الوجبة"} subtitle={language === 'en' ?"Information Meal" : "معلومات الوجبة"} />
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
                image={meal?.media && meal?.media[0]?.original_url}
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
                    label={language === 'en' ?"Title" : "العنوان"}
                    className="width"
                    defaultValue={language === 'en' ?meal?.title : meal?.title_ar}
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
                    defaultValue={language === 'en' ?meal?.description : meal?.description_ar}
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
                    label={language === 'en' ?"Prepare" : "طريقة التحضير"}
                    className="width"
                    sx={{ height: "80px" }}
                    defaultValue={language === 'en' ?meal?.prepare : meal?.prepare_ar}
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
                    label={language === 'en' ?"Calories" : "السعرات الحرارية"}
                    className="width"
                    sx={{ fontSize: "2rem", height: "80px" }}
                    defaultValue={meal?.calories}
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
                    label={language === 'en' ?"Category" : "الفئة"}
                    className="width"
                    sx={{ fontSize: "2rem", height: "80px" }}
                    defaultValue={meal?.category?.title}
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
              <Header title={language === 'en' ?"INGREDIENTS" : "المكونات"} />
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
                    {meal?.ingredients && <SwiperComponent data={newData} />}
                  </section>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </>
      )}
    </Box>
  );
};
export default DetailsMeal;
