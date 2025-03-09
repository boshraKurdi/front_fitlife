import "./Input.css";
import Img2 from "../../../../img/sleep_schedule.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ActStoreSleep,
  ResetMessages,
} from "../../../../Redux/Target/TargetSlice";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useSnackbar } from "notistack";
import ButtonLoading from "../../Loading/ButtonLoading/ButtonLoading";
export default function Input({ data }) {
  const [sleep, setSleep] = useState(data.targets && data.targets[0]?.sleep);
  const { loading, message, type } = useSelector((state) => state.target);
  const { language } = useSelector((state) => state.mode);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  useEffect(() => {
    if (message) {
      enqueueSnackbar(`${message}`, { variant: `${type}` });
      dispatch(ResetMessages());
    }
  }, [message, type, dispatch, enqueueSnackbar]);
  return (
    <section className="sleep_about section container" id="about">
      <div className="about__container grid">

        <div className="about__data">
          <h2 className="section__title about__title">
            {language === "ar"
              ? `مدة النوم و حقل الإدخال`
              : `Sleep duration & input field`}
          </h2>

          <p className="about__description">
            {language === "ar"
              ? "تهدف هذه الخطة إلى تتبع نشاط نومك للاستمتاع بحياة صحية."
              : "This plan aims to track your sleep activity to enjoy a healthy life."}{" "}
            <DarkModeIcon />
          </p>
          <div className="about__details">
            <label>
              {language === "ar"
                ? "كمية النوم التي يجب أن تحصل عليها"
                : "The amount of sleep you should have"}
              😴
            </label>
            <input
              type="text"
              style={{ pointerEvents: "none" }}
              className="sleep_input"
              placeholder={language === 'en' ? "enter your hours sleep" : 'ادخل ساعات نوك'}
              value={data.sleep + " h"}
            />
          </div>
          <form>
            <div className="about__details">
              <label>
                {language === "ar"
                  ? "كمية النوم التي حصلت عليها"
                  : "The amount of sleep that you had"}{" "}
                💤
              </label>
              <input
                value={sleep}
                onChange={(e) => {
                  setSleep(e.target.value);
                }}
                type="number"
                className="sleep_input"
                placeholder={language === 'en' ? "enter your hours sleep" : 'ادخل ساعات نوك'}
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(ActStoreSleep(sleep))
                  .unwrap()
                  .then(() => {})
                  .catch(() => {});
              }}
              disabled={loading === "pending" ? true : false}
              className="button--link button--flex"
            >
              {language === "ar" ? "حفظ" : "Save"}{" "}
              {loading === "pending" ? <ButtonLoading /> : ""}{" "}
              <i className="ri-arrow-right-down-line button__icon"></i>
            </button>
          </form>
        </div>
        <img src={Img2} alt="none" className="about__img" />
      </div>
    </section>
  );
}
