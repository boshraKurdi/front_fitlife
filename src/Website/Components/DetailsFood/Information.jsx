import { useSelector } from 'react-redux';
import Img1 from '../../../img/testimonial-img.png'
import Heading from '../Heading/Heading';
export default function Information({meal}) {
  const { language } = useSelector((state) => state.mode)
  return (
    <section className="testimonials section bg-light">
      <div className="sec-wp">
        <div className="container">

          <Heading title={language === 'en' ? "Meal information" : 'معلومات الوجبة'} subTitle={language === 'en' ? 'What our Meal about us Meal' : 'ما هي وجبتنا'} />
          <div className="details_food_row">
           
            <div className="col-lg-7">
              <div className="details_food_row" style={{ flexWrap: "wrap" }}>
                <div className="col-sm-12">
                  <div className="testimonials-box">
                    <div className="testimonials-box-text">
                      <h3 className="h3-title">{language === 'ar' ? "مكونات الوجبة" : "Ingredients"}</h3>
                      <p>
                        {language === 'ar' ? meal?.components_ar : meal?.components}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12">
                  <div className="testimonials-box">
                    <div className="testimonials-box-text">
                      <h3 className="h3-title">{language === 'ar' ? "طريقة التحضير" : "Resipe"}</h3>
                      <p>
                      {language === 'ar' ? meal?.prepare_ar : meal?.prepare}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5" style={{ marginRight: "2rem" }}>
              <div className="testimonials-img">
                <img src={Img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
