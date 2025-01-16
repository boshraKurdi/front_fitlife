import { useDispatch, useSelector } from "react-redux";
import Heading from "../../Heading/Heading";
import Content from "./Content/Content";
import { useEffect } from "react";
import { ActIndex } from "../../../../Redux/Service/ServiceSlice";
import SkeletonLoading from "../../Loading/SkeletonLoading/SkeletonLoading";
import SwiperComponent from "../../Swiper/SwiperComponent";
import LottieFiles from "../../Loading/LottieLoading/LottieFiles";

export default function Service() {
  const dispatch = useDispatch();
  const { services, loading, error } = useSelector((state) => state.service);
  useEffect(() => {
    dispatch(ActIndex());
  }, [dispatch]);
  const newData = Array.isArray(services) ? services.map((service) => {
    return <Content key={service.id} service={service} />;
  }):'';
  return (
    <section className="section popular" id="className">
      <div className="container">
        <Heading title='Our Service' subTitle='List of paid services' />
        <ul>
        <SkeletonLoading loading={loading} error={error} type="goal">
          {services.length > 0 ? (
            <SwiperComponent data={newData} />
          ) : (
            <LottieFiles message="The Services is empty" type="empty" />
          )}
        </SkeletonLoading>
      </ul>
      </div>
    </section>
  );
}
