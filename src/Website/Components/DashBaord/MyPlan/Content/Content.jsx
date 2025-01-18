import { SwiperSlide } from "swiper/react";
import Components from "../../../../Style/Components/Components";
import { Link } from "react-router-dom";
const Content =  ({ plan }) => {
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
                  {plan.plan && plan.plan?.title}
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
