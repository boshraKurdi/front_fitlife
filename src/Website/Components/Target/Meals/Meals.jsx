import { useSelector } from "react-redux";
import SwiperComponent from "../../Swiper/SwiperComponent";
import { useNavigate } from "react-router-dom";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
export default function Meals({ progress, error, loading }) {
  const { value, language } = useSelector((state) => state.mode);
  const nav = useNavigate()
  const newData = progress[0]?.meals?.length
    ? progress[0]?.meals[0]?.meal?.map((d) => {
        return (
          <>
            <div className={`doctors__card ${value}`}>
              <div className="doctors__card__image">
                <img
                  style={{ height: "250px" }}
                  src={d?.media && d?.media[0]?.original_url}
                  alt="doctor"
                />
              </div>
              <h4>{language == "en" ? d.title : d.title_ar}</h4>
              <p>calories {d.calories}</p>
            </div>
          </>
        );
      })
    : "";
  return (
    <>
      <section className="section__container doctors__container" id="pages">
        <div className="doctors__header">
          <div className="doctors__header__content">
            <h2 className="section__header">
              {language === "en" ? "Latest Meals" : "وجبات اليوم"}
            </h2>
            <p>
              {language === "en"
                ? "The last meals I have reached from the plan "
                : "اخر الوجبات من خطة "}
            </p>
          </div>
          <button
                  onClick={() => {
                    nav("/food/1");
                  }}
                >
                  go to eat <LocalDiningIcon/>
                </button>
        </div>
        <div style={{ display: "flex" }} className="doctors__grid">
          {newData && <SwiperComponent data={newData} />}
        </div>
      </section>
    </>
  );
}
