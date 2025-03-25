import { useState } from "react";
import * as yup from "yup";
export default function CategoryValidation(){

const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    title_ar: yup.string().required("required"),
});
const [initialValues, setInitialValues] = useState({
    title: '',
    title_ar: '',
});
return {checkoutSchema , initialValues , setInitialValues }
}
