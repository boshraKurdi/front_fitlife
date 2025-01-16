import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { PaymentScema } from '../index'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SetOpen } from "../../Redux/Mode/ModeSlice";
import { ActPayment } from "../../Redux/Service/ServiceSlice";
const UsePayment = () => {
  const nav = useNavigate();
     // call dispatch
  const dispatch = useDispatch();
  const { error , loading } = useSelector((state) => state.service)
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
  const promise = dispatch(ActPayment(data)).unwrap().then(()=>{
    nav('/services')
    dispatch(SetOpen({message:'payment successfully!' , type:'success'}));
    }).catch(()=>{})
    return () => {
    promise.abort();
  }
}
  return { register , handleSubmit , onSubmit , errors , error , loading }

}
export default UsePayment