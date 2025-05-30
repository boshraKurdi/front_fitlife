import { Link } from 'react-router-dom';
import Heading from '../Heading/Heading';
import LottieFiles from '../Loading/LottieLoading/LottieFiles';
import SkeletonLoading from '../Loading/SkeletonLoading/SkeletonLoading';
import SwiperComponent from '../Swiper/SwiperComponent';
import { useSelector } from 'react-redux';
export default function OtherFood({loading  , meal , error}) {
  const { language } = useSelector((state) => state.mode)
    const newGym = meal.other ? meal.other.map((data) => {
      return(
      <div style={{height:'100%'}} key={data.id}>
      <li className="scrollbar-item">
        <div className="blog-card">
          <div className="card-banner img-holder">
            <img
              src={data.media[0] && data.media[0].original_url}
              width="440"
              height="270"
              loading="lazy"
              alt="Going to the data for the first time"
              className="img-cover"
            />

            <time className="card-meta">{data.calories && data.calories} {language ==='ar' ?  "سعرة حرارية": "calories"}</time>
          </div>

          <div className="card-content">
            <h3 className="h3">
              <a href="index" className="card-title">
                {data.name && (language ==='ar' ?  data.name_ar : data.name)}
              </a>
            </h3>

            <p style={{fontWeight: "100"}} className="card-text">{data.description && (language ==='ar' ? data.description_ar : data.description)}</p>

            <Link to={'/mealDetails/'+data.id} className="btn-link has-before">
              {language ==='ar' ? "تفاصيل اكثر" : "Read More"}
            </Link>
          </div>
        </div>
      </li>
    </div>
      )
    }): '';
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container" style={{ position: "relative" }}>
        <Heading title={language ==='ar' ? "وجباتنا" : "Our Meal"} subTitle={language ==='ar' ? "الوجبات المشابهة" : 'Similar Meals'} />
        <ul className="blog-list has-scrollbar">
          <SkeletonLoading loading={loading} error={error} type="plan">
            {meal.other?.length > 0 ? (
              <SwiperComponent data={newGym} /> 
            ) : (
              <LottieFiles message="The Meals is empty" type="empty" />
            )}
          </SkeletonLoading>
        </ul>
      </div>
    </section>
  );
}
