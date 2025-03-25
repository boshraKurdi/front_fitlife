import * as yup from "yup";
export default function MealValidation(children){

  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    title_ar: yup.string().required("required"),
    description: yup.string().required("required"),
    description_ar: yup.string().required("required"),
    prepare: yup.string().required("required"),
    prepare_ar: yup.string().required("required"),
    calories: yup.string().required("required"),
    carbohydrates: yup.string().required("required"),
    fats: yup.string().required("required"),
    proteins: yup.string().required("required"),
});
const initialValues = {
    title: children ? children.meal.title: '',
    title_ar: children ? children.meal.title_ar: '',
    description: children ? children.meal.description: '',
    description_ar: children ? children.meal.description_ar: '',
    calories:children ? children.meal.calories: '',
    fats:children ? children.meal.fats: '',
    carbohydrates:children ? children.meal.carbohydrates: '',
    proteins:children ? children.meal.proteins: '',
    prepare:children ? children.meal.prepare: '',
    prepare_ar:children ? children.meal.prepare_ar: '',
    category_id:children ? children.meal.category_id: '',
    ingredients: '',
    media: '' ,
};
return {checkoutSchema , initialValues }
}
