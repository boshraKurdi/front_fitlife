import { useState } from "react";
import * as yup from "yup";
export default function MealValidation(){

  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    title_ar: yup.string().required("required"),
    description: yup.string().required("required"),
    description_ar: yup.string().required("required"),
    prepare: yup.string().required("required"),
    prepare_ar: yup.string().required("required"),
    calories: yup.number().positive("The number must be positive.").required("required"),
    carbohydrates: yup.number().positive("The number must be positive.").required("required"),
    fats: yup.number().positive("The number must be positive.").required("required"),
    proteins: yup.number().positive("The number must be positive.").required("required"),
});
const [initialValues, setInitialValues]  = useState({
    title:'',
    title_ar:'',
    description: '',
    description_ar:  '',
    calories:'',
    fats: '',
    carbohydrates:'',
    proteins:'',
    prepare:'',
    prepare_ar:'',
    category_id:'',
    ingredients: '',
    media: '' ,
});
return {checkoutSchema , initialValues , setInitialValues }
}
