import "./Scheduling.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useState } from "react";
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
  const [check, setCheck] = useState({
    sunday: true,
    tuesday: true,
    monday: true,
    wednesday: true,
    thrusday: true,
    friday: true,
    saturday: true,
  });
  console.log(check)
  return (
    <form
      style={{ bottom: "1.5rem" }}
      className="d login__create login__create_address"
      id="login-up"
    >
      <h1 className="login__title">Complete registration</h1>
      <div className="box_flex">
        <div className="box w-100">
          <div style={{ display: "block" }} className="login__box">
            <p className="d_p">
              Choose the days you want to exercise at least three days🤓💪🏻
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
                <label htmlFor="sunday">sunday</label>
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
                <label htmlFor="monday">monday</label>
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
                <label htmlFor="tuesday">tuesday</label>
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
                <label htmlFor="wednesday">wednesday</label>
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
                <label htmlFor="thrusday">thrusday</label>
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
                <label htmlFor="friday">friday</label>
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
                <label htmlFor="saturday">saturday</label>
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
          <KeyboardDoubleArrowLeftIcon /> Next
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            ChangeSetting("si");
          }}
          className="login__button back"
        >
          Back <KeyboardDoubleArrowRightIcon />
        </button>
      </div>
    </form>
  );
}
