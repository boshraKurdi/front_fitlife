import { Box, Button, MenuItem, Select } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Form, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import MealValidation from "../../validation/MealValidation";
import { useDispatch, useSelector } from "react-redux";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useSnackbar } from "notistack";
import DeleteIcon from "@mui/icons-material/Delete";
import { ActStore } from "../../../Redux/Dashboard/Meal/MealSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ActIndex } from "../../../Redux/Dashboard/Category/CategorySlice";
import InputForm from "../../components/InputForm";
import CustomeButton from "../../components/CustomeButton/CustomeButton";
const MealForm = () => {
  const nav = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { value, language } = useSelector((state) => state.mode);
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
      num: 0,
      media_ingredients: null,
    }));
    setStepsData(stepsArray);
  };

  return (
    <Box m="20px">
      <Header title={language === "en" ? "CREATE MEAL": "انشاء وجبة"} subtitle={language === "en" ?"Create a New Meal" : "املأ البيانات لانشاء وجبة"} />
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
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.description}
                touched={touched.description}
                errors={errors.description}
                title={language === "en" ? "description" : "الوصف"}
                name={"description"}
              />
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.description_ar}
                touched={touched.description_ar}
                errors={errors.description_ar}
                title={language === "en" ? "description ar" : "الوصف بالعربي"}
                name={"description_ar"}
              />
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.calories}
                touched={touched.calories}
                errors={errors.calories}
                title={language === "en" ? "calories" : "السعرات الحرارية"}
                name={"calories"}
              />
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.carbohydrates}
                touched={touched.carbohydrates}
                errors={errors.carbohydrates}
                title={language === "en" ? "carbohydrates" : "الكربوهيدرات"}
                name={"carbohydrates"}
              />
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.fats}
                touched={touched.fats}
                errors={errors.fats}
                title={language === "en" ? "fats" : "الدهون"}
                name={"fats"}
              />
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.proteins}
                touched={touched.proteins}
                errors={errors.proteins}
                title={language === "en" ? "proteins" : "البروتينات"}
                name={"proteins"}
              />
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.prepare}
                touched={touched.prepare}
                errors={errors.prepare}
                title={language === "en" ? "prepare" : "طريقة التحضير"}
                name={"prepare"}
              />
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.prepare_ar}
                touched={touched.prepare_ar}
                errors={errors.prepare_ar}
                title={
                  language === "en"
                    ? "prepare ar"
                    : " طريقة التحضير بلفة العربي"
                }
                name={"prepare_ar"}
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
              <InputForm
                type="number"
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
                  p={2}
                  border="1px solid #ccc"
                  borderRadius="8px"
                  mb={2}
                >
                  <InputForm
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].name = e.target.value;
                      setStepsData(updatedSteps);
                    }}
                    value={step.name}
                    touched={""}
                    errors={""}
                    title={
                      language === "en"
                        ? `Ingredient ${index + 1} Name`
                        : `المكون ${index + 1} اسم`
                    }
                    name={""}
                  />
                  <InputForm
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].name_ar = e.target.value;
                      setStepsData(updatedSteps);
                    }}
                    value={step.name_ar}
                    touched={""}
                    errors={""}
                    title={
                      language === "en"
                        ? `Ingredient ${index + 1} Name Ar`
                        : `المكون بالعربي ${index + 1} اسم`
                    }
                    name={""}
                  />
                  <InputForm
                    type="number"
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].num = e.target.value;
                      setStepsData(updatedSteps);
                    }}
                    value={step.num}
                    touched={""}
                    errors={""}
                    title={
                      language === "en"
                        ? `Ingredient ${index + 1} num`
                        : `المكون ${index + 1} كمية`
                    }
                    name={""}
                  />
                  <div className="cu">
                    <CustomeButton
                      accept={"media_ingredients/*"}
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
                  ? "Create New Meal"
                  : "وجبة جديدة"}{" "}<AddIcon sx={{ ml: "1rem" }} />
                </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default MealForm;
