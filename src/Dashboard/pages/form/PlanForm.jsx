import { Box, Button, Select, MenuItem } from "@mui/material";
import { Form, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import PlanValidation from "../../validation/PlanValidation";
import { useDispatch, useSelector } from "react-redux";
import { ActStore } from "../../../Redux/Dashboard/Plan/PlanSlice";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import CustomizedAccordions from "../../components/customizedAccordions/CustomizedAccordions";
import { ActExerciseIndex } from "../../../Redux/Dashboard/Exercise/ExerciseSlice";
import { ActIndex } from "../../../Redux/Dashboard/Meal/MealSlice";
import InputForm from "../../components/InputForm";

const PlanForm = () => {
  const nav = useNavigate();
  const [time, setTime] = useState(1);
  const [chipData, setChipData] = useState(
    Array.from({ length: time }, () => [])
  );
  const [type] = useState([
    { name: "thigh exercises" },
    { name: "Abdominal exercises" },
    { name: "Stretching exercises" },
    { name: "Sculpting exercises" },
    { name: "food" },
    { name: "water" },
    { name: "sleep" },
  ]);
  const [type_ar] = useState([
    { name: "تمارين الفخذ" },
    { name: "تمارين البطن" },
    { name: "تمارين الشد" },
    { name: "تمارين النحت" },
    { name: "غذاء" },
    { name: "ماء" },
    { name: "نوم" },
  ]);
  const [check, setCheck] = useState({ name: "", name_ar: "" });
  const { enqueueSnackbar } = useSnackbar();
  const { value, language } = useSelector((state) => state.mode);
  const { checkoutSchema, initialValues } = PlanValidation();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("title_ar", values.title_ar);
    formData.append("description", values.description);
    formData.append("description_ar", values.description_ar);
    formData.append("duration", values.duration);
    formData.append("muscle", values.muscle);
    formData.append("muscle_ar", values.muscle_ar);
    formData.append("type", check.name);
    formData.append("water", values.water);
    formData.append("sleep", values.sleep);
    formData.append(
      "a",
      JSON.stringify(chipData.map((day) => day.map((item) => item.key)))
    );
    formData.append("type_ar", check.name_ar);
    formData.append("media", values.media);

    dispatch(ActStore(formData))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Plan successfully!`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(`Update Plan faild!`, { variant: "error" });
      });
  };

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "150px",
        width: 250,
      },
    },
  };
  const [preview, setPreview] = useState("");

  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue("media", file);

    // إنشاء معاينة للصورة
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const { exercises } = useSelector((state) => state.Dexercise);
  useEffect(() => {
    dispatch(ActExerciseIndex());
  }, [dispatch]);
  useEffect(() => {
    dispatch(ActIndex());
  }, [dispatch]);
  const { meals } = useSelector((state) => state.Dmeal);

  return (
    <Box m="20px">
      <Header title={language === "en" ?"CREATE PLAN" : "انشاء خطة"} subtitle={language === "en" ?"Create a New Plan":"املأ البيانات لانشاء خطة"} />
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
                values={values.duration}
                touched={touched.duration}
                errors={errors.duration}
                title={language === "en" ? "duration" : "المدة"}
                name={"duration"}
              />
              <Select
                name="type"
                value={check.name}
                variant="filled"
                onChange={handleChange}
                error={!!touched.type && !!errors.type}
                helperText={touched.type && errors.type}
                sx={{ gridColumn: "span 2", fontSize: "1.6rem" }}
                MenuProps={MenuProps}
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return <em style={{ color: "#aaa" }}>Type</em>;
                  }
                  return selected;
                }}
              >
                {type?.map((e, index) => {
                  return (
                    <MenuItem
                      sx={{
                        fontSize: "1.2rem",
                        fontFamily: "system-ui",
                        lineHeight: "1.5",
                      }}
                      onClick={() => {
                        setCheck({
                          ...check,
                          name: e.name,
                          name_ar: type_ar[index].name,
                        });
                      }}
                      key={index}
                      value={e.name}
                    >
                      {e.name}
                    </MenuItem>
                  );
                })}
              </Select>
              {/* <Select
                name="type_ar"
                value={check.name_ar}
                variant="filled"
                onChange={handleChange}
                error={!!touched.type_ar && !!errors.type_ar}
                helperText={touched.type_ar && errors.type_ar}
                sx={{ gridColumn: "span 2", fontSize: "1.6rem" }}
                MenuProps={MenuProps}
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return <em style={{ color: "#aaa" }}>Type Ar</em>;
                  }
                  return selected;
                }}
              >
                {type_ar?.map((e, index) => {
                  return (
                    <MenuItem
                      sx={{
                        fontSize: "1.2rem",
                        fontFamily: "system-ui",
                        lineHeight: "1.5",
                      }}
                      onClick={() => {
                        setCheck({
                          ...check,
                          name: type[index].name,
                          name_ar: e.name,
                        });
                      }}
                      key={index}
                      value={e.name}
                    >
                      {e.name}
                    </MenuItem>
                  );
                })}
              </Select> */}
              {check.name == "water" ? (
                <InputForm
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values.water}
                  touched={touched.water}
                  errors={errors.water}
                  title={language === "en" ? "water" : "كمية الماء"}
                  name={"water"}
                />
              ) : check.name == "sleep" ? (
                <InputForm
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values.sleep}
                  touched={touched.sleep}
                  errors={errors.sleep}
                  title={language === "en" ? "sleep" : "ساعات النوم"}
                  name={"sleep"}
                />
              ) : check.name == "food" ? (
                <CustomizedAccordions
                  setChipData={setChipData}
                  chipData={chipData}
                  time={time * 7}
                  data={meals}
                  title="meals"
                />
              ) : check.name != "" ? (
                <>
                  <InputForm
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    values={values.muscle}
                    touched={touched.muscle}
                    errors={errors.muscle}
                    title={language === "en" ? "muscle" : "العضلة المستهدفة"}
                    name={"muscle"}
                  />
                  <InputForm
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    values={values.muscle_ar}
                    touched={touched.muscle_ar}
                    errors={errors.muscle_ar}
                    title={
                      language === "en"
                        ? "muscle_ar"
                        : "العضلة المستهدفة بالعربي"
                    }
                    name={"muscle_ar"}
                  />
                  <CustomizedAccordions
                    setChipData={setChipData}
                    chipData={chipData}
                    time={time * 7}
                    data={exercises}
                    title="exercises"
                  />
                </>
              ) : (
                ""
              )}

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
                disabled={isSubmitting}
                color="secondary"
                variant="contained"
              >
                 {isSubmitting
                  ? language === "en"
                    ? "Loading..."
                    : "انتظار..."
                  : language === "en"
                  ? "Create New Plan"
                  : "خطة جديدة"}{" "}<AddIcon sx={{ ml: "1rem" }} />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PlanForm;
