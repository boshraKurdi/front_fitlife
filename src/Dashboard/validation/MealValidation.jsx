import * as yup from "yup";
export default function MealValidation(children){

  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    title_ar: yup.string().required("required"),
    description: yup.string().required("required"),
    description_ar: yup.string().required("required"),
    components: yup.string().required("required"),
    components_ar: yup.string().required("required"),
    prepare: yup.string().required("required"),
    prepare_ar: yup.string().required("required"),
    calories: yup.string().required("required"),
});
const initialValues = {
    title: children ? children.meal.title: '',
    title_ar: children ? children.meal.title_ar: '',
    description: children ? children.meal.description: '',
    description_ar: children ? children.meal.description_ar: '',
    components: children ? children.meal.components: '',
    components_ar: children ? children.meal.components_ar: '',
    calories:children ? children.meal.calories: '',
    prepare:children ? children.meal.prepare: '',
    prepare_ar:children ? children.meal.prepare_ar: '',
    category_id:children ? children.meal.category_id: '',
    media: '' ,
};
return {checkoutSchema , initialValues }
}
