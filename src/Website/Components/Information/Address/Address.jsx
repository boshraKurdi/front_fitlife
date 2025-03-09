import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CancelIcon from "@mui/icons-material/Cancel";
import ButtonLoading from "../../Loading/ButtonLoading/ButtonLoading";
import UseInformation from "../../../Hooks/UseInformation";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";

export default function Address({ setBox, state, setState, form, setForm }) {
  const { language } = useSelector((state) => state.mode)
  const { getLatALon , stats , setStats , error , loading , ChangeSetting , HandelInput , HandelSignUp} = UseInformation({ setBox, state, setState, form, setForm });
  return (
    <form onSubmit={HandelSignUp} className="login__create login__create_address" id="login-up">
      <h1 className="login__title">{language === 'ar' ? 'اكمال عملية الاشتراك' : "Complete registration"}</h1>
      <div className="box_flex">
        <div className="box w-100">
          <div className={(form.addressError !== "" && form.address === "") ? "inputError login__box" : 'login__box'}>
            <LocationOnIcon style={{color: (form.addressError !== "" && form.address === "") && '#e35858'}} className="bx bx-at login__icon" />
            <input
              type="text"
              value={form.address}
              onChange={(e) => {
                HandelInput(e);
              }}
              // onBlur={()=>{getLatALon(form.address)}}
              name="address"
              placeholder={language === 'ar' ? 'العنوان' : "Address"}
              className="login__input"
            />
          </div>
          {stats.loading === 'idle' && <div onClick={()=>{getLatALon(form.address)}}><SearchIcon style={{color:'#000' , cursor:'pointer' ,  left:language === 'ar' && "11px" , right:language === 'ar' &&"90%"}} className="true_check_email" /></div>}
          {stats.loading === 'pending' && <div style={{left: language === 'ar' && "11px" , right:language === 'ar' &&"90%"}} className="loader_check_email"></div>}
          {stats.loading === 'succeeded' && <CheckIcon style={{left: language === 'ar' && "11px" , right:language === 'ar' &&"90%"}} className="true_check_email" />}
          {stats.loading === 'failed' && <div onClick={()=>{setStats({...stats , loading:'idle' , error: ''})}}><CloseIcon style={{cursor:'pointer' ,  left:language === 'ar' && "11px" , right:language === 'ar' &&"90%"}} className="close_check_email" /></div>}
          <p
            style={{
              opacity: form.addressError !== "" && form.address === "" ? 1 : 0,
            }}
            className="error"
          >
            {form.addressError}
          </p>
        </div>
      </div>
      {error && (
        <span className="errorMessage">
          <CancelIcon style={{ marginRight: "15px", color: "#ff4900" }} />{" "}
          {error}
        </span>
      )}
      <div className="container_button">
        <button className="login__button" disabled={(loading === 'pending' || stats.loading !== 'succeeded') ? true : false}>{loading === 'pending' ? <ButtonLoading /> : (language === 'ar' ? 'تم' : 'OK')}</button>
        <button onClick={()=>{ChangeSetting('a')}} className="login__button back">
        {language === 'ar' ? "العودة" : "Back"} <KeyboardDoubleArrowRightIcon />
        </button>
      </div>
    </form>
  );
}
