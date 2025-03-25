import { useState } from "react";
import * as yup from "yup";
export default function GoalValidation(){

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
    // media: yup.mixed()
    // .required("required upload file!")
    // .test(
    //   "fileFormat",
    //   "please select file (jpg, jpeg, png)",
    //   (value) => value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
    // )
});
const  [initialValues, setInitialValues] = useState({
    title: '',
    title_ar:'',
    description: '',
    description_ar: '',
    duration:'',
    calories_min:'',
    calories_max:'',
    Plan: '',
    media: '' ,
});
return {checkoutSchema , initialValues , setInitialValues }
}
