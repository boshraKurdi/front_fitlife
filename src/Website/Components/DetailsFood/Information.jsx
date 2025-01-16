import Img1 from '../../../img/testimonial-img.png'
import Heading from '../Heading/Heading';
export default function Information({meal}) {
  return (
    <section className="testimonials section bg-light">
      <div className="sec-wp">
        <div className="container">

          <Heading title={"Meal information"} subTitle={'What our Meal about us Meal'} />
          <div className="details_food_row">
            <div className="col-lg-5" style={{ marginRight: "2rem" }}>
              <div className="testimonials-img">
                <img src={Img1} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="details_food_row" style={{ flexWrap: "wrap" }}>
                <div className="col-sm-12">
                  <div className="testimonials-box">
                    <div className="testimonials-box-text">
                      <h3 className="h3-title">Ingredients</h3>
                      <p>
                        {meal?.components}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12">
                  <div className="testimonials-box">
                    <div className="testimonials-box-text">
                      <h3 className="h3-title">Resipe</h3>
                      <p>
                      {meal?.prepare}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
