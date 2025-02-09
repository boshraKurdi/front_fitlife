import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GoogleIcon from "@mui/icons-material/Google";
import UseLogin from "../../../Hooks/UseLogin";
import ButtonLoading from "../../Loading/ButtonLoading/ButtonLoading";
import { useSelector } from "react-redux";
export default function Login({ ChangeSetting }) {
  const { register , handleSubmit , onSubmit , errors  , loading } = UseLogin();
  const { language } = useSelector((state) => state.mode)
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{right:language ==="ar" && "-11rem" , left:language ==="ar" && "0"}} className="login__registre" id="login-in">
      <h1 className="login__title">{language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}</h1>

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
      <button className="login__button" disabled={(loading === 'pending') ? true : false}>{loading === 'pending' ? <ButtonLoading /> : 'Sign In'}</button>
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
      <div>
        <span className="login__account">{language === 'ar' ? "هل لا تملك حساب؟":"Dont have an Account ?"}</span>
        <span onClick={ChangeSetting} className="login__signin" id="sign-up">
          {language === 'ar' ? "اشترك الان" : "Sign Up"}
        </span>
      </div>
    </form>
  );
}
