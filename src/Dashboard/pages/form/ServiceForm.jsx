import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Form, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import ServiceValidation from "../../validation/ServiceValidation";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { ActStore } from "../../../Redux/Dashboard/Service/ServiceSlice";
import { useNavigate } from "react-router-dom";
import InputForm from "../../components/InputForm";

const ServiceForm = () => {
  const nav = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { value, language } = useSelector((state) => state.mode)
  const { checkoutSchema, initialValues } = ServiceValidation();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("service", values.service);
    formData.append("price", values.price);
    formData.append("duration", values.duration);
    dispatch(ActStore(formData))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Service successfully!`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(`Update Service faild!`, { variant: "error" });
      });
  };

  return (
    <Box m="20px">
      <Header title={language === "en" ? "CREATE SERVICE" : "انشاء الخدمة"} subtitle={language === "en" ? "Create a New Service" : "املأ البيانات لانشاء خدمة"} />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          isSubmitting,
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
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.service}
                touched={touched.service}
                errors={errors.service}
                service={language === "en" ? "service" : "الخدمة"}
                name={"service"}
              />
              <InputForm
                type={"number"}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.price}
                touched={touched.price}
                errors={errors.price}
                title={language === "en" ? "price" : "سعر الخدمة"}
                name={"price"}
              />
              <InputForm
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
                disabled={isSubmitting}
                variant="contained"
              >
                 {isSubmitting
                  ? language === "en"
                    ? "Loading..."
                    : "انتظار..."
                  : language === "en"
                  ? "Create New Servise"
                  : "خدمة جديدة"}{" "} <AddIcon sx={{ ml: "1rem" }} />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ServiceForm;
