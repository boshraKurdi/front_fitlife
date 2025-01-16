import * as yup from "yup";
export default function ExerciseValidation(children){

  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    title_ar: yup.string().required("required"),
    description: yup.string().required("required"),
    description_ar: yup.string().required("required"),
    duration: yup.string().required("required"),
    calories: yup
    .string().required("required"),
    counter: yup
    .string().required("required"),
});
const initialValues = {
    title: children ? children.exercise.title: '',
    title_ar: children ? children.exercise.title_ar: '',
    description: children ? children.exercise.description: '',
    description_ar: children ? children.exercise.description_ar: '',
    duration: children ? children.exercise.duration: '',
    calories:children ? children.exercise.calories: '',
    counter:children ? children.exercise.counter: '',
    steps:'',
    media: '' ,
};
return {checkoutSchema , initialValues }
}
