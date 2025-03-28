import {
  Box,
  Button,
  Select,
  MenuItem,
  Paper,
  Chip,
  styled,
} from "@mui/material";
import { Form, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import GymValidation from "../../validation/GymValidation";
import { useDispatch, useSelector } from "react-redux";
import { ActIndex } from "../../../Redux/Dashboard/Section/SectionSlice";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useEffect, useState } from "react";
import { ActStore } from "../../../Redux/Dashboard/Gym/GymSlice";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import AddIcon from "@mui/icons-material/Add";
import InputForm from "../../components/InputForm";

const GymForm = () => {
  const nav = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { value, language } = useSelector((state) => state.mode);
  const { checkoutSchema, initialValues } = GymValidation();
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
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("description_ar", values.description_ar);
    chipData.forEach((element) => {
      formData.append("section[]", element.key);
    });
    formData.append("open", values.open);
    formData.append("close", values.close);
    formData.append("address", values.address);
    formData.append("price", values.price);
    formData.append("type", values.type);
    formData.append("media", values.media);
    dispatch(ActStore(formData))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Gym successfully!`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(`Update Gym faild!`, { variant: "error" });
      });
  };
  const [preview, setPreview] = useState("");
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


  const { sections, loading } = useSelector((state) => state.Dsection);
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
  const newData = chipData.map((data) => {
    return (
      <ListItem key={data.key}>
        <Chip
          sx={{ fontSize: "1.5rem" }}
          label={data.label}
          onDelete={handleDelete(data)}
        />
      </ListItem>
    );
  });

  return (
    <Box m="20px">
      <Header title={language === "en" ?"CREATE GYM": "انشاء نادي رياضي"} subtitle={language === "en" ? "Create a New Gym" : "املأ البيانات لانشاء نادي رياضي"} />
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
                values={values.name}
                touched={touched.name}
                errors={errors.name}
                title={language === "en" ? "name" : "اسم النادي"}
                name={"name"}
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
                values={values.open}
                touched={touched.open}
                errors={errors.open}
                title={language === "en" ? "time open" : "وقت الفتح"}
                name={"open"}
              />
               <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.close}
                touched={touched.close}
                errors={errors.close}
                title={language === "en" ? "time close" : "وقت الاغلاق"}
                name={"close"}
              />
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.price}
                touched={touched.price}
                errors={errors.price}
                title={language === "en" ? "price" : "تكلفة النادي"}
                name={"price"}
              />
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.type}
                touched={touched.type}
                errors={errors.type}
                title={language === "en" ? "type" : "نوع النادي"}
                name={"type"}
              />
               <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.address}
                touched={touched.address}
                errors={errors.address}
                title={language === "en" ? "address" : "عنوان النادي"}
                name={"address"}
              />
              <Select
                fullWidth
                name="section"
                value={values.levels}
                variant="filled"
                onChange={handleChange}
                error={!!touched.section && !!errors.section}
                helperText={touched.section && errors.section}
                sx={{ gridColumn: "span 4", fontSize: "1.6rem" }}
                MenuProps={MenuProps}
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return <em style={{ color: "#aaa" }}>Section</em>;
                  }
                  return selected;
                }}
              >
                {loading === "pending" ? (
                  <MenuItem value="0">loading...</MenuItem>
                ) : (
                  sections.map((e) => {
                    return (
                      <MenuItem
                        sx={{ fontSize: "1.5rem" }}
                        onClick={() => {
                          setChipData((prevChipData) => [
                            ...prevChipData,
                            { key: e.id, label: e.title },
                          ]);
                        }}
                        key={e.id}
                        value={e.id}
                      >
                        {e.title}
                      </MenuItem>
                    );
                  })
                )}
              </Select>
              {newData.length > 0 && (
                <Paper
                  fullWidth
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
                  ? "Create New Gym"
                  : "نادي جديدة"}{" "} <AddIcon />
                </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default GymForm;
