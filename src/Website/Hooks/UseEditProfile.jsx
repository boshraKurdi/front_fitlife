import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';
import EditProfileScema from "../Validation/EditProfileScema";
import { ActEditProfile } from "../../Redux/User/UserSlice";
import { SetAuth } from "../../Redux/Auth/AuthSlice";
const UseEditProfile = () => {
  const nav = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
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
    dispatch(SetAuth(data))
  const promise = dispatch(ActEditProfile(data)).unwrap().then(()=>{
    nav('/myProfile' , {replace: true})
    enqueueSnackbar(`Edit Profile successfully!`, { variant: "success" });
    }).catch(()=>{
      enqueueSnackbar(`Edit Profile Faild!`, { variant: "error" });
    })
    return () => {
    promise.abort();
  }
}
  return { register , handleSubmit , onSubmit , errors , error , loading  }

}
export default UseEditProfile