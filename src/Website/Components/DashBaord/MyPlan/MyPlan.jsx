import { useDispatch, useSelector } from "react-redux";
import Content from "./Content/Content";
import { useEffect } from "react";
import { ActIndex, CleanUp } from "../../../../Redux/MyPlan/MyPlanSlice";
import SwiperComponent from "../../Swiper/SwiperComponent";
const MyPlan = () => {
  const dispatch = useDispatch();
  const { myGoals } = useSelector((state) => state.myGoal);
  const { myPlans , loading } = useSelector((state) => state.myPlan);
  const { language } = useSelector((state) => state.mode)
  useEffect(() => {
    dispatch(ActIndex());
    return () => {
      dispatch(CleanUp());
    };
  }, [myGoals, dispatch]);
  const newRecorde = myPlans.length
    ? myPlans.map((plans) => {
        const newPlans = plans.map((plan) => {
          return <Content key={plan.id} plan={plan} />;
        });
        return (
          <>
          {loading !== 'pending' ?
            plans.length > 0 && (
              <section key={plans.id} className=" " id="blog" aria-label="blog">
                <div className="container" style={{ position: "relative" }}>
                  <h2
                    style={{
                      margin: "4rem 0",
                      textAlign: "center",
                      fontSize: "5rem",
                    }}
                  >
                    {plans.length > 0 && (language === 'ar' ? plans[0].plan.type_ar : plans[0].plan.type)}
                  </h2>
                  <ul className="class-list has-scrollbar">
                    <SwiperComponent data={newPlans} />
                  </ul>
                </div>
              </section>
               
            )
            :"loading" }
          </>
        );
      })
    : "";
  return  newRecorde;
};
export default MyPlan;
