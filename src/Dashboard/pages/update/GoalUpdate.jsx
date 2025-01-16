import { Box, Button, TextField, Select, MenuItem, Paper } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../components/Header";
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Loading from "../../components/loading/Loading";
import UseUpdateGoal from "../../hooks/UseUpdateGoal";
const GoalUpdate = () => {
  const {
    setChipData,
    MenuProps,
    isNonMobile,
    value,
    newData,
    plans,
    loading,
    handleImageChange,
    handleFormSubmit,
    loadingStore,
    loadingShow,
    error,
    checkoutSchema,
    initialValues,
    preview
  } = UseUpdateGoal();
  
  return (
    <Box m="20px">
      <Header title="UPDATE GOAL" subtitle="Update a Goal" />
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
                variant="filled"
                type="text"
                label="Title"
                disabled={loadingShow === "pending" ? true : false}
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
                disabled={loadingShow === "pending" ? true : false}
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
                disabled={loadingShow === "pending" ? true : false}
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
                disabled={loadingShow === "pending" ? true : false}
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
                label="Calories Min"
                disabled={loadingShow === "pending" ? true : false}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.calories_min}
                name="calories_min"
                error={!!touched.calories_min && !!errors.calories_min}
                helperText={touched.calories_min && errors.calories_min}
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
                label="Calories Max"
                disabled={loadingShow === "pending" ? true : false}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.calories_max}
                name="calories_max"
                error={!!touched.calories_max && !!errors.calories_max}
                helperText={touched.calories_max && errors.calories_max}
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
                label="Duration"
                disabled={loadingShow === "pending" ? true : false}
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

              <Select
                name="PlanLevel"
                value={values.PlanLevel}
                variant="filled"
                disabled={loadingShow === "pending" ? true : false}
                onChange={handleChange}
                error={!!touched.PlanLevel && !!errors.PlanLevel}
                helperText={touched.PlanLevel && errors.PlanLevel}
                sx={{ gridColumn: "span 2", fontSize: "1.6rem" }}
                MenuProps={MenuProps}
              >
                {loading === "pending" ? (
                  <MenuItem value="0">loading...</MenuItem>
                ) : (
                  plans.map((e) => {
                    return (
                      <MenuItem
                        sx={{ fontSize: "1.5rem" }}
                        onClick={() => {
                          setChipData((prevChipData) => [
                            ...prevChipData,
                            { key: e.id, label: e.plan?.title },
                          ]);
                        }}
                        key={e.id}
                        value={e.id}
                      >
                        {e.plan?.title}
                      </MenuItem>
                    );
                  })
                )}
              </Select>
              {(newData.length > 0) && (
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
                  {loadingShow === "pending" ? 'loading...' : newData}
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
              <Loading loading={loadingStore} loadingShow={loadingShow} error={error}>
                <Button
                  className={value === "dark" ? "newR dark" : "newR light"}
                  sx={{ marginRight: "auto", padding: "1.5rem 2rem" }}
                  type="submit"
                  color="secondary"
                  variant="contained"
                >
                  Update Goal <EditIcon sx={{ml:'1rem'}}/>
                </Button>
              </Loading>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default GoalUpdate;
