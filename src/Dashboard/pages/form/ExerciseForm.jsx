import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Form, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import ExerciseValidation from "../../validation/ExerciseValidation";
import { useDispatch, useSelector } from "react-redux";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ActStore } from "../../../Redux/Dashboard/Exercise/ExerciseSlice";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Loading from "../../components/loading/Loading";
import { useState } from "react";

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
  const { value } = useSelector((state) => state.mode);
  const { loadingStore, error } = useSelector((state) => state.Dexercise);
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
    setFieldValue("media", file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
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
      <Header title="CREATE EXERCISE" subtitle="Create a New Exercise" />

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
              <TextField
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
                  sx: {
                    fontSize: "1.2rem",
                    fontFamily: "system-ui",
                    lineHeight: "1.5",
                  },
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
                variant="filled"
                type="text"
                label="Title AR"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title_ar}
                name="title_ar"
                error={!!touched.title_ar && !!errors.title_ar}
                helperText={touched.title_ar && errors.title_ar}
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                  sx: {
                    fontSize: "1.2rem",
                    fontFamily: "system-ui",
                    lineHeight: "1.5",
                  },
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
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                  sx: {
                    fontSize: "1.2rem",
                    fontFamily: "system-ui",
                    lineHeight: "1.5",
                  },
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
                variant="filled"
                type="text"
                label="Description AR"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description_ar}
                name="description_ar"
                error={!!touched.description_ar && !!errors.description_ar}
                helperText={touched.description_ar && errors.description_ar}
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                  sx: {
                    fontSize: "1.2rem",
                    fontFamily: "system-ui",
                    lineHeight: "1.5",
                  },
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
                variant="filled"
                type="text"
                label="Calories"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.calories}
                name="calories"
                error={!!touched.calories && !!errors.calories}
                helperText={touched.calories && errors.calories}
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                  sx: {
                    fontSize: "1.2rem",
                    fontFamily: "system-ui",
                    lineHeight: "1.5",
                  },
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
                variant="filled"
                type="text"
                label="Duration"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.duration}
                name="duration"
                error={!!touched.duration && !!errors.duration}
                helperText={touched.duration && errors.duration}
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                  sx: {
                    fontSize: "1.2rem",
                    fontFamily: "system-ui",
                    lineHeight: "1.5",
                  },
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
                variant="filled"
                type="text"
                label="Counter"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.counter}
                name="counter"
                error={!!touched.counter && !!errors.counter}
                helperText={touched.counter && errors.counter}
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                  sx: {
                    fontSize: "1.2rem",
                    fontFamily: "system-ui",
                    lineHeight: "1.5",
                  },
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

              {/* Steps Count */}
              <TextField
                variant="filled"
                type="number"
                label="Number of Steps"
                onChange={handleStepsCountChange}
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                  sx: {
                    fontSize: "1.2rem",
                    fontFamily: "system-ui",
                    lineHeight: "1.5",
                  },
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

              {/* Render Steps */}
              {stepsData.map((step, index) => (
                <Box
                  key={index}
                  display="flex"
                  flexDirection="column"
                  gridColumn="span 4"
                  p={2}
                  border="1px solid #ccc"
                  borderRadius="8px"
                  mb={2}
                >
                  <TextField
                    variant="filled"
                    type="text"
                    label={`Step ${index + 1} Content`}
                    value={step.content}
                    onChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].content = e.target.value;
                      setStepsData(updatedSteps);
                    }}
                    sx={{ mb: 2 }}
                    InputProps={{
                      sx: {
                        fontSize: "1.2rem",
                        fontFamily: "system-ui",
                        lineHeight: "1.5",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        fontSize: "1.4rem",
                        color: value === "dark" ? "#fff" : "#000",
                        "&.Mui-focused": {
                          color: value === "dark" ? "#fff" : "#000",
                        },
                      },
                    }}
                  />
                  <TextField
                    variant="filled"
                    type="text"
                    label={`Step ${index + 1} Content Ar`}
                    value={step.content_ar}
                    onChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].content_ar = e.target.value;
                      setStepsData(updatedSteps);
                    }}
                    sx={{ mb: 2 }}
                    InputProps={{
                      sx: {
                        fontSize: "1.2rem",
                        fontFamily: "system-ui",
                        lineHeight: "1.5",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        fontSize: "1.4rem",
                        color: value === "dark" ? "#fff" : "#000",
                        "&.Mui-focused": {
                          color: value === "dark" ? "#fff" : "#000",
                        },
                      },
                    }}
                  />

                  <input
                    type="file"
                    accept="media_steps/*"
                    onChange={(e) =>
                      handleStepImageChange(e.target.files[0], index)
                    }
                    style={{ marginBottom: "10px" }}
                  />
                   <button className="de" onClick={() => handleDeleteStep(index)} color="error">delete</button>
                </Box>
              ))}
              <Select
                name="type"
                value={values.type}
                variant="filled"
                onChange={
                handleChange
                }
                error={!!touched.type && !!errors.type}
                helperText={touched.type && errors.type}
                sx={{ gridColumn: "span 4", fontSize: "1.6rem" }}
                MenuProps={MenuProps}
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return <em style={{ color: "#aaa" }}>Gender</em>;
                  }
                  return selected;
                }}
              >
                <MenuItem
                  sx={{
                    fontSize: "1.2rem",
                    fontFamily: "system-ui",
                    lineHeight: "1.5",
                  }}
                  key={1}
                  value={"male"}
                >male</MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "1.2rem",
                    fontFamily: "system-ui",
                    lineHeight: "1.5",
                  }}
                  key={2}
                  value={"feminine"}
                >feminine</MenuItem>
              </Select>

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
              <Loading loading={loadingStore} error={error}>
                <Button
                  className={value === "dark" ? "newR dark" : "newR light"}
                  sx={{ marginRight: "auto", padding: "1.5rem 2rem" }}
                  type="submit"
                  color="secondary"
                  variant="contained"
                >
                  Create New Exercise <AddIcon sx={{ ml: "1rem" }} />
                </Button>
              </Loading>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ExerciseForm;
