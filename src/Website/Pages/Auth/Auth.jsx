import "./Auth.css";
import imgAuth from "../../../img/img-login.svg";
import { Login, SignUp } from "../../index";
import { useState } from "react";
export default function Auth() {
  const [box, setBox] = useState(true);
  function ChangeSetting() {
    setBox((prev) => !prev);
  }
  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img src={imgAuth} alt="" />
        </div>
        <div className="login__forms">
          {box ? (
            <Login ChangeSetting={ChangeSetting} />
          ) : (
            <SignUp ChangeSetting={ChangeSetting} />
          )}
        </div>
      </div>
    </div>
  );
}
