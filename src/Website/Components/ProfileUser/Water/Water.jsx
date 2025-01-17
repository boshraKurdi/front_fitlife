import "./Water.css";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
export default function Water({ num }) {
  let width = (num / 5) * 100;
  return (
    <div className="pW">
     
      <div className="cup">
        <div className="rema">
          <span className="liter"></span>
          <small>{num + "L"}</small>
        </div>
        <div style={{ height: width + "%" }} className="per"></div>
      </div>
      <div className="let">
        <span>
          <LocalDrinkIcon /> 5L
        </span>
        <span>
          <LocalDrinkIcon /> 2.5L
        </span>
        <span>
          <LocalDrinkIcon /> 0L
        </span>
      </div>
    </div>
  );
}
