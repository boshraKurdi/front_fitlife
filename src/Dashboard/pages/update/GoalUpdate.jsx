import { Box, Button, Select, MenuItem, Paper } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UseUpdateGoal from "../../hooks/UseUpdateGoal";
import InputForm from "../../components/InputForm";
const GoalUpdate = () => {
  const {
    setChipData,
    MenuProps,
    isNonMobile,
    language,
    value,
    newData,
    plans,
    loading,
    handleImageChange,
    handleFormSubmit,
    loadingShow,
    checkoutSchema,
    initialValues,
    preview,
  } = UseUpdateGoal();

  return (
    <Box m="20px">
      <Header title={language === "en" ? "UPDATE GOAL" : "تعديل الهدف"} subtitle={language === "en" ?  "Update a Goal" : "املأ البيانات لتعديل الهدف" } />
      <Formik
         key={JSON.stringify(initialValues)}
        enableReinitialize={true}
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
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
                values={values.calories_min}
                touched={touched.calories_min}
                errors={errors.calories_min}
                title={language === "en" ? "calories min" : "اقل سعرات حرارية"}
                name={"calories_min"}
              />
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.calories_max}
                touched={touched.calories_max}
                errors={errors.calories_max}
                title={language === "en" ? "calories max" : "اكثر سعرات حرارية"}
                name={"calories_max"}
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
                name="Plan"
                value={values.Plan}
                variant="filled"
                disabled={loadingShow === "pending" ? true : false}
                onChange={handleChange}
                error={!!touched.Plan && !!errors.Plan}
                helperText={touched.Plan && errors.Plan}
                sx={{ gridColumn: "span 2", fontSize: "1.6rem" }}
                MenuProps={MenuProps}
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
              {newData?.length > 0 && (
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
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? language === "en"
                    ? "Loading..."
                    : "انتظار..."
                  : language === "en"
                  ? "Update Goal"
                  : "تعديل الهدف "}{" "}
                <EditIcon sx={{ ml: "1rem" }} />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default GoalUpdate;
