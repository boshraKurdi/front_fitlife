import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UseUpdatePlan from "../../hooks/UseUpdatePlan";
import CustomizedAccordions from "../../components/customizedAccordions/CustomizedAccordions";
const PlanUpdate = () => {
  const {
    loadingShow,
    check,
    setCheck,
    MenuProps,
    isNonMobile,
    value,
    exercises,
    meals,
    type,
    time,
    setTime,
    type_ar,
    chipData,
    setChipData,
    handleImageChange,
    preview,
    handleFormSubmit,
    checkoutSchema,
    initialValues,
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
                label="Duration"
                disabled={loadingShow === "pending" ? true : false}
                onBlur={() => {
                  setTime(values.duration);
                  handleBlur;
                }}
                onChange={handleChange}
                value={values.duration}
                name="duration"
                error={!!touched.duration && !!errors.duration}
                helperText={touched.duration && errors.duration}
                sx={{ gridColumn: "span 4" }}
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
              <Select
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
              </Select>
              {check.name == "water" ? (
                <TextField
                  variant="filled"
                  type="text"
                  label="Water"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.water}
                  name="water"
                  error={!!touched.water && !!errors.water}
                  helperText={touched.water && errors.water}
                  sx={{ gridColumn: "span 4" }}
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
              ) : check.name == "sleep" ? (
                <TextField
                  variant="filled"
                  type="text"
                  label="Sleep"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.water}
                  name="sleep"
                  error={!!touched.sleep && !!errors.sleep}
                  helperText={touched.sleep && errors.sleep}
                  sx={{ gridColumn: "span 4" }}
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
              ) : check.name == "food" ? (
                <CustomizedAccordions
                  setChipData={setChipData}
                  chipData={chipData}
                  time={time}
                  data={meals}
                  title="meals"
                />
              ) : check.name != "" ? (
                <>
                  <TextField
                    variant="filled"
                    type="text"
                    label="Muscle"
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
                    label="Muscle Ar"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.muscle_ar}
                    name="muscle_ar"
                    error={!!touched.muscle_ar && !!errors.muscle_ar}
                    helperText={touched.muscle_ar && errors.muscle_ar}
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
                  <CustomizedAccordions
                    setChipData={setChipData}
                    chipData={chipData}
                    time={time}
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
                  color="secondary"
                  variant="contained"
                >
                  Update Plan <EditIcon sx={{ ml: "1rem" }} />
                </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PlanUpdate;
