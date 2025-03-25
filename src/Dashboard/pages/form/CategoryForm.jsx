import {
    Box,
    Button,
    TextField,
  } from "@mui/material";
  import { Form, Formik } from "formik";
  import useMediaQuery from "@mui/material/useMediaQuery";
  import Header from "../../components/Header";
  import CategoryValidation from "../../validation/CategoryValidation";
  import { useDispatch, useSelector } from "react-redux";
  import { useEffect } from "react";
  import { ActStore } from "../../../Redux/Dashboard/Category/CategorySlice";
  import { useNavigate } from "react-router-dom";
  import { useSnackbar } from "notistack";
  import Loading from "../../components/loading/Loading";
  import AddIcon from '@mui/icons-material/Add';
  
  const CategoryForm = () => {
    const nav = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { value } = useSelector((state) => state.mode);
    const { loadingStore, error } = useSelector((state) => state.Dgoal);
    const { checkoutSchema, initialValues } = CategoryValidation();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const dispatch = useDispatch();
  
    const handleFormSubmit = (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("title_ar", values.title_ar);
      dispatch(ActStore(formData))
        .unwrap()
        .then(() => {
          nav("/dashboard");
          enqueueSnackbar(`Create Category successfully!`, { variant: "success" });
        }).catch(()=>{
          enqueueSnackbar(`Create Category faild!`, { variant: "error" });
        });
    };
   
    return (
      <Box m="20px">
        <Header title="CREATE CATEGORY" subtitle="Create a New Category" />
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Title"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.title}
                  name="title"
                  error={!!touched.title && !!errors.title}
                  helperText={touched.title && errors.title}
                  sx={{ gridColumn: "span 2" }}
                  InputProps={{
                    sx: { fontSize: "1.5rem" },
                  }}
                  InputLabelProps={{
                    sx: {
                      fontSize: "1.6rem",
                      color: value === "dark" ? "#fff" : "#000",
                      "&.Mui-focused": {
                        color: value === "dark" ? "#fff" : "#000",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Title Ar"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.title_ar}
                  name="title_ar"
                  error={!!touched.title_ar && !!errors.title_ar}
                  helperText={touched.title_ar && errors.title_ar}
                  sx={{ gridColumn: "span 2" }}
                  InputProps={{
                    sx: { fontSize: "1.5rem" },
                  }}
                  InputLabelProps={{
                    sx: {
                      fontSize: "1.6rem",
                      color: value === "dark" ? "#fff" : "#000",
                      "&.Mui-focused": {
                        color: value === "dark" ? "#fff" : "#000",
                      },
                    },
                  }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Loading loading={loadingStore} error={error}>
                  <Button
                    className={value === "dark" ? "newR dark" : "newR light"}
                    sx={{ marginRight: "auto", padding: "1.5rem 2rem" }}
                    type="submit"
                    color="secondary"
                    variant="contained"
                  >
                    Create New Category <AddIcon />
                  </Button>
                </Loading>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    );
  };
  
  export default CategoryForm;
  