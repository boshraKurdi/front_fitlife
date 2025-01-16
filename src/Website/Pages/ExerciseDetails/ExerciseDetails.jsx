import "./ExerciseDetails.css";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../DetailsFood/DetailsFood.css";
import '../PlanDetails/PlanDetails.css'
import Stepper from "./Stepper/Stepper";
import Heading from "../../Components/Heading/Heading";
import { useEffect } from "react";
import { ActShow } from "../../../Redux/Exercise/ExerciseSlice";
import { useParams } from "react-router-dom";
import Time from "./Time/Time";

export default function ExerciseDetails() {
  const { value } = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const { id , plan_id  } = useParams()
  const { loadingShow , error , exercise } = useSelector((state) => state.exercise);
  useEffect(()=>{
    dispatch(ActShow(id))
  } , [dispatch , id])
  return (
     <SkeletonLoading loading={loadingShow} error={error} type="detailsGoal">
      <div className={`viewport ${value}`}>
        <div id="js-scroll-content">
          <section className="two-col-sec section">
            <div className="container">
              <div className="details_food_row align-items-center">
                <div className="col-lg-5" style={{ marginRight: "2rem" }}>
                  <div style={{display:'flex' , justifyContent:'center'}} className="sec-img mt-5">
                    <img src={exercise?.media && exercise?.media[0].original_url} alt="" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="sec-text">
                    <h2 className="xxl-title">{exercise?.title}</h2>
                    <p>
                      {exercise?.description}
                    </p>
                  </div>
                  <div className="sec_info">
                    <span>
                      <CheckCircleIcon
                        style={{ fontSize: "2.1rem", marginRight: ".5rem" }}
                      />{exercise?.calories} calories
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
                      />{exercise?.duration} minuts
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div id="page-wrapper">
        <div className="container">
        <Heading title={'Steps'} subTitle={'Steps for exerice'} />
          <section style={{paddingBottom: '100px' ,display:'flex' , alignItems:'center' , minHeight:'100vh'}} id="one" className="style1 bottom">
          <Stepper steps={exercise?.steps}/>
            <span className="image fit main">
              <img src={exercise?.media && exercise?.media[0].original_url} alt="" />
            </span>
          </section>
          <section style={{minHeight:'100vh', paddingBottom: '100px'}} id="two" className="style2">
          <Heading title={'video'} subTitle={'video for exerice'} />
            <span className="image fit main">
            <video style={{width:'100%' , height:'100%'}} autoplay controls>
                <source src={exercise?.media && exercise?.media[1].original_url} type={exercise?.media && exercise?.media[1].mime_type} />
            </video>
            </span>
          </section>
        </div>
      </div>
      <Time id={id} plan_id={plan_id} calories={exercise?.calories}/>
      </SkeletonLoading>
  );
}
