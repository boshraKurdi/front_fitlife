import { Box, Button, Select, MenuItem, Paper } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UseUpdateGym from "../../hooks/UseUpdateGym";
import InputForm from "../../components/InputForm";
const GymUpdate = () => {
  const {
    sections,
    loadingShow,
    setChipData,
    MenuProps,
    language,
    isNonMobile,
    value,
    newData,
    loading,
    handleImageChange,
    handleFormSubmit,
    checkoutSchema,
    preview,
    initialValues,
  } = UseUpdateGym();

  return (
    <Box m="20px">
      <Header
        title={language === "en" ? "UPDATE GOAL" : "تعديل النادي"}
        subtitle={
          language === "en" ? "Update a Goal" : "املأ البيانات لتعديل النادي"
        }
      />
      <Formik
        enableReinitialize={true}
        key={JSON.stringify(initialValues)}
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
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.address}
                touched={touched.address}
                errors={errors.address}
                title={language === "en" ? "address" : "عنوان النادي"}
                name={"address"}
              />

              <Select
                name="section"
                value={values.section}
                variant="filled"
                disabled={loadingShow === "pending" ? true : false}
                onChange={handleChange}
                error={!!touched.section && !!errors.section}
                helperText={touched.section && errors.section}
                sx={{ gridColumn: "span 4", fontSize: "1.6rem" }}
                MenuProps={MenuProps}
              >
                {loading === "pending" ? (
                  <MenuItem value="0">loading...</MenuItem>
                ) : (
                  sections?.map((e) => {
                    return (
                      <MenuItem
                        sx={{ fontSize: "1.5rem" }}
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
                disabled={isSubmitting}
                variant="contained"
              >
                {isSubmitting
                  ? language === "en"
                    ? "Loading..."
                    : "انتظار..."
                  : language === "en"
                  ? "Update Gym"
                  : "تعديل النادي"}{" "}
                <EditIcon sx={{ ml: "1rem" }} />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default GymUpdate;
