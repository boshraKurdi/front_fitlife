import * as yup from "yup";
export default function PlanValidation(children){
//     const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    title_ar: yup.string().required("required"),
    description: yup.string().required("required"),
    description_ar: yup.string().required("required"),
    duration: yup.string().required("required"),
    muscle: yup.string().required("required"),
    muscle_ar: yup.string().required("required"),
});
const initialValues = {
    title: children ? children.plan.title: '',
    title_ar: children ? children.plan.title_ar: '',
    description: children ? children.plan.description: '',
    description_ar: children ? children.plan.description_ar: '',
    duration: children ? children.plan.duration: '',
    muscle: children ? children.plan.muscle: '',
    muscle_ar: children ? children.plan.muscle_ar: '',
    levels: '' ,
    media: ''
};
return {checkoutSchema , initialValues }
}