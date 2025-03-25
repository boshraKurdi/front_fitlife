import { Box, Button, TextField, MenuItem, Select } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Loading from "../../components/loading/Loading";
import UseUpdateMeal from "../../hooks/UseUpdateMeal";
const MealUpdate = () => {
  const {
    loadingShow,
    isNonMobile,
    value,
    handleDeleteStep,
    categories,
    stepsData,
    setStepsData,
    handleStepsCountChange,
    stepsCount,
    loading,
    handleImageChange,
    handleStepImageChange ,
    handleFormSubmit,
    loadingStore,
    error,
    checkoutSchema,
    initialValues,
    preview,
  } = UseUpdateMeal();
  console.log(stepsData)
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "150px",
        width: 250,
      },
    },
  };


  return (
    <Box m="20px">
      <Header title="UPDATE MEAL" subtitle="Update a Meal" />
      <Formik
        enableReinitialize={true}
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
                disabled={loadingShow === "pending" ? true : false}
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
                disabled={loadingShow === "pending" ? true : false}
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
                disabled={loadingShow === "pending" ? true : false}
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
                disabled={loadingShow === "pending" ? true : false}
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
                disabled={loadingShow === "pending" ? true : false}
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
                disabled={loadingShow === "pending" ? true : false}
                variant="filled"
                type="text"
                label="Components"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.components}
                name="components"
                error={!!touched.components && !!errors.components}
                helperText={touched.components && errors.components}
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
                disabled={loadingShow === "pending" ? true : false}
                variant="filled"
                type="text"
                label="Components AR"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.components}
                name="components_ar"
                error={!!touched.components_ar && !!errors.components_ar}
                helperText={touched.components_ar && errors.components_ar}
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
                              value={stepsCount}
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

          
              <div className="uploadfile" style={{ border: '2px dashed #ccc' ,gridColumn: "span 4" , display:'flex' , alignItems:'center' }}>
                {preview && <img style={{width:'25%' , marginRight:'1rem'}} src={preview} alt="none" />}
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
              <Loading
                loading={loadingStore}
                loadingShow={loadingShow}
                error={error}
              >
                <Button
                  className={value === "dark" ? "newR dark" : "newR light"}
                  sx={{ marginRight: "auto", padding: "1.5rem 2rem" }}
                  type="submit"
                  color="secondary"
                  variant="contained"
                >
                  Update Meal <EditIcon sx={{ ml: "1rem" }} />
                </Button>
              </Loading>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default MealUpdate;
