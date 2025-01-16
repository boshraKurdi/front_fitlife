import { useSelector } from "react-redux";
import Img1 from "../../../img/menu-1.png";
import Img2 from "../../../img/menu-2.png";
import Img3 from "../../../img/menu-3.png";
import Img4 from "../../../img/menu-4.png";
export default function Search({ open, setOpen }) {
  const { value } = useSelector((state) => state.mode);
  return (
    <div class="menu-tab-wp">
      <div class="row-a">
        <div class="col-lg-12 m-auto">
          <div class={`menu-tab ${value}  text-center`}>
            <ul class="filters">
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
                Breakfast
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
                Lunch
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
                Dinner
              </li>
              <div class="filter-active"></div>
              <li
              style={{color: open.snack && '#fff' , background:open.snack &&  ( value === 'light' ? 'var(--coquelicot)': 'var(--fc-button-bg-color)')}}
                class="filter"
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
                snack
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
