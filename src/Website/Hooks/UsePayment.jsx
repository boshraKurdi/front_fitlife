import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentScema } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { ActPayment } from "../../Redux/Service/ServiceSlice";
const UsePayment = () => {
  const nav = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  // call dispatch
  const dispatch = useDispatch();
  const { error, loading, message, type } = useSelector(
    (state) => state.service
  );
  // call react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(PaymentScema),
  });
  // submit form login
  const onSubmit = async (data) => {
    const promise = dispatch(ActPayment(data))
      .unwrap()
      .then(() => {
        nav("/services");
        enqueueSnackbar(`${message}`, { variant: `${type}` });
      })
      .catch(() => {
        enqueueSnackbar(`${message}`, { variant: `${type}` });
      });
    return () => {
      promise.abort();
    };
  };
  return { register, handleSubmit, onSubmit, errors, error, loading };
};
export default UsePayment;
