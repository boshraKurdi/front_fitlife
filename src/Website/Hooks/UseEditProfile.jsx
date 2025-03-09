import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditProfileScema from "../Validation/EditProfileScema";
import { ActEditProfile } from "../../Redux/User/UserSlice";
import { SetAuth } from "../../Redux/Auth/AuthSlice";
const UseEditProfile = () => {
  const nav = useNavigate();
     // call dispatch
  const dispatch = useDispatch();
  const { error , loading  } = useSelector((state) => state.user)
  // call react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm({
    mode: "onBlur",
    resolver: zodResolver(EditProfileScema),
});
// submit form login
const onSubmit = async (data) => {
  const promise = dispatch(ActEditProfile(data)).unwrap().then((data)=>{
    dispatch(SetAuth(data.data))
    nav('/myProfile' , {replace: true})
   
    }).catch(()=>{
      
    })
    return () => {
    promise.abort();
  }
}
  return { register , handleSubmit , onSubmit , errors , error , loading  }

}
export default UseEditProfile