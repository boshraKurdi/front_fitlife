import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSelector } from 'react-redux';
export default function Home({meal}) {
  const { language } = useSelector((state) => state.mode)
  return (
    <section className="two-col-sec section">
      <div className="container">
        <div className="details_food_row align-items-center">
          <div className="col-lg-5" style={{ marginRight: "2rem" }}>
            <div className="sec-img mt-5">
              <img src={meal?.media && meal.media[0].original_url} alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="sec-text">
              <h2 className="xxl-title">{language === 'ar' ?  meal?.title_ar : meal?.title}</h2>
              <p>
                {language === 'ar' ?  meal?.description_ar : meal?.description}
              </p>
            </div>
            <div className="sec_info">
              <span><CheckCircleIcon style={{fontSize:'2.1rem' ,  marginRight:'.5rem'}} />{meal?.calories} {language === 'ar' ? "سعرة حرارية" : "calories"}</span>
              <span><CheckCircleIcon style={{fontSize:'2.1rem' ,  marginRight:'.5rem'}} />{meal?.carbohydrates} {language === 'ar' ? "كربوهيدرات" : "carbohydrates"}</span>
              <span><CheckCircleIcon style={{fontSize:'2.1rem' ,  marginRight:'.5rem'}} /> {meal?.fats} {language === 'ar' ? "دهون" : "fats"}</span>
              <span><CheckCircleIcon style={{fontSize:'2.1rem' ,  marginRight:'.5rem'}} />{meal?.proteins} {language === 'ar' ? "بروتينات" : "proteins"}</span>
              <span><CheckCircleIcon style={{fontSize:'2.1rem' ,  marginRight:'.5rem'}} />{meal?.category?.title} {language === 'ar' ? "صنف" : "category"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
