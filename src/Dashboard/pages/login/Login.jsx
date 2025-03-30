import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import imgAuth from "../../../img/img-login.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginScema } from '../../../Website/index'
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';
import ButtonLoading from "../../../Website/Components/Loading/ButtonLoading/ButtonLoading";
import { ActAuthLoginPanel, SetPanel } from "../../../Redux/Auth/AuthSlice";
export default function Login() {
  const { language } = useSelector((state) => state.mode)
   const nav = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
       // call dispatch
    const dispatch = useDispatch();
    const { loading  } = useSelector((state) => state.auth)
    // call react hook form
    const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm({
      mode: "onBlur",
      resolver: zodResolver(LoginScema),
  })
  // submit form login
  const onSubmit = async (data) => {
    
    const promise = dispatch(ActAuthLoginPanel(data)).unwrap().then((data)=>{
      nav('/dashboard' , {replace: true})
      enqueueSnackbar(`Login successfull!`, { variant: "success" });
      dispatch(SetPanel(data.user))
      }).catch((error)=>{
        enqueueSnackbar(`${error}`, { variant: "error" });
      })
      return () => {
      promise.abort();
    }
  }
  return (
    <div style={{marginTop: "0rem"}} className="login">
    <div className="login__content">
      <div className="login__img">
        <img src={imgAuth} alt="" />
      </div>
      <div className="login__forms">
    <form onSubmit={handleSubmit(onSubmit)} style={{bottom: "3rem" ,right:language ==="ar" && "-11rem" , left:language ==="ar" && "0"}} className="login__registre" id="login-in">
      <h1 className="login__title">{language === 'ar' ? 'تسجيل الدخول لوحة التحكم' : 'Sign In Dashboard'}</h1>

      <div className={errors.email ? 'inputError login__box w-100' : 'login__box w-100'}>
        <AlternateEmailIcon style={{color: errors.email && '#e35858'}} className="bx bx-at login__icon" />
        <input
          type="text"
          name="email"
          {...register("email")}
          placeholder={language === 'ar' ? 'البريد الالكتروني' : "Email"}
          className="login__input"
        />
      </div>
      <p className="error">{errors.email?.message}</p>
      <div className={errors.password ? 'inputError login__box w-100' : 'login__box w-100'}>
        <LockIcon style={{color: errors.password && '#e35858'}} className="bx bx-lock-alt login__icon" />
        <input
          type="password"
          name="password"
          {...register("password")}
          placeholder={language === 'ar' ? 'كلمة السر' :"Password"}
          className="login__input"
        />
      </div>
      <p className="error">{errors.password?.message}</p>
      <span className="login__forgot">{language === 'ar' ? "هل نسيت كلمة السر؟" :"Forgot password?"}</span>
      <button className="login__button" disabled={(loading === 'pending') ? true : false}>{loading === 'pending' ? <ButtonLoading /> : (language ==="ar" ? "تسجيل الدخول" :'Sign In')}</button>
      <div className="social-message">
        <div className="line"></div>
        <p className="message">{language === 'ar' ? "تسجيل الدخول باستخدام حسابات التواصل الاجتماعي" : "Login with social accounts"}</p>
        <div className="line"></div>
      </div>
      <div className="social-icons">
        <a href="http://127.0.0.1:8000/api/auth/google" aria-label="Log in with Google" className="icon">
          <GoogleIcon />
        </a>
      </div>
    </form>
    </div>
      </div>
    </div>
  );
}
