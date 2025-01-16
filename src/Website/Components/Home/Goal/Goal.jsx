import "./Goal.css";
import { Goal_1 } from "../../../index";
import Content from "./Content/Content";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActIndex, CleanUp } from "../../../../Redux/Goal/GoalSlice";
import SkeletonLoading from "../../Loading/SkeletonLoading/SkeletonLoading";
import SwiperComponent from "../../Swiper/SwiperComponent";
import LottieFiles from "../../Loading/LottieLoading/LottieFiles";
import Heading from "../../Heading/Heading";
export default function Goal() {
  const dispatch = useDispatch();
  const { goals, loading, error } = useSelector((state) => state.goal);
  useEffect(() => {
    dispatch(ActIndex());
    return () => {
      dispatch(CleanUp());
    };
  }, [dispatch]);
  const newGoals = goals.map((goal) => {
    return <Content key={goal.id} goal={goal} />;
  });
  return (
    <section
      className="section has-bg-image"
      id="goal"
      aria-label="class"
      style={{ backgroundImage: `url(${Goal_1})` }}
    >
      <div className="container" style={{ position: "relative" }}>
        <Heading title='Our Classes' subTitle='Fitness Classes For Every Goal' />
        <ul className="class-list has-scrollbar">
          <SkeletonLoading loading={loading} error={error} type="goal">
            {goals.length > 0 ? 
              <SwiperComponent data={newGoals} />
            : 
              <LottieFiles message="The Goals is empty" type="empty" />
            }
          </SkeletonLoading>
        </ul>
      </div>
    </section>
  );
}
