import { Link } from "react-router-dom";
import Components from "../../../../Style/Components/Components";
import { useSelector } from "react-redux";

const Content = ({ plan }) => {
  const { MyComponentHeroSubtitleH3 } = Components();
  const { language } = useSelector((state) => state.mode)
  return (
    <>
      <li className="scrollbar-item">
        <div className="class-card">
          <figure className="card-banner img-holder">
            <img
              src={plan?.media[0] && plan.media[0].original_url}
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
                <Link
                  to={`/planDetails/${plan.id}`}
                  className="card-title"
                >
                  {language === 'ar' ? plan?.title_ar : plan?.title}
                </Link>
              </MyComponentHeroSubtitleH3>
            </div>

            <p className="card-text">{language === 'ar' ? plan?.description_ar : plan?.description}</p>

            <div className="card-progress">
              <div className="progress-wrapper">
                <p className="progress-label">{language === 'en' ? "Progress on the plan" : "تقدمي في الخطة"}</p>

                <span className="progress-value">
                  {plan?.totalRate + "%"}
                </span>
              </div>

              <div className="progress-bg">
                <div
                  className="progress-bar"
                  style={{ width: `${plan.totalRate}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default Content;
