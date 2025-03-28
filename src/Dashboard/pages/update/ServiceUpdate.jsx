import { Box, Button } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import UseUpdateService from "../../hooks/UseUpdateService";
import InputForm from "../../components/InputForm";
const ServiceUpdate = () => {
  const {
    isNonMobile,
    value,
    handleFormSubmit,
    checkoutSchema,
    language,
    initialValues,
  } = UseUpdateService();

  return (
    <Box m="20px">
      <Header title={language === "en" ? "UPDATE SERVICE" : "تعديل الخدمة"} subtitle={language === "en" ?  "Update a Service" : "املأ البيانات لتعديل خدمة"} />
      <Formik
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
                values={values.service}
                touched={touched.service}
                errors={errors.service}
                title={language === "en" ? "service" : "الخدمة"}
                name={"service"}
              />
              <InputForm
                type="number"
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.price}
                touched={touched.price}
                errors={errors.price}
                title={language === "en" ? "price" : "سعر الخدمة"}
                name={"price"}
              />
              <InputForm
                type="number"
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.duration}
                touched={touched.duration}
                errors={errors.duration}
                title={language === "en" ? "duration" : "مدة الخدمة"}
                name={"duration"}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                className={value === "dark" ? "newR dark" : "newR light"}
                sx={{ marginRight: "auto", padding: "1.5rem 2rem" }}
                type="submit"
                color="secondary"
                variant="contained"
              >
                   {isSubmitting
                  ? language === "en"
                    ? "Loading..."
                    : "انتظار..."
                  : language === "en"
                  ? "Update Servise"
                  : "تعديل الخدمة"}{" "} <EditIcon sx={{ ml: "1rem" }} />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ServiceUpdate;
