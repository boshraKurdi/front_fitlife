import {
    Box,
    Button,
    TextField,
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
  import Loading from "../../components/loading/Loading";
  import AddIcon from '@mui/icons-material/Add';
  
  const GymForm = () => {
    const nav = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { value } = useSelector((state) => state.mode);
    const { loadingStore, error } = useSelector((state) => state.Dgoal);
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
      chipData.forEach(element => {
        formData.append("section[]", element.key);
      });
      formData.append("open", values.open);
      formData.append("close", values.close);
      formData.append("price", values.price);
      formData.append("type", values.type);
      formData.append("media", values.media);
      dispatch(ActStore(formData))
        .unwrap()
        .then(() => {
          nav("/dashboard");
          enqueueSnackbar(`Update Gym successfully!`, { variant: "success" });
        }).catch(()=>{
          enqueueSnackbar(`Update Gym faild!`, { variant: "error" });
        });
    };
    const [preview, setPreview] = useState('');
    
      const handleImageChange = (event, setFieldValue) => {
        const file = event.currentTarget.files[0];
        setFieldValue("image", file);
    
        // إنشاء معاينة للصورة
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
        <Header title="CREATE GYM" subtitle="Create a New Gym" />
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
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.title}
                  name="name"
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Open"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.duration}
                  name="open"
                  error={!!touched.open && !!errors.open}
                  helperText={touched.open && errors.open}
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
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Close"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.muscle}
                  name="close"
                  error={!!touched.close && !!errors.close}
                  helperText={touched.close && errors.close}
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
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Price"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.muscle}
                  name="price"
                  error={!!touched.price && !!errors.price}
                  helperText={touched.price && errors.price}
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
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Type"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.duration}
                  name="type"
                  error={!!touched.type && !!errors.type}
                  helperText={touched.type && errors.type}
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
                  fullWidth
                  name="section"
                  value={values.levels}
                  variant="filled"
                  onChange={handleChange}
                  error={!!touched.section && !!errors.section}
                  helperText={touched.section && errors.section}
                  sx={{ gridColumn: "span 2", fontSize: "1.6rem" }}
                  MenuProps={MenuProps}
                >
                  {loading === 'pending'
                    ? <MenuItem value="0">loading...</MenuItem>
                    : sections.map((e) => {
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
                      })}
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
                 <div className="uploadfile" style={{ border: '2px dashed #ccc' ,gridColumn: "span 4" , display:'flex' , alignItems:'center' }}>
                {preview && <img style={{width:'25%' , marginRight:'1rem'}} src={preview} alt="none" />}
                <label htmlFor="file" class="labelFile">
                  <span>
                    <CloudUploadIcon />
                  </span>
                  <p>
                    drag and drop your image here or click to select a image!
                  </p>
                </label>
                <input
                  variant="filled"
                  id="file"
                  type="file"
                  label="media"
                  onChange={(event) => handleImageChange(event, setFieldValue)}
                  name="media"
                  sx={{ gridColumn: "span 4" }}
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
                    Create New Gym <AddIcon />
                  </Button>
                </Loading>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    );
  };
  
  export default GymForm;
  