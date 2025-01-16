import "./Payment.css";
import imgAuth from "../../../img/img-login.svg";
import PersonIcon from "@mui/icons-material/Person";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import UsePayment from "../../Hooks/UsePayment";
import CancelIcon from "@mui/icons-material/Cancel";
import ButtonLoading from "../../Components/Loading/ButtonLoading/ButtonLoading";
export default function Payment() {
  const { register, handleSubmit, onSubmit, errors, error, loading } =
    UsePayment();
  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img src={imgAuth} alt="" />
        </div>
        <div className="login__forms">
          <div className="wrapper login__create">
            <h2> Payment Form </h2>
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
                    <span> Credit Card</span>
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
                    <span> Paypal</span>
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
                    type="number"
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
                    name="year"
                    {...register("year")}
                    placeholder="Exp year"
                  />
                  <CalendarTodayIcon className="icon" />
                  <p className="error">{errors.year?.message}</p>
                </div>
              </div>
              <div className="input_group">
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
                {error && (
                  <span className="errorMessage">
                    <CancelIcon
                      style={{ marginRight: "15px", color: "#ff4900" }}
                    />{" "}
                    {error}
                  </span>
                )}
                <div className="input_box">
                  <button
                    disabled={loading === "pending" ? true : false}
                    type="submit"
                  >
                    {loading === "pending" ? <ButtonLoading /> : "Pay Now"}
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
