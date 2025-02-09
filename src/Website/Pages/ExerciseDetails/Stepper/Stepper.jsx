import { useSelector } from "react-redux";
import "./Stepper.css";
export default function Stepper({ steps }) {
  const { value , language } = useSelector((state) => state.mode);
  const newD = steps
    ? steps?.map((data, index) => {
        return (
          <>
          <div className="timeline_container right_container">
            <span style={{right:language=== 'ar' && "234%"}} className={`num_img ${value}`}>{++index}</span>
            <div className={`text_body ${value}`}>{language === 'ar' ? data?.content_ar : data?.content}</div>
          </div>
          </>
        );
      })
    : "";
  return <div className="timeline">{newD}</div>;
}
