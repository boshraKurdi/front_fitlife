import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useTheme, Box, TextField, CardMedia } from "@mui/material";
import { tokens } from "../../theme";
import { useEffect } from "react";
import { ActShow } from "../../../Redux/Dashboard/User/UserSlice";
import { useParams } from "react-router-dom";

const DetailsUser = () => {
  const { value, language } = useSelector((state) => state.mode);
  const theme = useTheme();
  const { id } = useParams();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.Duser);
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch, id]);
  //   const newData = goal?.plan_level ? goal.plan_level?.map((data) => {
  //     return(
  //       <CardContentDetails key={data.id}  title={data.plan.title} description={data.plan.description} img={data.plan.media && data.plan.media[0]?.original_url} />
  //     )
  //   }) : ''
  return (
    <Box m="20px">
      <Header
        title={language === "en" ? "DETAILS USER" : "تفاصيل المستخدم"}
        subtitle={language === "en" ? "Information User" : "معلومات المستخدم"}
      />
      {loading === "pending" ? (
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
                    label={language === "en" ? "Name" : "اسم المستخدم"}
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
                    label={language === "en" ? "Description" : "الوصف"}
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
                    label={language === "en" ? "illness" : "الامراض"}
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
                    label={language === "en" ? "email" : "البريد الالكتروني"}
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
                    label={language === "en" ? "width" : "الوزن"}
                    className="width"
                    sx={{ fontSize: "2rem", height: "80px" }}
                    defaultValue={user?.width + " kg"}
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
                    label={language === "en" ? "height" : "الطول"}
                    className="width"
                    sx={{ fontSize: "2rem", height: "80px" }}
                    defaultValue={user?.height + " cm"}
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
                    label={language === "en" ? "age" : "العمر"}
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
                    label={language === "en" ? "address" : "العنوان"}
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

          {/* request goal */}
          {user?.goal_plan?.length ? (
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
                <Header
                  title={
                    language === "en" ? "REQUEST GOSL" : "طلب اشتراك في هدف"
                  }
                />
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
                      <TextField
                        id="outlined-read-only-input"
                        label={language === "en" ? "goal" : "الهدف"}
                        className="width"
                        sx={{ fontSize: "2rem", height: "80px" }}
                        defaultValue={
                          language === "en"
                            ? user?.goal_plan?.goal?.title
                            : user?.goal_plan?.goal?.title_ar
                        }
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
                    </section>
                  </Box>
                </CardContent>
              </Box>
            </Card>
          ) : (
            ""
          )}

          {/* request coach */}
          {user?.is_request === 2 ? (
            <Card
              sx={{
                width: "70vw",
                margin: "auto",
                // display: "flex",
                alignItems: "center",
                marginTop: "4rem",
                background: colors.primary[900],
              }}
            >
              <Box sx={{ padding: "2rem" }}>
                <Header
                  title={
                    language === "en"
                      ? "REQUEST COACH"
                      : "طلب الترقية الى مدرب "
                  }
                />
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
                <CardMedia
                  component="img"
                  sx={{
                    width: "300px",
                    minHeight: "300px",
                    maxHeight: "100%",
                    borderRadius: "30px",
                    margin: "auto",
                  }}
                  image={user.media && user?.media[0]?.original_url}
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
                      label={language === "en" ? "Name" : "اسم المستخدم"}
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
                      label={language === "en" ? "	description" : "الوصف"}
                      className="width"
                      sx={{ fontSize: "2rem", height: "80px" }}
                      defaultValue={
                        language === "en"
                          ? user?.description
                          : user?.description_ar
                      }
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
                      label={language === "en" ? "communication" : "التواصل"}
                      className="width"
                      sx={{ fontSize: "2rem", height: "80px" }}
                      defaultValue={user?.communication + "%"}
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
                      label={language === "en" ? "education" : "التعليم"}
                      className="width"
                      sx={{ fontSize: "2rem", height: "80px" }}
                      defaultValue={user?.education + "%"}
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
                      label={language === "en" ? "development" : "التطور"}
                      className="width"
                      sx={{ fontSize: "2rem", height: "80px" }}
                      defaultValue={user?.development + "%"}
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
                      label={language === "en" ? "analysis" : "مهارات التحليل"}
                      className="width"
                      sx={{ fontSize: "2rem", height: "80px" }}
                      defaultValue={user?.analysis + "%"}
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
          ) : (
            ""
          )}
          {/* coach */}
          {user?.roles && user?.roles[0]?.name === "coach" ? (
            <Card
              sx={{
                width: "70vw",
                margin: "auto",
                // display: "flex",
                alignItems: "center",
                marginTop: "4rem",
                background: colors.primary[900],
              }}
            >
              <Box sx={{ padding: "2rem" }}>
                <Header
                  title={language === "en" ? "ROLE IS COACH" : "الرتبة مدرب"}
                />
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
                <CardMedia
                  component="img"
                  sx={{
                    width: "300px",
                    minHeight: "300px",
                    maxHeight: "100%",
                    borderRadius: "30px",
                    margin: "auto",
                  }}
                  image={user.media && user?.media[0]?.original_url}
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
                      label={language === "en" ? "Name" : "اسم المستخدم"}
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
                      label={language === "en" ? "	description" : "الوصف"}
                      className="width"
                      sx={{ fontSize: "2rem", height: "80px" }}
                      defaultValue={
                        language === "en"
                          ? user?.description
                          : user?.description_ar
                      }
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
                      label={language === "en" ? "communication" : "التواصل"}
                      className="width"
                      sx={{ fontSize: "2rem", height: "80px" }}
                      defaultValue={user?.communication + "%"}
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
                      label={language === "en" ? "education" : "التعليم"}
                      className="width"
                      sx={{ fontSize: "2rem", height: "80px" }}
                      defaultValue={user?.education + "%"}
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
                      label={language === "en" ? "development" : "التطور"}
                      className="width"
                      sx={{ fontSize: "2rem", height: "80px" }}
                      defaultValue={user?.development + "%"}
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
                      label={language === "en" ? "analysis" : "مهارات التحليل"}
                      className="width"
                      sx={{ fontSize: "2rem", height: "80px" }}
                      defaultValue={user?.analysis + "%"}
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
          ) : (
            ""
          )}
          {/* admin */}
          {user?.roles && user?.roles[0]?.name === "admin" ? (
            <Card
              sx={{
                width: "70vw",
                margin: "auto",
                // display: "flex",
                alignItems: "center",
                marginTop: "4rem",
                background: colors.primary[900],
              }}
            >
              <Box sx={{ padding: "2rem" }}>
                <Header
                  title={language === "en" ? "ROLE ADMIN" : "الرتبة ادمن"}
                />
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
                <CardMedia
                  component="img"
                  sx={{
                    width: "300px",
                    minHeight: "300px",
                    maxHeight: "100%",
                    borderRadius: "30px",
                    margin: "auto",
                  }}
                  image={user.media && user?.media[0]?.original_url}
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
                      label={language === "en" ? "Name" : "اسم المستخدم"}
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
                      label={
                        language === "en"
                          ? "why_admin"
                          : "لماذا اريد ان اصبح ادمن"
                      }
                      className="width"
                      sx={{ fontSize: "2rem", height: "80px" }}
                      defaultValue={user?.why_admin + "%"}
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
          ) : (
            ""
          )}
          {/* reuqest admin */}
          {user?.is_request === 1 ? (
            <Card
              sx={{
                width: "70vw",
                margin: "auto",
                // display: "flex",
                alignItems: "center",
                marginTop: "4rem",
                background: colors.primary[900],
              }}
            >
              <Box sx={{ padding: "2rem" }}>
                <Header
                  title={
                    language === "en"
                      ? "REQUEST ADMIN"
                      : "طلب الترقية الى ادمن "
                  }
                />
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
                <CardMedia
                  component="img"
                  sx={{
                    width: "300px",
                    minHeight: "300px",
                    maxHeight: "100%",
                    borderRadius: "30px",
                    margin: "auto",
                  }}
                  image={user.media && user?.media[0]?.original_url}
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
                      label={language === "en" ? "Name" : "اسم المستخدم"}
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
                      label={
                        language === "en"
                          ? "why_admin"
                          : "لماذا اريد ان اصبح ادمن"
                      }
                      className="width"
                      sx={{ fontSize: "2rem", height: "80px" }}
                      defaultValue={user?.why_admin + "%"}
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
          ) : (
            ""
          )}
        </>
      )}
    </Box>
  );
};
export default DetailsUser;
