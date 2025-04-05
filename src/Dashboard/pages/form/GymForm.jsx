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
  const [stats, setStats] = useState({ loading: "idle", error: "" });
  const [address, setAddress] = useState({ lat: 0, lon: 0 });

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
    formData.append("lat", address.lat);
    formData.append("lon", address.lon);
    formData.append("price", values.price);
    formData.append("type", values.type);
    formData.append("media", values.media);
    if (stats.loading === "succeeded") {
      dispatch(ActStore(formData))
        .unwrap()
        .then(() => {
          nav("/dashboard");
          enqueueSnackbar(`Update Gym successfully!`, { variant: "success" });
        })
        .catch(() => {
          enqueueSnackbar(`Update Gym faild!`, { variant: "error" });
        });
    } else {
      enqueueSnackbar(`faild found loaction try agien!`, { variant: "error" });
    }
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
  console.log(address, stats.loading);

  const getLatALon = async (location) => {
    if (!location) return; // التأكد من عدم إرسال قيمة فارغة

    console.log("Fetching location for:", location);

    try {
      setStats({ ...stats, loading: "pending" });

      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          location
        )}&addressdetails=1`,
        {
          headers: {
            "User-Agent": "Mozilla/5.0",
          },
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      if (!data.length) {
        throw new Error("Location not found");
      }

      const { lat, lon } = data[0];

      setStats({ ...stats, loading: "succeeded" });
      setAddress({ ...address, lat, lon });

      console.log("Coordinates:", { lat, lon });
    } catch (error) {
      console.error("Error fetching location:", error);
      setStats({ ...stats, loading: "failed", error: error.message });
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
      <Header
        title={language === "en" ? "CREATE GYM" : "انشاء نادي رياضي"}
        subtitle={
          language === "en"
            ? "Create a New Gym"
            : "املأ البيانات لانشاء نادي رياضي"
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
                values={values.name}
                touched={touched.name}
                errors={errors.name}
                title={language === "en" ? "name" : "اسم النادي"}
                name={"name"}
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
                values={values.open}
                touched={touched.open}
                errors={errors.open}
                title={language === "en" ? "time open" : "وقت الفتح"}
                name={"open"}
              />
              <InputForm
                type={"number"}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.close}
                touched={touched.close}
                errors={errors.close}
                title={language === "en" ? "time close" : "وقت الاغلاق"}
                name={"close"}
              />
              <InputForm
                type={"number"}
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
                handleBlur={(e) => {
                  handleBlur(e);
                  getLatALon(values.address);
                }}
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
                value={values.section}
                variant="filled"
                onChange={handleChange}
                error={!!touched.section && !!errors.section}
                helperText={touched.section && errors.section}
                sx={{
                  gridColumn: "span 4",
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
                  : "نادي جديدة"}{" "}
                <AddIcon />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default GymForm;
