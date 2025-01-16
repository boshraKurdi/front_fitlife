import { Swiper , SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
let i = 0;
const SwiperComponent2 = ({ data }) => {
  const newData = data.map((d)=>{
    return(
      <SwiperSlide key={i++}>
      {d}
    </SwiperSlide>
    )
  })
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      loop={data.length > 2}
      spaceBetween={50}
      breakpoints={{
        640: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
      }}
    >
      {newData}
    </Swiper>
  );
};
export default SwiperComponent2;
