import { useSelector } from "react-redux";
import SkeletonLoading from "../Loading/SkeletonLoading/SkeletonLoading";
import SwiperComponent from "../Swiper/SwiperComponent";
import Heading from "../Heading/Heading";

export default function Ingredients({ data, loading, error }) {
  const { language } = useSelector((state) => state.mode)
  const newData = data?.ingredients?.map((e) => {
    return (
      <>
        <div key={e?.id} className="col-lg-4">
          <div style={{width:'250px' , height:'250px'}} className="blog-box">
            <img src={e?.media && e?.media[0]?.original_url} alt="none" />
            <div className="blog-text">
              <p className="blog-date">{e?.num +(language ==='ar' ? " من ": " of ") + (language ==='ar' ? e?.name_ar : e?.name)}</p>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <div className="bg-pattern bg-light repeat-img">
      <section className="blog-sec section" id="blog">
        <div className="sec-wp">
          <div className="container">
            <div className="details_food_row">
              <div className="col-lg-12">
                <div className="sec-title text-center mb-5">
                      <Heading title={language ==='ar' ? "وجباتنا" : "Our Meal"} subTitle={language ==='ar' ? "المكونات" : 'Ingredients'} />
                </div>
              </div>
            </div>
            <div className="details_food_row">
              <SkeletonLoading loading={loading} error={error} type="plan">
                {data.ingredients?.length > 0 && (
                  <SwiperComponent data={newData} />
                )}
              </SkeletonLoading>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
