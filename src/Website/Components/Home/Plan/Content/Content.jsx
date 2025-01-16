export default function Content({ plan }) {
  return (
    <li className="scrollbar-item">
      <div className="blog-card">
        <div className="card-banner img-holder">
          <img
            src={plan.plan.media[0] && plan.plan.media[0].original_url}
            width="440"
            height="270"
            loading="lazy"
            alt="Going to the gym for the first time"
            className="img-cover"
          />

          <time className="card-meta">{plan.plan.duration}</time>
        </div>

        <div className="card-content">
          <h3 className="h3">
            <a href="index" className="card-title">
              {plan.plan.title}
            </a>
          </h3>

          <p className="card-text">{plan.plan.description}</p>

          <a href="index" className="btn-link has-before">
            Read More
          </a>
        </div>
      </div>
    </li>
  );
}
