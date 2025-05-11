import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Form, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import ExerciseValidation from "../../validation/ExerciseValidation";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ActStore } from "../../../Redux/Dashboard/Exercise/ExerciseSlice";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useState } from "react";
import InputForm from "../../components/InputForm";
import CustomeButton from "../../components/CustomeButton/CustomeButton";
import SelectForm from "../../components/SelectForm";

const ExerciseForm = () => {
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "150px",
        width: 250,
      },
    },
  };
  const { enqueueSnackbar } = useSnackbar();
  const nav = useNavigate();
  const { value, language } = useSelector((state) => state.mode);
  const { checkoutSchema, initialValues } = ExerciseValidation();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();

  const [preview, setPreview] = useState("");
  const [stepsCount, setStepsCount] = useState(0);
  const [stepsData, setStepsData] = useState([]);

  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("title_ar", values.title_ar);
    formData.append("description", values.description);
    formData.append("description_ar", values.description_ar);
    formData.append("duration", values.duration);
    formData.append("calories", values.calories);
    formData.append("type", values.type);
    formData.append("counter", values.counter);

    // إضافة خطوات التمرين
    stepsData.forEach((step, index) => {
      formData.append(`steps[${index}][content]`, step.content);
      formData.append(`steps[${index}][content_ar]`, step.content_ar);
      if (step.media_steps) {
        formData.append(`media_steps[${index}]`, step.media_steps);
      }
    });

    // إضافة الصورة الرئيسية للتمرين
    if (values.media) {
      formData.append("media", values.media);
    }
    if (values.video) {
      formData.append("video", values.video);
    }
    if (values.svg) {
      formData.append("svg", values.svg);
    }
    dispatch(ActStore(formData))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Exercise created successfully!`, {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(`Failed to create exercise!`, { variant: "error" });
      });
  };
  const handleDeleteStep = (index) => {
    setStepsData((prevSteps) => prevSteps.filter((_, i) => i !== index));
  };
  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];

    if (file) {
      setFieldValue("media", file);

      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleVideoChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];

    if (file) {
      setFieldValue("video", file);
    }
  };
  const handleSvgChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];

    if (file) {
      setFieldValue("svg", file);
    }
  };
  const handleStepImageChange = (file, index) => {
    const updatedSteps = [...stepsData];
    updatedSteps[index].media_steps = file;
    setStepsData(updatedSteps);
  };

  const handleStepsCountChange = (e) => {
    const count = parseInt(e.target.value) || 0;
    setStepsCount(count);
    const stepsArray = Array.from({ length: count }, (_, idx) => ({
      content: "",
      content_ar: "",
      media_steps: null,
    }));
    setStepsData(stepsArray);
  };

  return (
    <Box m="20px">
      <Header
        title={language === "en" ? "CREATE EXERCISE" : "انشاء تمرين"}
        subtitle={
          language === "en"
            ? "Create a New Exercise"
            : "املأ البيانات لانشاء تمرين"
        }
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
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
              {/* Basic Inputs */}
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
              <InputForm
                num={4}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.description}
                touched={touched.description}
                errors={errors.description}
                title={language === "en" ? "description" : "الوصف"}
                name={"description"}
              />
              <InputForm
                num={4}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.description_ar}
                touched={touched.description_ar}
                errors={errors.description_ar}
                title={language === "en" ? "title ar" : "الوصف بالعربي"}
                name={"description_ar"}
              />
              <InputForm
                type={"number"}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.calories}
                touched={touched.calories}
                errors={errors.calories}
                title={language === "en" ? "calories" : "السعرات الحرارية"}
                name={"calories"}
              />
              <InputForm
                type={"number"}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.duration}
                touched={touched.duration}
                errors={errors.duration}
                title={language === "en" ? "duration" : "المدة"}
                name={"duration"}
              />
              <InputForm
                type={"number"}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.counter}
                touched={touched.counter}
                errors={errors.counter}
                title={language === "en" ? "counter" : "العداد"}
                name={"counter"}
              />

              {/* Steps Count */}
              <InputForm
                type={"number"}
                handleBlur={handleBlur}
                handleChange={handleStepsCountChange}
                values={stepsCount}
                touched={""}
                errors={""}
                title={language === "en" ? "Number of Steps" : "عدد الخطوات"}
                name={""}
              />
              {/* Render Steps */}
              {stepsData.map((step, index) => (
                <Box
                  key={index}
                  display="flex"
                  flexDirection="column"
                  gridColumn="span 4"
                  className="boxx"
                  p={2}
                  borderRadius="8px"
                  mb={2}
                >
                  <InputForm
                    num={4}
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].content = e.target.value;
                      setStepsData(updatedSteps);
                    }}
                    values={step.content}
                    touched={touched.counter}
                    errors={errors.counter}
                    title={
                      language === "en"
                        ? `Step ${index + 1} Content`
                        : `خطوة ${index + 1} تحتوي`
                    }
                    name={"step"}
                  />
                  <InputForm
                    num={4}
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].content_ar = e.target.value;
                      setStepsData(updatedSteps);
                    }}
                    values={step.content_ar}
                    touched={""}
                    errors={""}
                    title={
                      language === "en"
                        ? `Step ${index + 1} Content ar`
                        : `خطوة ${index + 1} تحتوي بالعربي`
                    }
                    name={"counter"}
                  />
                  <div className="cu">
                    <CustomeButton
                      accept={"media_steps/*"}
                      index={index}
                      onChange={(e) =>
                        handleStepImageChange(e.target.files[0], index)
                      }
                    />

                    <button
                      className="de"
                      onClick={() => handleDeleteStep(index)}
                      color="error"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </Box>
              ))}
              <SelectForm
                selectd={"Gender"}
                values={values.type}
                handleChange={handleChange}
                touched={touched.type}
                errors={errors.type}
                MenuProps={MenuProps}
                data={[
                  { id: 1, title: "male", value: "male" },
                  { id: 1, title: "feminine", value: "feminine" },
                ]}
              />
              <div
                className="uploadfile"
                style={{
                  border: "2px dashed #ccc",
                  gridColumn: "span 4",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label htmlFor="video" className="labelFile">
                  <span>
                    <CloudUploadIcon />
                  </span>
                  <p>
                    Drag and drop your video here or click to select an image!
                  </p>
                </label>
                <input
                  id="video"
                  type="file"
                  label="video"
                  onChange={(event) => handleVideoChange(event, setFieldValue)}
                  style={{ display: "none" }}
                />
              </div>
              <div
                className="uploadfile"
                style={{
                  border: "2px dashed #ccc",
                  gridColumn: "span 4",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label htmlFor="svg" className="labelFile">
                  <span>
                    <CloudUploadIcon />
                  </span>
                  <p>
                    Drag and drop your svg here or click to select an image!
                  </p>
                </label>
                <input
                  id="svg"
                  type="file"
                  label="svg"
                  onChange={(event) => handleSvgChange(event, setFieldValue)}
                  style={{ display: "none" }}
                />
              </div>
              {/* Upload Exercise Image */}
              <div
                className="uploadfile"
                style={{
                  border: "2px dashed #ccc",
                  gridColumn: "span 4",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {preview && (
                  <img
                    style={{ width: "25%", marginRight: "1rem" }}
                    src={preview}
                    alt="preview"
                  />
                )}
                <label htmlFor="file" className="labelFile">
                  <span>
                    <CloudUploadIcon />
                  </span>
                  <p>
                    Drag and drop your image here or click to select an image!
                  </p>
                </label>
                <input
                  id="file"
                  type="file"
                  label="media"
                  onChange={(event) => handleImageChange(event, setFieldValue)}
                  style={{ display: "none" }}
                />
              </div>
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                className={value === "dark" ? "newR dark" : "newR light"}
                sx={{ marginRight: "auto", padding: "1.5rem 2rem" }}
                type="submit"
                disabled={isSubmitting}
                color="secondary"
                variant="contained"
              >
                {isSubmitting
                  ? language === "en"
                    ? "Loading..."
                    : "انتظار..."
                  : language === "en"
                  ? "Create New Exercise"
                  : "تمرين جديدة"}{" "}
                <AddIcon sx={{ ml: "1rem" }} />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ExerciseForm;
