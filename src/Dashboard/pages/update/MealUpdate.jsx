import { Box, Button, MenuItem, Select } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UseUpdateMeal from "../../hooks/UseUpdateMeal";
import DeleteIcon from "@mui/icons-material/Delete";
import InputForm from "../../components/InputForm";
import CustomeButton from "../../components/CustomeButton/CustomeButton";
const MealUpdate = () => {
  const {
    isNonMobile,
    value,
    handleDeleteStep,
    categories,
    language,
    stepsData,
    setStepsData,
    handleStepsCountChange,
    stepsCount,
    loading,
    handleImageChange,
    handleStepImageChange,
    handleFormSubmit,
    checkoutSchema,
    initialValues,
    preview,
  } = UseUpdateMeal();
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
      <Header
        title={language === "en" ? "UPDATE MEAL" : "تعديل الوجبة"}
        subtitle={
          language === "en" ? "Update a Meal" : "ملأ البيانات لعديل الوجبة"
        }
      />
      <Formik
        enableReinitialize={true}
        onSubmit={handleFormSubmit}
        key={JSON.stringify(initialValues)}
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
                values={values.calories}
                touched={touched.calories}
                errors={errors.calories}
                title={language === "en" ? "calories" : "السعرات الحرارية"}
                name={"calories"}
              />
              <InputForm
                type={"number"}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.carbohydrates}
                touched={touched.carbohydrates}
                errors={errors.carbohydrates}
                title={language === "en" ? "carbohydrates" : "الكربوهيدرات"}
                name={"carbohydrates"}
              />
              <InputForm
                type={"number"}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.fats}
                touched={touched.fats}
                errors={errors.fats}
                title={language === "en" ? "fats" : "الدهون"}
                name={"fats"}
              />
              <InputForm
                type={"number"}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.proteins}
                touched={touched.proteins}
                errors={errors.proteins}
                title={language === "en" ? "proteins" : "البروتينات"}
                name={"proteins"}
              />
              <InputForm
                num={4}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.prepare}
                touched={touched.prepare}
                errors={errors.prepare}
                title={language === "en" ? "prepare" : "طريقة التحضير"}
                name={"prepare"}
              />
              <InputForm
                num={4}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.prepare_ar}
                touched={touched.prepare_ar}
                errors={errors.prepare_ar}
                title={
                  language === "en"
                    ? "prepare ar"
                    : " طريقة التحضير بلفة العربي"
                }
                name={"prepare_ar"}
              />
              <Select
                name="category_id"
                value={values.category_id}
                variant="filled"
                onChange={handleChange}
                error={!!touched.category_id && !!errors.category_id}
                helperText={touched.category_id && errors.category_id}
                sx={{
                  gridColumn: "span 2",
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
              <InputForm
                type={"number"}
                handleBlur={handleBlur}
                handleChange={handleStepsCountChange}
                values={stepsCount}
                touched={""}
                errors={""}
                title={
                  language === "en" ? "Number of components" : "عدد المكونات"
                }
                name={""}
              />

              {/* Render Steps */}
              {stepsData.map((step, index) => (
                <Box
                  key={index}
                  display="flex"
                  flexDirection="column"
                  gridColumn="span 4"
                  p={2}
                  className="boxx"
                  borderRadius="8px"
                  mb={2}
                >
                  <InputForm
                    num={4}
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].name = e.target.value;
                      setStepsData(updatedSteps);
                    }}
                    values={step?.name}
                    touched={""}
                    errors={""}
                    title={
                      language === "en"
                        ? `Ingredient ${index + 1} Name`
                        : `المكون ${index + 1} اسم`
                    }
                    name={""}
                  />
                  <InputForm
                    num={4}
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].name_ar = e.target.value;
                      setStepsData(updatedSteps);
                    }}
                    values={step?.name_ar}
                    touched={""}
                    errors={""}
                    title={
                      language === "en"
                        ? `Ingredient ${index + 1} Name Ar`
                        : `المكون بالعربي ${index + 1} اسم`
                    }
                    name={""}
                  />
                  <InputForm
                    type="number"
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].num = e.target.value;
                      setStepsData(updatedSteps);
                    }}
                    values={step.num}
                    touched={""}
                    errors={""}
                    title={
                      language === "en"
                        ? `Ingredient ${index + 1} num`
                        : `المكون ${index + 1} كمية`
                    }
                    name={""}
                  />
                  <div className="cu">
                    <CustomeButton
                      accept={"media_ingredients/*"}
                      index={index}
                      onChange={(e) =>
                        handleStepImageChange(e.target.files[0], index)
                      }
                    />

                    <button
                      className="de"
                      onClick={() => handleDeleteStep(index)}
                      color="error"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </Box>
              ))}

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
                  ? "Update Meal"
                  : "تعديل الوجبة"}{" "}
                <EditIcon sx={{ ml: "1rem" }} />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default MealUpdate;
