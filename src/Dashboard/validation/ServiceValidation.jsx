import * as yup from "yup";
export default function ServiceValidation(children){

  const checkoutSchema = yup.object().shape({
    service: yup.string().required("required"),
    price: yup.string().required("required"),
    duration: yup.string().required("required"),
});
const initialValues = {
    service: children ? children.service?.service: '',
    price: children ? children.service?.price: '',
    duration: children ? children.service?.duration: '',
};
return {checkoutSchema , initialValues }
}
