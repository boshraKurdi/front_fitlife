import { useSelector } from "react-redux";
import Img1 from "../../../img/menu-1.png";
import Img2 from "../../../img/menu-2.png";
import Img3 from "../../../img/menu-3.png";
import Img4 from "../../../img/menu-4.png";
export default function Search({ open, setOpen }) {
  const { value , language } = useSelector((state) => state.mode);
  return (
    <div className="menu-tab-wp">
      <div className="row-a">
        <div className="col-lg-12 m-auto">
          <div className={`menu-tab ${value}  text-center`}>
            <ul className="filters">
              <div className="filter-active"></div>
              <li
              style={{color: open.breakfast && '#fff' , background:open.breakfast &&  ( value === 'light' ? 'var(--coquelicot)': 'var(--fc-button-bg-color)')}}
                onClick={() => {
                  setOpen({
                    ...open,
                    breakfast: true,
                    lunch: false,
                    dinner: false,
                    snack: false
                  });
                }}
                className="filter"
              >
                <img src={Img2} alt="" />
                {language === 'ar' ? "الفطور" : "Breakfast"}
              </li>
              <div className="filter-active"></div>
              <li
              style={{color: open.lunch && '#fff' , background:open.lunch &&  ( value === 'light' ? 'var(--coquelicot)': 'var(--fc-button-bg-color)')}}
                onClick={() => {
                  setOpen({
                    ...open,
                    breakfast: false,
                    lunch: true,
                    dinner: false,
                    snack: false
                  });
                }}
                className="filter"
              >
                <img src={Img3} alt="" />
                {language === 'ar' ? "الغداء" : "Lunch"}
              </li>
              <div className="filter-active"></div>
              <li
              style={{color: open.dinner && '#fff' , background:open.dinner &&  ( value === 'light' ? 'var(--coquelicot)': 'var(--fc-button-bg-color)')}}
                onClick={() => {
                  setOpen({
                    ...open,
                    breakfast: false,
                    lunch: false,
                    dinner: true,
                    snack: false
                  });
                }}
                className="filter"
              >
                <img src={Img4} alt="" />
                {language === 'ar' ? "العشاء" : "Dinner"}
              </li>
              <div className="filter-active"></div>
              <li
              style={{color: open.snack && '#fff' , background:open.snack &&  ( value === 'light' ? 'var(--coquelicot)': 'var(--fc-button-bg-color)')}}
                className="filter"
                onClick={() => {
                  setOpen({
                    ...open,
                    breakfast: false,
                    lunch: false,
                    dinner: false,
                    snack: true
                  });
                }}
              >
                <img src={Img1} alt="" />
                {language === 'ar' ? "سناك" : "snack"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
