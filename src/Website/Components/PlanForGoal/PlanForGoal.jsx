import { useDispatch, useSelector } from "react-redux";
import Content from "./Content/Content";
import { useEffect } from "react";
import { ActGetPlanForGoal, PlanForGoalCleanUp } from '../../../Redux/Plan/PlanSlice';
import SkeletonLoading from "../Loading/SkeletonLoading/SkeletonLoading";
import SwiperComponent from "../Swiper/SwiperComponent";
import LottieFiles from "../Loading/LottieLoading/LottieFiles";
const PlanForGoal = ({id}) => {
  const dispatch = useDispatch();
  const { plansForGoal, loading, error } = useSelector((state) => state.plan);
  useEffect(() => {
    dispatch(ActGetPlanForGoal(id));
    return () => {
      dispatch(PlanForGoalCleanUp());
    };
  }, [dispatch , id]);
  const newPlans = plansForGoal.map((planLevel) => {
    return <Content key={planLevel.id} planLevel={planLevel} />;
  });
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container" style={{ position: "relative" }}>
        <p className="section-subtitle">My Plan</p>

        <h2 className="h2 section-title text-center">Latest Plans</h2>
        <ul className="class-list has-scrollbar">
          <SkeletonLoading loading={loading} error={error} type="plan">
            {plansForGoal.length > 0 ? (
              <SwiperComponent data={newPlans} count={newPlans.length} />
            ) : (
              <LottieFiles message="Your Plans is empty" type="empty" />
            )}
          </SkeletonLoading>
        </ul>
      </div>
    </section>
  );
};
export default PlanForGoal;
