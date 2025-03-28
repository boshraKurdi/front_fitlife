import { Box, Button } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import UseUpdateCategory from "../../hooks/UseUpdateCategory";
import InputForm from "../../components/InputForm";
const CategoryUpdate = () => {
  const {
    isNonMobile,
    value,
    language,
    handleFormSubmit,
    checkoutSchema,
    initialValues,
  } = UseUpdateCategory();

  return (
    <Box m="20px">
      <Header title={language === "en" ? "UPDATE CATEGORY" : "تعديل الفئة"} subtitle={language === "en" ?  "Update a Category" : "املأ البيانات لتعديل الفئة"} />
      <Formik
        key={JSON.stringify(initialValues)}
        enableReinitialize={true}
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          isSubmitting,
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
                title={language === "en" ? "title" : "العنوان"}
                name={"title"}
              />
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.title_ar}
                touched={touched.title_ar}
                errors={errors.title_ar}
                title={language === "en" ? "title ar" : "العنوان بالعربي"}
                name={"title_ar"}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                className={value === "dark" ? "newR dark" : "newR light"}
                sx={{ marginRight: "auto", padding: "1.5rem 2rem" }}
                type="submit"
                color="secondary"
                variant="contained"
                disabled={isSubmitting}
              >
                {isSubmitting ? (language === 'en' ? "Loading..." : "انتظار...") : (language === 'en' ?"Update Category":"تعديل الفئة")}
                <EditIcon sx={{ ml: "1rem" }} />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CategoryUpdate;
