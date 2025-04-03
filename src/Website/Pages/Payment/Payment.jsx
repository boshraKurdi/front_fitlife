import "./Payment.css";
import imgAuth from "../../../img/img-login.svg";
import PersonIcon from "@mui/icons-material/Person";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import UsePayment from "../../Hooks/UsePayment";
import ButtonLoading from "../../Components/Loading/ButtonLoading/ButtonLoading";
import { useSelector } from "react-redux";
export default function Payment() {
  const { language } = useSelector((state) => state.mode)
  const { register, handleSubmit, onSubmit, errors, error, loading , message , type } =
    UsePayment();
  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img src={imgAuth} alt="" />
        </div>
        <div className="login__forms">
          <div style={{bottom:'-0.5%'}} className="wrapper login__create">
            <h2> {language === "en" ? "Payment Form" : "الدفع" }</h2>
            <form onSubmit={handleSubmit(onSubmit)} method="post">
              <div className="input_group">
                <div className="input_box">
                  <input
                    type="radio"
                    name="type"
                    value='Credit Card'
                    {...register("type")}
                    className="radio"
                    id="bc1"
                  />
                  <label htmlFor="bc1">
                    {" "}
                    <span> {language === "en" ? "Credit Card" :"بطاقة ائتمان"}</span>
                  </label>

                  <input
                    type="radio"
                    name="type"
                    value='Paypal'
                    {...register("type")}
                    className="radio"
                    id="bc2"
                  />
                  <label htmlFor="bc2">
                    {" "}
                    <span> {language === "en" ? "Paypal" : "بايبال"}</span>
                  </label>
                </div>
              </div>
              <div className="input_group">
                <div className="input_box">
                  <input
                    type="tel"
                    className="name"
                    name="number"
                    {...register("number")}
                    placeholder="card Namber 1111 2222 3333 4444"
                  />
                  <CreditCardIcon className="icon" />
                  <p className="error">{errors.number?.message}</p>
                </div>
                <div className="input_box">
                  <input
                    type="tel"
                    className="name"
                    name="cvc"
                    {...register("cvc")}
                    placeholder="card cvc 632"
                  />
                  <PersonIcon className="icon" />
                  <p className="error">{errors.cvc?.message}</p>
                </div>
              </div>
              <div className="input_group">
                <div className="input_box">
                  <input
                    type="month"
                    className="name"
                    name="month"
                    {...register("month")}
                    placeholder="Exp Month"
                  />
                  <CalendarMonthIcon className="icon" />
                  <p className="error">{errors.month?.message}</p>
                </div>
                <div className="input_box">
                  <input
                    type="number"
                    className="name"
                    name="price"
                    {...register("price")}
                    placeholder="Enter Amount"
                  />
                  <AttachMoneyIcon className="icon" />
                  <p className="error">{errors.price?.message}</p>
                </div>
              </div>
              <div className="input_group">
                <div className="input_box">
                  <button
                    disabled={loading === "pending" ? true : false}
                    type="submit"
                  >
                    {loading === "pending" ? <ButtonLoading /> : language == "en" ? "Pay Now" :"ادفع الان"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
