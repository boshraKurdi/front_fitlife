import { useSelector } from "react-redux";
import Content from "../../Components/ProfileUser/Content/Content";
import "../DashboardPlan/DashboardPlan.css";
export default function ProfileUser() {
  const { value } = useSelector((state) => state.mode)
  return (
    
    <div className={`profile ${value}`}>
      <div className="container_profile">
        <div className="container-body">
          <Content />
        </div>
      </div>
    </div>
  );
}
