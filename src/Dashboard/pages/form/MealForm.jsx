import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Form, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import MealValidation from "../../validation/MealValidation";
import { useDispatch, useSelector } from "react-redux";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useSnackbar } from "notistack";
import { ActStore } from "../../../Redux/Dashboard/Meal/MealSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { useEffect, useState } from "react";
import { ActIndex } from "../../../Redux/Dashboard/Category/CategorySlice";
const MealForm = () => {
  const nav = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { value } = useSelector((state) => state.mode);
  const { loadingStore, error } = useSelector((state) => state.Dmeal);
  const { categories, loading } = useSelector((state) => state.Dcategory);
  const { checkoutSchema, initialValues } = MealValidation();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActIndex());
  }, [dispatch]);
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "150px",
        width: 250,
      },
    },
  };
  const [stepsCount, setStepsCount] = useState(0);
    const [stepsData, setStepsData] = useState([]);

  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("title_ar", values.title_ar);
    formData.append("description", values.description);
    formData.append("description_ar", values.description_ar);
    formData.append("prepare", values.prepare);
    formData.append("prepare_ar", values.prepare_ar);
    formData.append("calories", values.calories);
    formData.append("fats", values.fats);
    formData.append("carbohydrates", values.carbohydrates);
    formData.append("proteins", values.proteins);
    formData.append("category_id", values.category_id);
    // إضافة خطوات التمرين
    stepsData.forEach((step, index) => {
      formData.append(`ingredients[${index}][name]`, step.name);
      formData.append(`ingredients[${index}][name_ar]`, step.name_ar);
      formData.append(`ingredients[${index}][num]`, step.num);
      if (step.media_ingredients) {
        formData.append(`media_ingredients[${index}]`, step.media_ingredients);
      }
    });
    formData.append("media", values.media);
    dispatch(ActStore(formData))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Meal successfully!`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(`Update Meal faild!`, { variant: "error" });
      });
  };
  const [preview, setPreview] = useState("");
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
    updatedSteps[index].media_ingredients = file;
    setStepsData(updatedSteps);
  };

  const handleStepsCountChange = (e) => {
    const count = parseInt(e.target.value) || 0;
    setStepsCount(count);
    const stepsArray = Array.from({ length: count }, (_, idx) => ({
      name: "",
      name_ar: "",
      num: 0 ,
      media_ingredients: null,
    }));
    setStepsData(stepsArray);
  };

  return (
    <Box m="20px">
      <Header title="CREATE MEAL" subtitle="Create a New Meal" />
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
                variant="filled"
                type="text"
                label="Carbohydrates"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.carbohydrates}
                name="carbohydrates"
                error={!!touched.carbohydrates && !!errors.carbohydrates}
                helperText={touched.carbohydrates && errors.carbohydrates}
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
                variant="filled"
                type="text"
                label="Fats"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fats}
                name="fats"
                error={!!touched.fats && !!errors.fats}
                helperText={touched.fats && errors.fats}
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
                variant="filled"
                type="text"
                label="Prepare"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.prepare}
                name="prepare"
                error={!!touched.prepare && !!errors.prepare}
                helperText={touched.prepare && errors.prepare}
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
                variant="filled"
                type="text"
                label="Prepare AR"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.prepare_ar}
                name="prepare_ar"
                error={!!touched.prepare_ar && !!errors.prepare_ar}
                helperText={touched.prepare_ar && errors.prepare_ar}
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
              <Select
                name="category_id"
                value={values.category_id}
                variant="filled"
                onChange={handleChange}
                error={!!touched.category_id && !!errors.category_id}
                helperText={touched.category_id && errors.category_id}
                sx={{ gridColumn: "span 2", fontSize: "1.6rem" }}
                MenuProps={MenuProps}
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return <em style={{ color: "#aaa" }}>Category</em>;
                  }
                  return selected;
                }}
              >
                {loading === "pending" ? (
                  <MenuItem value="0">loading...</MenuItem>
                ) : (
                  categories.map((e) => {
                    return (
                      <MenuItem
                        sx={{ fontSize: "1.5rem" }}
                        onClick={() => {}}
                        key={e.id}
                        value={e.id}
                      >
                        {e.title}
                      </MenuItem>
                    );
                  })
                )}
              </Select>
              <TextField
                variant="filled"
                type="text"
                label="Proteins"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.proteins}
                name="proteins"
                error={!!touched.proteins && !!errors.proteins}
                helperText={touched.proteins && errors.proteins}
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
                    label={`Ingredient ${index + 1} Name`}
                    value={step.name}
                    onChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].name = e.target.value;
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
                    type="number"
                    label={`Ingredient ${index + 1} num`}
                    value={step.num}
                    onChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].num = e.target.value;
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
                    label={`Ingredient ${index + 1} Name Ar`}
                    value={step.name_ar}
                    onChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].name_ar = e.target.value;
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
                    accept="media_ingredients/*"
                    onChange={(e) =>
                      handleStepImageChange(e.target.files[0], index)
                    }
                    style={{ marginBottom: "10px" }}
                  />
                     <button className="de" onClick={() => handleDeleteStep(index)} color="error">delete</button>
                </Box>
              ))}

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
                    alt="none"
                  />
                )}
                <label htmlFor="file" className="labelFile">
                  <span>
                    <CloudUploadIcon />
                  </span>
                  <p>
                    drag and drop your image here or click to select a image!
                  </p>
                </label>
                <input
                  id="file"
                  type="file"
                  label="media"
                  onChange={(event) => handleImageChange(event, setFieldValue)}
                  name="media"
                  style={{ gridColumn: "span 4" }}
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
                  Create New Meal <AddIcon sx={{ ml: "1rem" }} />
                </Button>
              </Loading>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default MealForm;
