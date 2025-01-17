import { NavLink } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Content.css";
export default function Content({ service }) {
  return (
    <div className="plan_service">
      <div className="inner">
        <span className="pricing">
          <span>${service.price}</span>
        </span>
        <p className="title">{service.service}</p>
        <p className="info">
          This plan is for those who have a team already and running a large
          business.
        </p>
        <ul className="features">
          <li>
            <span className="icon">
              <CheckCircleIcon />
            </span>
            <span>
              <strong>{service.duration} week</strong> duration service
            </span>
          </li>
          <li>
            <span className="icon">
              <CheckCircleIcon />
            </span>
            <span>
              Plan <strong>chat coach</strong>
            </span>
          </li>
          <li>
            <span className="icon">
              <CheckCircleIcon />
            </span>
            <span>File sharing</span>
          </li>
        </ul>
        <div className="action">
          <NavLink className="button" to="payment">
            payment
          </NavLink>
        </div>
      </div>
    </div>
  );
}
