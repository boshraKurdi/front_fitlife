import {
  Box,
  Button,
  Paper,
  Chip,
  styled,
  MenuItem,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Form, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import GoalValidation from "../../validation/GoalValidation";
import { useDispatch, useSelector } from "react-redux";
import { ActIndex } from "../../../Redux/Dashboard/Plan/PlanSlice";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useEffect, useState } from "react";
import { ActStore } from "../../../Redux/Dashboard/Goal/GoalSlice";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import InputForm from "../../components/InputForm";

const GoalForm = () => {
  const nav = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { value, language } = useSelector((state) => state.mode);
  const { checkoutSchema, initialValues } = GoalValidation();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "150px",
        width: 250,
      },
    },
  };

  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("title_ar", values.title_ar);
    formData.append("description", values.description);
    formData.append("description_ar", values.description_ar);
    formData.append("duration", values.duration);
    chipData.forEach((element) => {
      formData.append("Plan[]", element.key);
    });
    formData.append("calories_max", values.calories_max);
    formData.append("calories_min", values.calories_min);
    formData.append("media", values.media);
    dispatch(ActStore(formData))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Goal successfully!`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(`Update Goal faild!`, { variant: "error" });
      });
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

  const { plans, loading } = useSelector((state) => state.Dplan);
  useEffect(() => {
    dispatch(ActIndex());
  }, [dispatch]);
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));
  const [chipData, setChipData] = useState([]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };
  const newData = chipData?.map((data) => {
    return (
      <ListItem key={data.key}>
        <Chip
          sx={{
            fontSize: "1.2rem",
            fontFamily: "system-ui",
            lineHeight: "1.5",
          }}
          label={data.label}
          onDelete={handleDelete(data)}
        />
      </ListItem>
    );
  });

  return (
    <Box m="20px">
      <Header
        title={language === "en" ? "CREATE GOAL" : "انشاء هدف"}
        subtitle={
          language === "en" ? "Create a New Goal" : "املأ البيانات لانشاء هدف"
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
          isSubmitting,
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
                title={language === "en" ? "description ar" : "الوصف بالعربي"}
                name={"description_ar"}
              />
              <InputForm
                type={"number"}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.calories_min}
                touched={touched.calories_min}
                errors={errors.calories_min}
                title={language === "en" ? "calories min" : "اقل سعرات حرارية"}
                name={"calories_min"}
              />
              <InputForm
                type={"number"}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.calories_max}
                touched={touched.calories_max}
                errors={errors.calories_max}
                title={language === "en" ? "calories max" : "اكثر سعرات حرارية"}
                name={"calories_max"}
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
              <Select
                name="Plan"
                value={values.Plan}
                variant="filled"
                onChange={handleChange}
                error={!!touched.Plan && !!errors.Plan}
                helperText={touched.Plan && errors.Plan}
                sx={{
                  gridColumn: "span 2",
                  fontSize: "1.6rem",
                  "&:before": {
                    borderBottom: "none",
                  },
                  "&:after": {
                    borderBottom: "none",
                  },
                  "& .MuiFilledInput-root": {
                    backgroundColor: "transparent",
                    "&:before": {
                      borderBottom: "none",
                    },
                    "&:after": {
                      borderBottom: "none",
                    },
                  },
                }}
                MenuProps={MenuProps}
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return <em style={{ color: "#aaa" }}>Plans</em>;
                  }
                  return selected;
                }}
              >
                {loading === "pending" ? (
                  <MenuItem value="0">loading...</MenuItem>
                ) : (
                  plans?.map((e) => {
                    return (
                      <MenuItem
                        sx={{ fontSize: "1.3rem", lineHeight: "1.5" }}
                        onClick={() => {
                          setChipData((prevChipData) => [
                            ...prevChipData,
                            { key: e.id, label: e?.title },
                          ]);
                        }}
                        key={e.id}
                        value={e.id}
                      >
                        {e?.title}
                      </MenuItem>
                    );
                  })
                )}
              </Select>
              {newData.length > 0 && (
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    listStyle: "none",
                    gridColumn: "span 4",
                    p: 0.5,
                    m: 0,
                  }}
                  component="ul"
                >
                  {newData}
                </Paper>
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
                color="secondary"
                disabled={isSubmitting}
                variant="contained"
              >
                {isSubmitting
                  ? language === "en"
                    ? "Loading..."
                    : "انتظار..."
                  : language === "en"
                  ? "Create New Goal"
                  : "هدف جديدة"}{" "}
                <AddIcon sx={{ ml: "1rem" }} />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default GoalForm;
