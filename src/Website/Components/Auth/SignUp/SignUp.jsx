import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GoogleIcon from "@mui/icons-material/Google";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import UseSignUp from "../../../Hooks/UseSignUp";
import ButtonLoading from "../../Loading/ButtonLoading/ButtonLoading";

export default function SignUp({ ChangeSetting }) {
  const { EmailOnBlurHandeler , onSubmit , errors , handleSubmit , register , status , loading , error } = UseSignUp()
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login__create" id="login-up">
      <h1 className="login__title">Create Account</h1>
      <div className="box_flex">
        <div className="box w-100">
          <div className={errors.name ? 'inputError login__box' : 'login__box'}>
            <AccountCircleIcon style={{color: errors.name && '#e35858'}} className="bx bx-user login__icon" />
            <input
              type="text"
              name="name"
              placeholder="Username"
              {...register("name")}
              className="login__input"
            />
          </div>
          <p className="error">{errors.name?.message}</p>
        </div>
        <div className="box w-100">
          <div style={{position: 'relative'}} className={(errors.email || status === 'notAv' || status === 'failed') ? 'inputError login__box' : 'login__box'}>
            <AlternateEmailIcon style={{color: (errors.email || status === 'notAv' || status === 'failed') && '#e35858'}} className="bx bx-at login__icon" />
            <input
              type="text"
              name="email"
              disabled={status === 'checking' ? true : false}
              {...register("email")}
              placeholder="Email"
              className="login__input"
              onBlur={EmailOnBlurHandeler}
            />
            {status === 'checking' && <div className="loader_check_email"></div>}
            {status === 'av' && <CheckIcon className="true_check_email" />}
            {status === 'notAv' && <CloseIcon className="close_check_email" />}
          </div>
          <p className="error">{errors.email ? errors.email.message : (status === 'notAv' ? 'the email has already exit' : (status === 'failed' && 'error netWork Please Try Agen!'))}</p>
        </div>
        <div className="box">
          <div className={errors.password ? 'inputError login__box' : 'login__box'}>
            <LockIcon style={{color: errors.password && '#e35858'}} className="bx bx-lock-alt login__icon" />
            <input
              type="password"
              name="password"
              {...register("password")}
              placeholder="Password"
              className="login__input"
            />
          </div>
          <p className="error">{errors.password?.message}</p>
        </div>
        <div className="box">
          <div className={errors.confirm ? 'inputError login__box' : 'login__box'}>
            <LockIcon style={{color: errors.confirm && '#e35858'}} className="bx bx-lock-alt login__icon" />
            <input
              type="password"
              name="confirm"
              {...register("confirm")}
              placeholder="confirm Password"
              className="login__input"
            />
          </div>
          <p className="error">{errors.confirm?.message}</p>
        </div>
      </div>
      <button className="login__button" disabled={(loading === 'pending' || status === 'checking') ? true : false}>{loading === 'pending' ? <ButtonLoading /> : 'Sign Up'}</button>
      <div className="social-message">
        <div className="line"></div>
        <p className="message">Login with social accounts</p>
        <div className="line"></div>
      </div>
      <div className="social-icons">
        <a
          href="http://127.0.0.1:8000/api/auth/google"
          aria-label="Log in with Google"
          className="icon"
        >
          <GoogleIcon />
        </a>
      </div>
      <div>
        <span className="login__account">Already have an Account ?</span>
        <span onClick={ChangeSetting} className="login__signup" id="sign-in">
          Sign In
        </span>
      </div>
    </form>
  );
}
