import { Box, Button, TextField, MenuItem, Select } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Loading from "../../components/loading/Loading";
import UseUpdateExercise from "../../hooks/UseUpdateExercise";
const ExerciseUpdate = () => {
  const {
    loadingShow,
    MenuProps,
    handleStepImageChange,
    isNonMobile,
    handleStepsCountChange,
    value,
    handleDeleteStep,
    handleImageChange,
    handleFormSubmit,
    loadingStore,
    error,
    setStepsData ,
    stepsData,
    checkoutSchema,
    initialValues,
    preview,
    stepsCount
  } = UseUpdateExercise();

  return (
    <Box m="20px">
      <Header title="UPDATE EXERCISE" subtitle="Update a Exercise" />
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
                label="Duration"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.duration}
                name="duration"
                error={!!touched.duration && !!errors.duration}
                helperText={touched.duration && errors.duration}
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
                label="Counter"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.counter}
                name="counter"
                error={!!touched.counter && !!errors.counter}
                helperText={touched.counter && errors.counter}
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
                   <button className="de"  onClick={() => handleDeleteStep(index)} color="error">delete</button>
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
                  Update Exercise <EditIcon sx={{ ml: "1rem" }} />
                </Button>
              </Loading>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ExerciseUpdate;
