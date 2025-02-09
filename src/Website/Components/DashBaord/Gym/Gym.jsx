import Content from "./Content/Content";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActIndex, CleanUp } from "../../../../Redux/Gym/GymSlice";
import SkeletonLoading from "../../Loading/SkeletonLoading/SkeletonLoading";
import SwiperComponent from "../../Swiper/SwiperComponent";
import LottieFiles from "../../Loading/LottieLoading/LottieFiles";
import Heading from "../../Heading/Heading";
const Gym = () => {
  const { language } = useSelector((state) => state.mode)
  const dispatch = useDispatch();
  const { gyms, loading, error } = useSelector((state) => state.gym);
  useEffect(() => {
    dispatch(ActIndex());
    return () => {
      dispatch(CleanUp());
    };
  }, [dispatch]);
  const newGym = gyms.map((gym) => {
    return <Content key={gym.id} gym={gym} />;
  });
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container" style={{ position: "relative" }}>
        <Heading title={language === 'ar' ? "نوادي رياضية" : "Gym"} subTitle={language === 'ar' ? "النوادي الرياضية الاقرب" : 'The closest Gym'} />
        <ul className="blog-list has-scrollbar">
          <SkeletonLoading loading={loading} error={error} type="plan">
            {gyms.length > 0 ? (
              <SwiperComponent data={newGym} /> 
            ) : (
              <LottieFiles message="The Gym is empty" type="empty" />
            )}
          </SkeletonLoading>
        </ul>
      </div>
    </section>
  );
};
export default Gym;
