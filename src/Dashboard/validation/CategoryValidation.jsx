import * as yup from "yup";
export default function CategoryValidation(children){

const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    title_ar: yup.string().required("required"),
});
const initialValues = {
    title: children ? children.category.title: '',
    title_ar: children ? children.category.title_ar: '',
};
return {checkoutSchema , initialValues }
}
