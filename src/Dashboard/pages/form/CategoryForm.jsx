import { Box, Button } from "@mui/material";
import { Form, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import CategoryValidation from "../../validation/CategoryValidation";
import { useDispatch, useSelector } from "react-redux";
import { ActStore } from "../../../Redux/Dashboard/Category/CategorySlice";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import AddIcon from "@mui/icons-material/Add";
import InputForm from "../../components/InputForm";

const CategoryForm = () => {
  const nav = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { value , language } = useSelector((state) => state.mode);
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
        enqueueSnackbar(`Create Category successfully!`, {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(`Create Category faild!`, { variant: "error" });
      });
  };

  return (
    <Box m="20px">
      <Header title={language === "en" ?"CREATE CATEGORY":"انشاء فئة"} subtitle={language === "en" ?"Create a New Category" : "املأ البيانات لانشاء فئة"} />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
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
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.title}
                touched={touched.title}
                errors={errors.title}
                title={language === 'en' ?"title" : "العنوان"}
                name={'title'}
              />
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.title_ar}
                touched={touched.title_ar}
                errors={errors.title_ar}
                title={language === 'en' ? "title ar" : "العنوان بالعربي"}
                name={"title_ar"}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                className={`newR ${value}`}
                sx={{ marginRight: "auto", padding: "1.5rem 2rem" }}
                type="submit"
                disabled={isSubmitting}
                color="secondary"
                variant="contained"
              >
                {isSubmitting ? (language === 'en' ? "Loading..." : "انتظار...") : (language === 'en' ?"Create New Category":"فئة جديدة")}
                <AddIcon />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CategoryForm;
