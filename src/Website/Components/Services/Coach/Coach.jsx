import { useDispatch, useSelector } from "react-redux";
import Heading from "../../Heading/Heading";
import Content from "./Content/Content";
import { useEffect } from "react";
import { ActGetCoach } from "../../../../Redux/User/UserSlice";
import SkeletonLoading from "../../Loading/SkeletonLoading/SkeletonLoading";
import SwiperComponent from "../../Swiper/SwiperComponent";
import LottieFiles from "../../Loading/LottieLoading/LottieFiles";
export default function Coach() {
  const dispatch = useDispatch();
  const { coachs, loading, error } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(ActGetCoach());
  }, [dispatch]);
  const newData = coachs.map((coach) => {
    return <Content key={coach.id} coach={coach} />;
  });
  return (
    <section className="section container">
      <Heading title="Our Coach" subTitle="Having Your Own Coach And Mentor" />
      <ul>
        <SkeletonLoading loading={loading} error={error} type="goal">
          {coachs.length > 0 ? (
            <SwiperComponent data={newData} />
          ) : (
            <LottieFiles message="The Coach is empty" type="empty" />
          )}
        </SkeletonLoading>
      </ul>
    </section>
  );
}
