import { useSelector } from "react-redux";
import './Stepper.css'
export default function Stepper({steps}) {
  const { value } = useSelector((state) => state.mode);
  const newD = steps ? steps.map((data , index)=>{
    return(
        <div className="timeline_container right_container">
        <span className={`num_img ${value}`}>{++index}</span>
        <div className={`text_body ${value}`}>
         {data?.content}
        </div>
      </div>
    )
  } ) : ''
  return (
    <div className="timeline">
      {newD}
    </div>
  );
}
