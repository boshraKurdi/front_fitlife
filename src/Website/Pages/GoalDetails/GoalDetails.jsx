import "./GoalDetails.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Components from "../../Style/Components/Components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActShow, GoalCleanUp } from "../../../Redux/Goal/GoalSlice";
import { useNavigate, useParams } from "react-router-dom";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
// import PlanForGoal from "../../Components/PlanForGoal/PlanForGoal";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { ActStore, ResetMessages } from "../../../Redux/MyGaol/MyGoalSlice";
import { useSnackbar } from "notistack";
import ButtonLoading from "../../Components/Loading/ButtonLoading/ButtonLoading";
const GoalDetails = () => {
  const { MyComponentTitle } = Components();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const nav = useNavigate();
  const { language } = useSelector((state) => state.mode);

  const { goal, error, loading } = useSelector((state) => state.goal);
  const { loadingStore, message, type } = useSelector((state) => state.myGoal);
  const { token } = useSelector((state) => state.auth);
  const { id } = useParams();
  useEffect(() => {
    dispatch(ActShow(id)).unwrap().catch();
    return () => {
      dispatch(GoalCleanUp());
    };
  }, [dispatch, id]);
  useEffect(() => {
    if (message) {
      enqueueSnackbar(`${message}`, { variant: `${type}` });
      dispatch(ResetMessages());
    }
  }, [message, type, dispatch, enqueueSnackbar]);
  return (
    <>
      <div className="card top">
        <SkeletonLoading loading={loading} error={error} type="detailsGoal">
          <div className="product-imgs">
            <div
              style={{ justifyContent: "center", display: "flex" }}
              className="img-display"
            >
              <div
                style={{ width: "100%", height: "400px" }}
                className="img-showcase"
              >
                <img
                  style={{
                    borderRadius: "50%",
                    width: "75%",
                    minWidth: "400px",
                    objectFit: "contain",
                  }}
                  src={goal.media && goal.media[0]?.original_url}
                  alt="shoe"
                />
              </div>
            </div>
          </div>
          <div className="product-content">
            <MyComponentTitle className="product-title">
              {language === "ar" ? "تفاصيل الهدف" : "Goal Details"}
            </MyComponentTitle>
            <a href="index" className="product-link">
              {language === "ar" ? "الهداف في موقعنا" : "goals in fitlife"}
            </a>

            <div className="product-detail">
              <h1 style={{ padding: "1rem 0" }}>
                {language === "ar" ? "حول هذا الهدف" : "about this goal"}:{" "}
              </h1>
              <p>
                {goal &&
                  (language === "ar" ? goal.description_ar : goal.description)}
              </p>
              <ul>
                <li>
                  <CheckCircleIcon />
                  {language === "ar" ? "لهدف " : "goal "}:{" "}
                  <span>
                    {goal && (language === "ar" ? goal.title_ar : goal.title)}
                  </span>
                </li>
                <li>
                  <CheckCircleIcon />
                  {language === "ar" ? "السعرات الحرارية" : "calories"}:{" "}
                  <span>
                    {goal && goal.calories_min + " .. " + goal.calories_max}
                  </span>
                </li>
                <li>
                  <CheckCircleIcon />
                  {language === "ar" ? "المدة" : "duration"}:{" "}
                  <span>{goal && goal.duration}</span>
                </li>
              </ul>
              {/* {token && goal?.count === 0 ? (
                "you start"
              ) : ( */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  !token
                    ? enqueueSnackbar(`please login!`, { variant: "error" })
                    : dispatch(ActStore(goal && goal.id))
                        .unwrap()
                        .then(() => {
                          nav("/user");
                        })
                        .catch(() => {});
                }}
                className="btn_start"
                disabled={
                  (token && goal?.countAll) || loadingStore === "pending"
                    ? true
                    : false
                }
              >
                {language === "ar" ? " ابدا الان  " : "Start Now"}{" "}
                {loadingStore === "pending" ? (
                  <ButtonLoading />
                ) : (
                  <KeyboardDoubleArrowRightIcon />
                )}
              </button>
              {/* )} */}
            </div>
          </div>
          {/* <PlanForGoal plan={goal.plan && goal?.plan} /> */}
        </SkeletonLoading>
      </div>
    </>
  );
};
export default GoalDetails;
