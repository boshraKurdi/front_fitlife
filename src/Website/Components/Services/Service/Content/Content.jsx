import { NavLink } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Content.css";
import { useSelector } from "react-redux";
export default function Content({ service }) {
  const { language } = useSelector((state) => state.mode);
  return (
    <div className="plan_service">
      <div className="inner">
        <span className="pricing">
          <span>${service.price}</span>
        </span>
        <p className="title">{service.service}</p>
        <p className="info">
         {language === 'ar' ? "هذه الخطة مخصصة لأولئك الذين لديهم فريق بالفعل ويديرون أعمالًا كبيرة": "This plan is for those who have a team already and running a large business."}
        </p>
        <ul className="features">
          <li>
            <span className="icon">
              <CheckCircleIcon />
            </span>
            <span>
              <strong>{service.duration} {language === 'ar' ? "اسبوع" : "week"}</strong>{language === 'ar' ? "مدة الخدمة" : "duration service"}
            </span>
          </li>
          <li>
            <span className="icon">
              <CheckCircleIcon />
            </span>
            <span>
              {language === 'ar' ? "الخطة" : "Plan"} <strong>{language === 'ar' ? "محادثة مع المدرب" : "chat coach"}</strong>
            </span>
          </li>
        </ul>
        <div className="action">
          <NavLink className="button" to="payment">
            {language === 'ar' ? "دفع" : "payment"}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
