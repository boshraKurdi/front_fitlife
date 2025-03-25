import { useState } from "react";
import * as yup from "yup";
export default function PlanValidation(){
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
    // type: yup.string().required("required"),
    // type_ar: yup.string().required("required"),
});
const [initialValues, setInitialValues] = useState({
    title: '',
    title_ar: '',
    description: '',
    description_ar: '',
    duration:  '',
    muscle: '',
    muscle_ar:'',
    type: '',
    water: 0,
    sleep:  0,
    type_ar: '',
    media: ''
});
return {checkoutSchema , initialValues , setInitialValues }
}