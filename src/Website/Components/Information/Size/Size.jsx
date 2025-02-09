import WidthNormalIcon from "@mui/icons-material/WidthNormal";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import HeightIcon from "@mui/icons-material/Height";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import UseSize from "../../../Hooks/UseSize";
import { useSelector } from "react-redux";
export default function Size({ setBox, state, setState, form, setForm }) {
  const { language } = useSelector((state) => state.mode)
  const {ChangeSetting , HandelInput , regex } = UseSize({ setBox, state, setState, form, setForm })
  return (
    <form className="login__create login__create_size" id="login-up">
      <h1 className="login__title">{language === 'ar' ? 'اكمال عملية الاشتراك' : "Complete registration"}</h1>
      <div className="box_flex">
        <div className="box">
          <div className={form.widthError !== "" && (form.width === "" || !regex.test(form.width)) ? "inputError login__box" : 'login__box'}>
            <WidthNormalIcon style={{color :form.widthError !== "" && (form.width === "" || !regex.test(form.width)) && '#e35858'}} className="bx bx-at login__icon" />
            <input
              type="number"
              name="width"
              value={form.width}
              onChange={(e) => {
                HandelInput(e);
              }}
              placeholder={language ==='ar' ? 'الوزن': "Width"}
              className="login__input"
            />
          </div>
          <p
            style={{
              opacity:
                form.widthError !== "" &&
                (form.width === "" || !regex.test(form.width))
                  ? 1
                  : 0,
            }}
            className="error"
          >
            {form.widthError}
          </p>
        </div>
        <div className="box">
          <div className={form.heightError !== "" && (form.height === "" || !regex.test(form.height)) ? "inputError login__box" : 'login__box'}>
            <HeightIcon style={{color: form.heightError !== "" && (form.height === "" || !regex.test(form.height)) && '#e35858'}} className="bx bx-at login__icon" />
            <input
              type="number"
              name="height"
              value={form.height}
              onChange={(e) => {
                HandelInput(e);
              }}
              placeholder={language ==='ar' ? 'الطول': "Height"}
              className="login__input"
            />
          </div>
          <p
            style={{
              opacity:
                form.heightError !== "" &&
                (form.height === "" || !regex.test(form.height))
                  ? 1
                  : 0,
            }}
            className="error"
          >
            {form.heightError}
          </p>
        </div>
        <div className="box">
          <div className={form.ageError !== "" && (form.age === "" || !regex.test(form.age)) ? "inputError login__box" : 'login__box'}>
            <ManageAccountsIcon style={{color: form.ageError !== "" && (form.age === "" || !regex.test(form.age)) && '#e35858'}} className="bx bx-at login__icon" />
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={(e) => {
                HandelInput(e);
              }}
              placeholder={language ==='ar' ? "العمر" :"Age"}
              className="login__input"
            />
          </div>
          <p
            style={{
              opacity:
                form.ageError !== "" &&
                (form.age === "" || !regex.test(form.age))
                  ? 1
                  : 0,
            }}
            className="error"
          >
            {form.ageError}
          </p>
        </div>
        <div className="box">
          <div className={form.illnessError !== "" && (form.illness === "" || !regex.test(form.illness)) ? "inputError login__box" : 'login__box'}>
            <AccessibleForwardIcon style={{color: form.illnessError !== "" && (form.illness === "" || !regex.test(form.illness)) && '#e35858'}} className="bx bx-at login__icon" />
            <input
              type="text"
              name="illness"
              value={form.illness}
              onChange={(e) => {
                HandelInput(e);
              }}
              placeholder={language ==='ar' ? "المرض": "Illness"}
              className="login__input"
            />
          </div>
          <p
            style={{
              opacity:
                form.illnessError !== "" ? 1
                  : 0,
            }}
            className="error"
          >
            {form.ageError}
          </p>
        </div>


        <div className="mydict">
          <div>
            <label>
              <input type="radio" name="gender" onChange={(e) => {
                HandelInput(e);
              }} value={'feminine'} />
              <span>{language ==='ar' ? "انثى" : "feminine"}</span>
            </label>
            <label>
              <input type="radio" name="gender" onChange={(e) => {
                HandelInput(e);
              }} value={'male'} />
              <span>{language ==='ar' ? "ذكر" :"male"}</span>
            </label>
          </div>
        </div>
      </div>
      <button onClick={(e)=>{
          e.preventDefault();
        ChangeSetting('s')}} className="login__button next">
      <KeyboardDoubleArrowLeftIcon />  {language ==='ar' ? "التالي" :"Next"}
      </button>
    </form>
  );
}
