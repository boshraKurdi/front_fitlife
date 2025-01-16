import * as yup from "yup";
export default function GoalValidation(children){

  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    title_ar: yup.string().required("required"),
    description: yup.string().required("required"),
    description_ar: yup.string().required("required"),
    duration: yup.string().required("required"),
    calories_min: yup
    .string().required("required"),
    calories_max: yup
    .string().required("required"),
    media: yup.mixed()
    .required("required upload file!")
    .test(
      "fileFormat",
      "please select file (jpg, jpeg, png)",
      (value) => value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
    )
});
const initialValues = {
    title: children ? children.goal.title: '',
    title_ar: children ? children.goal.title_ar: '',
    description: children ? children.goal.description: '',
    description_ar: children ? children.goal.description_ar: '',
    duration: children ? children.goal.duration: '',
    calories_min:children ? children.goal.calories_min: '',
    calories_max:children ? children.goal.calories_max: '',
    PlanLevel: '',
    media: '' ,
};
return {checkoutSchema , initialValues }
}
