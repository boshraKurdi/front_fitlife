import Components from "../../../Style/Components/Components";
import Level from "../../Level/Level";
export default function Content({ planLevel }) {
  const { MyComponentHeroSubtitleH3 } = Components();
  return (
    <li className="scrollbar-item">
    <div className="class-card">
      <figure className="card-banner img-holder">
        <img
          src={
            planLevel.plan_levels.plan.media &&
            planLevel.plan_levels.plan.media[0]?.original_url
          }
          width="416"
          height="240"
          loading="lazy"
          alt="Cardio & Strenght"
          className="img-cover"
        />
        <time className="card-meta">
          {planLevel.plan_levels &&
            planLevel.plan_levels.plan.duration + " week"}
        </time>
      </figure>

      <div className="card-content">
        <div className="title-wrapper">
          <Level num={planLevel.plan_levels.level.id} />

          <MyComponentHeroSubtitleH3 className="h3">
            <a href="index" className="card-title">
              {planLevel.plan_levels && planLevel.plan_levels.plan.title}
            </a>
          </MyComponentHeroSubtitleH3>
        </div>

        <p className="card-text">
          {planLevel.plan_levels && planLevel.plan_levels.plan.description}
        </p>

      </div>
    </div>
  </li>
    
  )
}
