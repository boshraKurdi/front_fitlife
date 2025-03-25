import { useSelector } from "react-redux";
import SwiperComponent from "../../Swiper/SwiperComponent";
import { useNavigate } from "react-router-dom";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
export default function LastExercises({ progress, error, loading }) {
  const { value, language , data ,is_holiday } = useSelector((state) => state.mode);
  const nav = useNavigate();
  const newData = (progress[0]?.plans?.length && !is_holiday)
    ? progress[0]?.plans?.map((data) => {
        const newE = data?.exercise?.map((d) => {
          return (
            <>
              <div className={`doctors__card ${value}`}>
                <div className="doctors__card__image">
                  <img
                    style={{ height: "300px" }}
                    src={d?.media && d?.media[0]?.original_url}
                    alt="doctor"
                  />
                </div>
                <h4>{language == "en" ? d.title : d.title_ar}</h4>
                <p>X{d.counter}</p>
              </div>
            </>
          );
        });
        return (
          <>
            <section
              className="section__container doctors__container"
              id="pages"
            >
              <div className="doctors__header">
                <div className="doctors__header__content">
                  <h2 className="section__header">
                    {language === "en" ? "Latest exercises" : "تمارين اليوم"}
                  </h2>
                  <p>
                    {language === "en"
                      ? "The last exercises I have reached from the plan " +
                        data.title
                      : "اخر التمارين من خطة " + data.title_ar}
                  </p>
                </div>
                <button
                  onClick={() => {
                    nav("/user");
                  }}
                >
                  go to play <FitnessCenterIcon/>
                </button>
              </div>
              <div style={{ display: "flex" }} className="doctors__grid">
                <SwiperComponent data={newE} />
              </div>
            </section>
          </>
        );
      })
    : "";
  return <>{newData}</>;
}
