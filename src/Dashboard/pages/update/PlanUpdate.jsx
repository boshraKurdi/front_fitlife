import { Box, Button, TextField, Select, MenuItem, Paper } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Loading from "../../components/loading/Loading";
import UseUpdatePlan from "../../hooks/UseUpdatePlan";
const PlanUpdate = () => {
  const {
    isNonMobile,
    value,
    handleImageChange,
    setChipData,
    handleFormSubmit,
    loadingStore,
    error,
    loadingShow,
    newData,
    checkoutSchema,
    initialValues,
    preview,
  } = UseUpdatePlan();
  return (
    <Box m="20px">
      <Header title="UPDATE PLAN" subtitle="Update a Plan" />
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
                onBlur={handleBlur}
                onChange={handleChange}
                disabled={loadingShow === "pending" ? true : false}
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
                disabled={loadingShow === "pending" ? true : false}
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
                disabled={loadingShow === "pending" ? true : false}
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
                disabled={loadingShow === "pending" ? true : false}
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
                label="Muscle"
                disabled={loadingShow === "pending" ? true : false}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.muscle}
                name="muscle"
                error={!!touched.muscle && !!errors.muscle}
                helperText={touched.muscle && errors.muscle}
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
                label="Muscle AR"
                disabled={loadingShow === "pending" ? true : false}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.muscle_ar}
                name="muscle_ar"
                error={!!touched.muscle_ar && !!errors.muscle_ar}
                helperText={touched.muscle_ar && errors.muscle}
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
                fullWidth
                name="levels"
                disabled={loadingShow === "pending" ? true : false}
                value={values.levels}
                label={"levels"}
                variant="filled"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.levels && !!errors.levels}
                helperText={touched.levels && errors.levels}
                sx={{ gridColumn: "span 2", fontSize: "1.6rem" }}
              >
                <MenuItem
                  onClick={() => {
                    setChipData((prevChipData) => [
                      ...prevChipData,
                      { key: 0, label: "weak" },
                    ]);
                  }}
                  sx={{ fontSize: "1.5rem" }}
                  value={"1"}
                >
                  weak
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setChipData((prevChipData) => [
                      ...prevChipData,
                      { key: 1, label: "middle" },
                    ]);
                  }}
                  sx={{ fontSize: "1.5rem" }}
                  value={"2"}
                >
                  middle
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setChipData((prevChipData) => [
                      ...prevChipData,
                      { key: 2, label: "strong" },
                    ]);
                  }}
                  sx={{ fontSize: "1.5rem" }}
                  value={"3"}
                >
                  strong
                </MenuItem>
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
                  {loadingShow === "pending" ? "loading..." : newData}
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
                  Update Plan <EditIcon sx={{ ml: "1rem" }} />
                </Button>
              </Loading>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PlanUpdate;
