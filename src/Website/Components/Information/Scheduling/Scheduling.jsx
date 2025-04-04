import "./Scheduling.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
export default function Scheduling({
  setBox,
  state,
  setState,
  form,
  setForm,
}) {
  function ChangeSetting(name) {
    setBox(name);
  }
   const { enqueueSnackbar } = useSnackbar();
  const [check, setCheck] = useState({
    sunday: true,
    tuesday: true,
    monday: true,
    wednesday: true,
    thrusday: true,
    friday: true,
    saturday: true,
  });
  const handleChange = (day) => {
    const falseCount = Object.values(check).filter((value) => value === false).length;
    if (!check[day]) {
      setCheck((prev) => ({ ...prev, [day]: !prev[day] }));
      return;
    }
    if (falseCount < 3) {
      setCheck((prev) => ({ ...prev, [day]: !prev[day] }));
    } else {
      enqueueSnackbar("لا يمكنك تحديد أكثر من ثلاثة أيام", { variant: `error` });
    }
  };
  const { language } = useSelector((state) => state.mode)
  return (
    <form
      style={{ bottom: "1.5rem" }}
      className="d login__create login__create_address"
      id="login-up"
    >
      <h1 className="login__title">{language === 'ar' ? 'اكمال عملية الاشتراك' : "Complete registration"}</h1>
      <div className="box_flex">
        <div className="box w-100">
          <div style={{ display: "block" }} className="login__box">
            <p className="d_p">
              {language === 'ar' ? "اختر الأيام التي تريد ممارسة الرياضة فيها على الأقل ثلاثة أيام🤓💪🏻": "Choose the days you want to exercise at least three days🤓💪🏻"}
            </p>
            <div className="days">
              <div className="day">
                <input
                  id="sunday"
                  type="checkbox"
                  name="days"
                  checked={check.sunday}
                  onChange={() => {
                    handleChange("sunday")
                  }}
                  className="login__input"
                />
                <label htmlFor="sunday">{language === 'ar' ? 'الاحد':'sunday'}</label>
              </div>
              <div className="day">
                <input
                  id="monday"
                  type="checkbox"
                  name="days"
                  checked={check.monday}
                  onChange={() => {
                    handleChange("monday")
                  }}
                  className="login__input"
                />
                <label htmlFor="monday">{language === 'ar' ? "الاثنين" : "monday"}</label>
              </div>
              <div className="day">
                <input
                  id="tuesday"
                  type="checkbox"
                  checked={check.tuesday}
                  name="days"
                  onChange={() => {
                    handleChange("tuesday")
                  }}
                  className="login__input"
                />
                <label htmlFor="tuesday">{language === 'ar' ? 'الثلاثاء' :'tuesday'}</label>
              </div>
              <div className="day">
                <input
                  id="wednesday"
                  type="checkbox"
                  name="days"
                  checked={check.wednesday}
                  onChange={() => {
                    handleChange("wednesday")
                  }}
                  className="login__input"
                />
                <label htmlFor="wednesday">{language === 'ar' ? "الاربعاء" : "wednesday"}</label>
              </div>
              <div className="day">
                <input
                  id="thrusday"
                  type="checkbox"
                  name="days"
                  checked={check.thrusday}
                  onChange={() => {
                    handleChange("thrusday")
                  }}
                  className="login__input"
                />
                <label htmlFor="thrusday">{language === 'ar' ? "الخميس" : "thrusday"}</label>
              </div>
              <div className="day">
                <input
                  id="friday"
                  type="checkbox"
                  name="days"
                  checked={check.friday}
                  onChange={() => {
                    handleChange("friday")
                  }}
                  className="login__input"
                />
                <label htmlFor="friday">{language === 'ar' ? "الجمعة": "friday"}</label>
              </div>
              <div className="day">
                <input
                  id="saturday"
                  type="checkbox"
                  checked={check.saturday}
                  onChange={() => {
                    handleChange("saturday")
                  }}
                  name="days"
                  className="login__input"
                />
                <label htmlFor="saturday">{language === 'ar' ? 'السبت': 'saturday'}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_button">
        <button
          className="login__button"
          onClick={(e) => {
            e.preventDefault();
            ChangeSetting("a");
            setForm({...form , days: check});
          }}
        >
          {" "}
          <KeyboardDoubleArrowLeftIcon /> {language === 'ar' ?  'التالي': 'Next'}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            ChangeSetting("si");
          }}
          className="login__button back"
        >
          {language === 'ar' ? 'العودة' : 'Back'} <KeyboardDoubleArrowRightIcon />
        </button>
      </div>
    </form>
  );
}
