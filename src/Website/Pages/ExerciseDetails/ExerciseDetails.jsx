import "./ExerciseDetails.css";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../DetailsFood/DetailsFood.css";
import "../PlanDetails/PlanDetails.css";
import Stepper from "./Stepper/Stepper";
import Heading from "../../Components/Heading/Heading";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { ActShow } from "../../../Redux/Exercise/ExerciseSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function ExerciseDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { value , language } = useSelector((state) => state.mode);
  const { loadingShow, error, exercise } = useSelector(
    (state) => state.exercise
  );
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch, id]);
  const nav = useNavigate();
  return (
    <SkeletonLoading loading={loadingShow} error={error} type="detailsGoal">
      <div className={`viewport ${value}`}>
        <div id="js-scroll-content">
          <section className="two-col-sec section">
            <div className="container">
              <div className="details_food_row align-items-center">
              <div className="col-lg-5" style={{ marginRight: "2rem" }}>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="sec-img mt-5"
                  >
                    <img
                      src={exercise?.media && exercise?.media[0]?.original_url}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="sec-text">
                    <h2 className="xxl-title">{language === 'ar' ? exercise?.title_ar : exercise?.title}</h2>
                    <p>{language === 'ar' ? exercise?.description_ar: exercise?.description}</p>
                  </div>
                  <ul>
                <li>
                  <CheckCircleIcon />
                  {language === 'ar' ? "السعرات الحرارية" : "calories"}: <span>{exercise?.calories}</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  {language === 'ar' ? "العداد" : "counter"}:{" "}
                  <span>
                    {exercise?.counter}
                  </span>
                </li>
                <li>
                  <CheckCircleIcon />
                  {language === 'ar' ? "المدة" : "duration"}: <span>{exercise?.duration}</span>
                </li>
              </ul>
                  {/* <div className="sec_info">
                    <span>
                      <CheckCircleIcon
                        style={{ fontSize: "2.1rem", marginRight: ".5rem" }}
                      />
                      {exercise?.calories} calories
                    </span>
                    <span>
                      <CheckCircleIcon
                        style={{ fontSize: "2.1rem", marginRight: ".5rem" }}
                      />
                      {exercise?.counter} counter
                    </span>
                    <span>
                      <CheckCircleIcon
                        style={{ fontSize: "2.1rem", marginRight: ".5rem" }}
                      />
                      {exercise?.duration} s
                    </span>
                  </div> */}
                  <button
                    className="btn_start"
                    onClick={() =>
                      Swal.fire({
                        title: "Are You Ready?!",
                        text: "You won't be able to revert this!",
                        icon: "question",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "I ready",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          nav("workout");
                        }
                      })
                    }
                  >
                    {language === 'ar' ? "ابدا الان" : "start now"}
                  </button>
                </div>
               
              </div>
            </div>
          </section>
        </div>
      </div>
      <div id="page-wrapper">
        <div className="container">
          <Heading title={language === 'ar' ? "الخطوات" : "Steps"} subTitle={language === 'ar' ? "خطوات التمرين" : "Steps for exerice"} />
          <section
            style={{
              paddingBottom: "100px",
              display: "flex",
              alignItems: "center",
              minHeight: "100vh",
            }}
            id="one"
            className="style1 bottom"
          >
            <Stepper steps={exercise?.steps} />
            <span className="image fit main">
              <img
                src={exercise?.media && exercise?.media[0].original_url}
                alt=""
              />
            </span>
          </section>
          <section
            style={{ minHeight: "100vh", paddingBottom: "100px" }}
            id="two"
            className="style2"
          >
            <Heading title={language === 'ar' ? "video" : 'فيديو'} subTitle={language === 'ar' ? "فيديو توضيحي لاجل التمرين" :"video for exerice"} />
            <span className="image fit main">
              <video
                style={{ width: "100%", height: "100%" }}
                autoplay
                controls
              >
                <source
                  src={exercise?.media && exercise?.media[1]?.original_url}
                  type={exercise?.media && exercise?.media[1]?.mime_type}
                />
              </video>
            </span>
          </section>
        </div>
      </div>
      {/* <Time id={id} plan_id={plan_id} calories={exercise?.calories} /> */}
    </SkeletonLoading>
  );
}
