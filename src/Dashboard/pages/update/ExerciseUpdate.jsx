import { Box, Button } from "@mui/material";
import { Form, Formik } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UseUpdateExercise from "../../hooks/UseUpdateExercise";
import InputForm from "../../components/InputForm";
import CustomeButton from "../../components/CustomeButton/CustomeButton";
import SelectForm from "../../components/SelectForm";
const ExerciseUpdate = () => {
  const {
    MenuProps,
    handleStepImageChange,
    isNonMobile,
    language,
    handleStepsCountChange,
    value,
    handleDeleteStep,
    handleImageChange,
    handleFormSubmit,
    setStepsData,
    stepsData,
    checkoutSchema,
    initialValues,
    preview,
    stepsCount,
  } = UseUpdateExercise();

  return (
    <Box m="20px">
      <Header title={language === "en" ? "UPDATE EXERCISE" : "تعديل التمرين"} subtitle={language === "en" ? "Update a Exercise" : "املأ البيانات لعديل التمرين"} />
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
                title={language === "en" ? "title ar" : "الوصف بالعربي"}
                name={"description_ar"}
              />
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.calories}
                touched={touched.calories}
                errors={errors.calories}
                title={language === "en" ? "calories" : "السعرات الحرارية"}
                name={"calories"}
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
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values.counter}
                touched={touched.counter}
                errors={errors.counter}
                title={language === "en" ? "counter" : "العداد"}
                name={"counter"}
              />

              {/* Steps Count */}
              <InputForm
                handleBlur={handleBlur}
                handleChange={handleStepsCountChange}
                values={stepsCount}
                touched={""}
                errors={""}
                title={language === "en" ? "Number of Steps" : "عدد الخطوات"}
                name={"counter"}
              />
              {/* Render Steps */}
              {stepsData.map((step, index) => (
                <Box
                  key={index}
                  display="flex"
                  flexDirection="column"
                  gridColumn="span 4"
                  className="boxx"
                  p={2}
                  borderRadius="8px"
                  mb={2}
                >
                  <InputForm
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].content = e.target.value;
                      setStepsData(updatedSteps);
                    }}
                    values={step.content}
                    touched={touched.counter}
                    errors={errors.counter}
                    title={
                      language === "en"
                        ? `Step ${index + 1} Content`
                        : `خطوة ${index + 1} تحتوي`
                    }
                    name={"step"}
                  />
                  <InputForm
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      const updatedSteps = [...stepsData];
                      updatedSteps[index].content_ar = e.target.value;
                      setStepsData(updatedSteps);
                    }}
                    values={step.content_ar}
                    touched={""}
                    errors={""}
                    title={
                      language === "en"
                        ? `Step ${index + 1} Content ar`
                        : `خطوة ${index + 1} تحتوي بالعربي`
                    }
                    name={"counter"}
                  />
                  <div className="cu">
                    <CustomeButton
                      accept={"media_steps/*"}
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
              <SelectForm
                selectd={"Gender"}
                values={values.type}
                handleChange={handleChange}
                touched={touched.type}
                errors={errors.type}
                MenuProps={MenuProps}
                data={[
                  { id: 1, title: "male", value: "male" },
                  { id: 1, title: "feminine", value: "feminine" },
                ]}
              />

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
                  ? "Update Exrcise"
                  : "تعديل التمرين"}
                <EditIcon sx={{ ml: "1rem" }} />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ExerciseUpdate;
