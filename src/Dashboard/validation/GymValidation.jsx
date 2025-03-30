import { useState } from "react";
import * as yup from "yup";
export default function GymValidation(){

  const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    description: yup.string().required("required"),
    description_ar: yup.string().required("required"),
    open: yup.number().positive("The number must be positive.").required("required"),
    close: yup.number().positive("The number must be positive.").required("required"),
    price: yup.number().positive("The number must be positive.").required("required"),
    type: yup.string().required("required"),
    address: yup.string().required("required"),
});
const [initialValues, setInitialValues]  = useState({
    name: '',
    description: '',
    description_ar:'',
    open: '',
    close: '',
    price:  '' ,
    address: '' ,
    type:'' ,
    media: null
});
return {checkoutSchema , initialValues , setInitialValues }
}
