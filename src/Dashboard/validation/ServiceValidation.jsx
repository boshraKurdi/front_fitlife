import { useState } from "react";
import * as yup from "yup";
export default function ServiceValidation(){

  const checkoutSchema = yup.object().shape({
    service: yup.string().required("required"),
    price: yup.string().required("required"),
    duration: yup.string().required("required"),
});
const [initialValues, setInitialValues]  = useState({
    service: '',
    price:'',
    duration:  '',
});
return {checkoutSchema , initialValues , setInitialValues }
}
