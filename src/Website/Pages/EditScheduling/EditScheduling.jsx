import { useEffect, useState } from 'react'
import imgAuth from '../../../img/img-login.svg'
import { useSnackbar } from 'notistack';
import '../../Components/Information/Scheduling/Scheduling.css'
import '../Auth/Auth.css'
import { useDispatch, useSelector } from 'react-redux'
import { ActEditScheduling, ResetMessages } from '../../../Redux/User/UserSlice'
import ButtonLoading from '../../Components/Loading/ButtonLoading/ButtonLoading';
import { useNavigate } from 'react-router-dom';
import { SetAuth } from '../../../Redux/Auth/AuthSlice';
export default function EditScheduling(){
      const { enqueueSnackbar } = useSnackbar();
      const nav = useNavigate()
      const { loading , message , type } = useSelector((state) => state.user)
      const { user } = useSelector((state) => state.auth);
      const { language } = useSelector((state) => state.mode);
      let days = JSON.parse(user.days)
    const [check , setCheck] = useState({
        sunday: days.sunday,
        tuesday: days.tuesday,
        monday: days.monday,
        wednesday: days.wednesday,
        thrusday: days.thrusday,
        friday: days.friday,
        saturday: days.saturday,
      })
      const dispatch = useDispatch();
       useEffect(() => {
          if (message) {
            enqueueSnackbar(`${message}`, { variant: `${type}` });
            dispatch(ResetMessages());
          }
        }, [message, type, dispatch, enqueueSnackbar]);
    return(
         <div className="login">
                <div className="login__content">
                    <div className="login__img">
                        <img src={imgAuth} alt="" />
                    </div>
                    <div className="login__forms">
                    <form
      style={{ bottom: "1.5rem" }}
      className="d login__create login__create_address"
      id="login-up"
    >
      <h1 className="login__title">{language === 'en' ? "Edit Scheduling" : "تعديل جدولي"}</h1>
      <div className="box_flex">
        <div className="box w-100">
          <div style={{ display: "block" }} className="login__box">
            <p style={{color:"var(--fc-button-bg-color)"}} className="d_p">
              {language === 'en' ? "edit the days you want to exercise at least three days":"قم بتعديل الأيام التي تريد ممارسة الرياضة فيها لمدة ثلاثة أيام على الأقل"}🤓💪🏻
            </p>
            <div className="days">
              <div className="day">
                <input
                  id="sunday"
                  type="checkbox"
                  name="days"
                  checked={check.sunday}
                  onChange={(e) => {
                    setCheck({ ...check, sunday:  e.target.checked });
                  }}
                  className="login__input"
                />
                <label htmlFor="sunday">{language === 'en' ? "sunday" :"احد"}</label>
              </div>
              <div className="day">
                <input
                  id="monday"
                  type="checkbox"
                  name="days"
                  checked={check.monday}
                  onChange={(e) => {
                    setCheck({ ...check, monday:  e.target.checked });
                  }}
                  className="login__input"
                />
                <label htmlFor="monday">{language === 'en' ? "monday" :"اثنين"}</label>
              </div>
              <div className="day">
                <input
                  id="tuesday"
                  type="checkbox"
                  checked={check.tuesday}
                  name="days"
                  onChange={(e) => {
                    setCheck({ ...check, tuesday: e.target.checked });
                  }}
                  className="login__input"
                />
                <label htmlFor="tuesday">{language === 'en' ? "tuesday" : "ثلاثاء"}</label>
              </div>
              <div className="day">
                <input
                  id="wednesday"
                  type="checkbox"
                  name="days"
                  checked={check.wednesday}
                  onChange={(e) => {
                    setCheck({ ...check, wednesday:  e.target.checked });
                  }}
                  className="login__input"
                />
                <label htmlFor="wednesday">{language === 'en' ? "wednesday" :"اربعاء"}</label>
              </div>
              <div className="day">
                <input
                  id="thrusday"
                  type="checkbox"
                  name="days"
                  checked={check.thrusday}
                  onChange={(e) => {
                    setCheck({ ...check, thrusday:  e.target.checked });
                  }}
                  className="login__input"
                />
                <label htmlFor="thrusday">{language === 'en' ? "thrusday" :"خميس"}</label>
              </div>
              <div className="day">
                <input
                  id="friday"
                  type="checkbox"
                  name="days"
                  checked={check.friday}
                  onChange={(e) => {
                    setCheck({ ...check, friday:  e.target.checked });
                  }}
                  className="login__input"
                />
                <label htmlFor="friday">{language === 'en' ? "friday" : "جمعة"}</label>
              </div>
              <div className="day">
                <input
                  id="saturday"
                  type="checkbox"
                  checked={check.saturday}
                  onChange={(e) => {
                    setCheck({ ...check, saturday:  e.target.checked });
                  }}
                  name="days"
                  className="login__input"
                />
                <label htmlFor="saturday">{language === 'en' ? "saturday" : "سبت"}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_button">
        <button
        style={{display:'flex' , alignItems:'center' , justifyContent:'center'}}
        disabled={loading === 'pending' ? true : false}
          className="login__button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(ActEditScheduling({days:`{"sunday": ${check.sunday},"tuesday": ${check.tuesday},"monday": ${check.monday},"wednesday": ${check.wednesday},"thrusday": ${check.thrusday},"friday": ${check.friday},"saturday": ${check.saturday}}`})).unwrap().then((data)=>{
                dispatch(SetAuth(data.data));
                nav('/myProfile')

            }).catch(()=>{
                nav('/myProfile')
            })
          }}
        >
          {" "}
        {language === 'en' ? "Save" : "حفظ"} {loading === 'pending' ? <ButtonLoading /> : ''}
        </button>
      </div>
    </form>
                       
                    </div>
                </div>
            </div>
    )
}