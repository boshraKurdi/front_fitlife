import "./Plan.css";
import Content from "./Content/Content";
import SkeletonLoading from "../../Loading/SkeletonLoading/SkeletonLoading";
import SwiperComponent from "../../Swiper/SwiperComponent";
import LottieFiles from "../../Loading/LottieLoading/LottieFiles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActIndex, CleanUp } from "../../../../Redux/Plan/PlanSlice";
import Heading from "../../Heading/Heading";
export default function Plan() {
  const dispatch = useDispatch();
  const { plans, loading, error } = useSelector((state) => state.plan);
  useEffect(() => {
    dispatch(ActIndex());
    return () => {
      dispatch(CleanUp());
    };
  }, [dispatch]);

  const newRecorde = plans.map((plan) => {
    const newPlans = plan.map((p) => {
      return <Content key={p.id} plan={p} />;
    });
    return(
    <section  className="section blog" id="blog" aria-label="blog">
      <div className="container" style={{ position: "relative" }}>
        <Heading title='Our Plans' subTitle={"muscle "+plan[0].plan.muscle} />
        <ul className="blog-list has-scrollbar">
          <SkeletonLoading loading={loading} error={error} type="plan">
            {plans.length > 0 ? (
              <SwiperComponent data={newPlans} />
            ) : (
              <LottieFiles message="The Plans Wis empty" type="empty" />
            )}
          </SkeletonLoading>
        </ul>
      </div>
    </section>
    )
  })
  return (
    <> {newRecorde}</>
  );
}
