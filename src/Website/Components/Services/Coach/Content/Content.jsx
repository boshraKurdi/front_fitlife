import { Link } from "react-router-dom";
import { Goal_3 } from "../../../../index"
import Components from "../../../../Style/Components/Components";
export default function Content({coach}){
    const { MyComponentHeroSubtitleH3 } = Components();
    return(
        <li className="scrollbar-item">
      <div className="class-card">
        <figure style={{height:'400px'}} className="card-banner img-holder">
          <img
            src={coach.media && coach.media[0].original_url}
            style={{objectFit:'cover' , height:"100%"}}
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
              <Link to={`/services/profileCoach/${coach.id}`} className="card-title">
                {coach.name}
              </Link>
            </MyComponentHeroSubtitleH3>
          </div>

          <p className="card-text">lorem sfmksdmf dsfkmdsf sdkfmsdkmf sdkfmksd</p>

          {/* <button onClick={HandelChat} style={{background: 'var(--coquelicot)'}} className="btn" >Start Chat</button> */}
        </div>
      </div>
    </li>
    )
}