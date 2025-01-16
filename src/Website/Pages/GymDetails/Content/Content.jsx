import { useSelector } from "react-redux";
import "./Content.css";
export default function Content({data}) {
    const { value } = useSelector((state)=>state.mode)
  return (
    <div style={{minHeight:'400px'}} className={`doctors__card ${value}`}>
      <div style={{height: '300px'}} className="doctors__card__image">
        <img src={data.media && data.media[0].original_url} alt="doctor" />
      </div>
      <h4>{data.title}</h4>
      <p style={{padding: '0 1rem '}}>{data.description}</p>
    </div>
  );
}
