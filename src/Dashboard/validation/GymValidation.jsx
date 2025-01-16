import * as yup from "yup";
export default function GymValidation(children){

  const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    description: yup.string().required("required"),
    description_ar: yup.string().required("required"),
    open: yup.string().required("required"),
    close: yup.string().required("required"),
    price: yup.string().required("required"),
    type: yup.string().required("required"),
});
const initialValues = {
    name: children ? children.gym.name: '',
    description: children ? children.gym.description: '',
    description_ar: children ? children.gym.description_ar: '',
    open: children ? children.gym.open: '',
    close: children ? children.gym.close: '',
    price: children ? children.gym.price: '' ,
    address: children ? children.gym.address: '' ,
    type: children ? children.gym.type: '' ,
    media: null
};
return {checkoutSchema , initialValues }
}
