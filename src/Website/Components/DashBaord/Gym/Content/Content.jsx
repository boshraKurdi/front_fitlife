import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
export default function Content({ gym }) {
  return (
    <SwiperSlide key={gym.id}>
      <li className="scrollbar-item">
        <div className="blog-card">
          <div className="card-banner img-holder">
            <img
              src={gym.media[0] && gym.media[0].original_url}
              width="440"
              height="270"
              loading="lazy"
              alt="Going to the gym for the first time"
              className="img-cover"
            />

            <time className="card-meta">{gym?.address}</time>
          </div>

          <div className="card-content">
            <h3 className="h3">
              <a href="index" className="card-title">
                {gym.name && gym.name}
              </a>
            </h3>
            <p className="card-text">
              distance: {gym.distance === 0 ? "قريب جدا" : gym.distance + "km"}
            </p>
            <p className="card-text">{gym.description && gym.description}</p>

            <Link to={'../gymDetails/'+gym.id} className="btn-link has-before">
              Read More
            </Link>
          </div>
        </div>
      </li>
    </SwiperSlide>
  );
}
