import { SwiperSlide } from "swiper/react";
import Components from "../../../../Style/Components/Components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Content =  ({ plan }) => {
  const { language } = useSelector((state) => state.mode)
  const { MyComponentHeroSubtitleH3 } = Components();
  return (
    <SwiperSlide  key={plan.plan && plan.plan?.id}>
        <li className="scrollbar-item">
          <div className="class-card">
            <figure className="card-banner img-holder">
              <img
                src={plan.plan?.media && plan.plan.media[0].original_url}
                width="416"
                height="240"
                loading="lazy"
                alt="Cardio & Strenght"
                className="img-cover"
              />
            </figure>

            <div className="card-content">
              <div className="title-wrapper">
                <MyComponentHeroSubtitleH3 className="h3">
                  <Link to={`/planDetails/${plan.plan && plan?.plan?.id}`} className="card-title">
                  {plan.plan && (language === 'ar' ? plan.plan?.title_ar : plan.plan?.title)}
                  </Link>
                </MyComponentHeroSubtitleH3>
              </div>
            </div>
          </div>
        </li>
      </SwiperSlide>
  );
}
export default Content
