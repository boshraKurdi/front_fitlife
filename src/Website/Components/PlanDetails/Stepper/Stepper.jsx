import { useDispatch, useSelector } from "react-redux";
import "./Stepper.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { memo, useEffect } from "react";
import {SetData} from '../../../../Redux/Mode/ModeSlice'
const Stepper = memo(({ indexOfToday }) => {
  const { value } = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  useEffect(() => {
    switch (indexOfToday) {
      case 0:
        dispatch(SetData({day: 1, week: 1 }));
        break;
      case 1:
        dispatch(SetData({day: 2, week: 1 }));
        break;
      case 2:
        dispatch(SetData({day: 3, week: 1 }));
        break;
      case 3:
        dispatch(SetData({day: 4, week: 1 }));
        break;
      case 4:
        dispatch(SetData({day: 5, week: 1 }));
        break;
      case 5:
        dispatch(SetData({day: 6, week: 1 }));
        break;
      case 6:
        dispatch(SetData({day: 7, week: 1 }));
        break;
      case 7:
        dispatch(SetData({day: 1, week: 2 }));
        break;
      case 8:
        dispatch(SetData({day: 2, week: 2 }));
        break;
      case 9:
        dispatch(SetData({day: 3, week: 2 }));
        break;
      case 10:
        dispatch(SetData({day: 4, week: 2 }));
        break;
      case 11:
        dispatch(SetData({day: 5, week: 2 }));
        break;
      case 12:
        dispatch(SetData({day: 6, week: 2 }));
        break;
      case 13:
        dispatch(SetData({day: 7, week: 2 }));
        break;
      default:
        dispatch(SetData({day: 1, week: 1 }));
    }
  }, [indexOfToday , dispatch]);

  return (
    <div className="timeline">
      <div className="timeline_container right_container">
        <span className={`num_img ${value}`}>1</span>
        <div className={`text_body ${value}`}>
          <button
            className={
              indexOfToday === 0 ? `cycle_number active` : "cycle_number"
            }
          >
            1
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 1 ? `cycle_number active` : "cycle_number"
            }
          >
            2
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 2 ? `cycle_number active` : "cycle_number"
            }
          >
            3
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 3 ? `cycle_number active` : "cycle_number"
            }
          >
            4
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 4 ? `cycle_number active` : "cycle_number"
            }
          >
            5
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 5 ? `cycle_number active` : "cycle_number"
            }
          >
            6
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 6 ? `cycle_number active` : "cycle_number"
            }
          >
            7
          </button>
        </div>
      </div>
      <div className="timeline_container right_container">
        <span className={`num_img ${value}`}>2</span>
        <div className={`text_body ${value}`}>
          <button
            className={
              indexOfToday === 7 ? `cycle_number active` : "cycle_number"
            }
          >
            1
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 8 ? `cycle_number active` : "cycle_number"
            }
          >
            2
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 9 ? `cycle_number active` : "cycle_number"
            }
          >
            3
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 10 ? `cycle_number active` : "cycle_number"
            }
          >
            4
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 11 ? `cycle_number active` : "cycle_number"
            }
          >
            5
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 12 ? `cycle_number active` : "cycle_number"
            }
          >
            6
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 13 ? `cycle_number active` : "cycle_number"
            }
          >
            7
          </button>
        </div>
      </div>
    </div>
  );
});
export default Stepper;
