import { Goal_3 } from "../../../../index";
import Components from "../../../../Style/Components/Components";
export default function Content({ goal }) {
  const { MyComponentHeroSubtitleH3 } = Components();
  return (
    <li className="scrollbar-item">
      <div className="class-card">
        <figure className="card-banner img-holder">
          <img
            src={goal.media[0] && goal.media[0].original_url}
            width="416"
            height="240"
            loading="lazy"
            alt="Cardio & Strenght"
            className="img-cover"
          />
        </figure>

        <div className="card-content">
          <div className="title-wrapper">
            <img
              src={Goal_3}
              width="52"
              height="52"
              aria-hidden="true"
              alt=""
              className="title-icon"
            />

            <MyComponentHeroSubtitleH3 className="h3">
              <a href={goal && "/goalDetails/"+goal.id} className="card-title">
                {goal && goal.title}
              </a>
            </MyComponentHeroSubtitleH3>
          </div>

          <p className="card-text">{goal && goal.description}</p>

          {/* <Link style={{background: 'var(--coquelicot)' , padding: '1.2rem' ,fontSize: '1.2rem' , position: 'absolute'}} className="btn" to={goal && "/goalDetails/"+goal.id}>Show Details</Link> */}
        </div>
      </div>
    </li>
  );
}
