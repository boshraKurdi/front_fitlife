import { useState } from "react";
import * as yup from "yup";
export default function ExerciseValidation(){

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
    type: yup
    .string().required("required"),
});
const [initialValues, setInitialValues]  = useState({
    title: '',
    title_ar: '',
    description: '',
    description_ar:'',
    duration:'',
    calories:'',
    counter:'',
    type:'feminine',
    steps:'',
    media: '' ,
});
return {checkoutSchema , initialValues ,setInitialValues }
}
