import { useDispatch, useSelector } from "react-redux";
import { Goal_1 } from "../../../index";
import Content from "./Content/Content";
import { useEffect } from "react";
import { ActGetMyGoal, CleanUp } from "../../../../Redux/MyGaol/MyGoalSlice";
import SkeletonLoading from "../../Loading/SkeletonLoading/SkeletonLoading";
import SwiperComponent from "../../Swiper/SwiperComponent";
import LottieFiles from "../../Loading/LottieLoading/LottieFiles";
import Heading from "../../Heading/Heading";
const MyGoal = () => {
  const dispatch = useDispatch();
  const { myGoals, loading, error , message } = useSelector((state) => state.myGoal);
  useEffect(() => {
    dispatch(ActGetMyGoal());
    return () => {
      dispatch(CleanUp());
    };
  }, [dispatch]);
  const newG = myGoals.filter((data)=>{
    return data.totalRate !== 0
  })
  const newMyGoal = newG.map((plan) => {
    return plan.totalRate !== 0 && <Content key={plan.id} plan={plan} />;
  });
  return (
    <>
    {
    <section
      className="section top has-bg-image"
      id="class"
      aria-label="class"
      style={{ backgroundImage: `url(${Goal_1})` }}
    >
      <div className="container" style={{ position: "relative" }}>
        <Heading title="My Plans" subTitle='Latest Plans'/>
        <ul className="class-list has-scrollbar">
          <SkeletonLoading loading={loading} error={error} type="plan">
            {(myGoals.length > 0) ? (
              <SwiperComponent data={newMyGoal} />
            ) : (
              <LottieFiles message={message} type="goal" />
            )}
          </SkeletonLoading>
        </ul>
      </div>
    </section>
          }
        </>
  );
};
export default MyGoal;
