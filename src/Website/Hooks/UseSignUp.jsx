import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpScema , UseCheckEmail } from '../index'
import { ActAuthSignUp } from "../../Redux/Auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const UseSignUp = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    // call custem hooks
    const { status , enterEmail , checkEmail , ResetValue } = UseCheckEmail();
    const { error , loading , token } = useSelector((state) => state.auth);
    // call SignUpScema
    const {
      register,
      getFieldState ,
      trigger, 
      handleSubmit,
      formState: { errors },
  } = useForm({
      mode: "onBlur",
      resolver: zodResolver(SignUpScema),
  });
  // submit form sign up
  const onSubmit = async (data) => {
    const promise = dispatch(ActAuthSignUp(data)).unwrap().then(()=>{
     nav("/information" , {replace: true});
    }).catch(()=>{})
    return () => {
      promise.abort();
    }
  }
    // check if email exit
    async function EmailOnBlurHandeler (e){
      await trigger('email')
      const value = e.target.value;
      const { isDirty , invalid } = getFieldState('email')
      if (isDirty && !invalid && enterEmail !== value) {
        checkEmail(value)
      }
      if (enterEmail && isDirty && invalid) {
        ResetValue();
      }
    }
    return { EmailOnBlurHandeler , onSubmit , errors , handleSubmit , register , status , error , loading , token }
}
export default UseSignUp