import { useDispatch, useSelector } from "react-redux";
import "./Stepper.css";
import { format } from "date-fns";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect } from "react";
import { SetData, SetHoliday } from "../../../../Redux/Mode/ModeSlice";
const Stepper = ({ indexOfToday, myplan }) => {
  const { value, language, data, is_holiday } = useSelector(
    (state) => state.mode
  );
  const dispatch = useDispatch();
  const today = format(new Date(), "yyyy-MM-dd");

  useEffect(() => {
    let weekNumber = null;
    let dayNumber = null;
    let weekn = null;

    if (indexOfToday !== -1) {
      weekn = Math.floor(indexOfToday / 7)
      weekNumber = Math.floor(weekn % myplan?.duration) + 1;
      dayNumber = (indexOfToday % 7) + 1;
      dispatch(SetData({ ...data, day: dayNumber, week: weekNumber }));
    }else{
      dispatch(SetData({ ...data, day: -1, week: -1 }));
    }
    myplan?.date?.map((e) => {
      if (format(e.date, "yyyy-MM-dd") === today) {
        if (e.is_holiday) {
          dispatch(SetHoliday(1));
        }else{
          dispatch(SetHoliday(0));
        }
      }
    });
  }, [indexOfToday, dispatch , myplan]);

  return (
    <div className="timeline">
      {is_holiday ?
      <div className="timeline_container right_container">
        
        <span
          style={{ right: language === "ar" && "10px" }}
          className={`num_img ${value}`}
        >
          🥳
        </span>
        <div className={`text_body ${value}`}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <h2>{language == "ar" ? "عطلة سعيدة" : "Happy Holidays"}🥳</h2>
            <p className="happy">
              {language == "ar"
                ? "يوجد عدة تمارين بسيطة اتمنى ان تستمتع بها في عطلتك تساعدك هذه التمارين على الهدوء والراحة وعدم الشعور بالملل اتمنى لك عطلة سعيدة"
                : "There are several simple exercises that I hope you enjoy during your vacation. These exercises will help you to calm down, relax, and not feel bored. I wish you a happy vacation."}
            </p>
          </div>
        </div>
        </div>
        :""}
        <div className="timeline_container right_container">
       
        <span
          style={{ right: language === "ar" && "10px" }}
          className={`num_img ${value}`}
        >
          1
        </span>
        <div className={`text_body ${value}`}>
          {
             Array(7)
             .fill(0)
             .map((_, index) => {
               return (
                <>
                <button
                  className={
                    indexOfToday === index ? `cycle_number active` : "cycle_number"
                  }
                >
                  {(is_holiday && indexOfToday === index) ? language === 'ar' ? "عطلة" : 'holiday' : index+1}
                </button>
                <span className="ar">
                  <ChevronRightIcon style={{ color: "#ccc" }} />
                </span>
               
              </>
               )
          })
        }
         
        </div>
      </div>
   
        <div className="timeline_container right_container">
          <span
            style={{ right: language === "ar" && "10px" }}
            className={`num_img ${value}`}
          >
            2
          </span>
          <div className={`text_body ${value}`}>
          {
             Array(7)
             .fill(0)
             .map((_, index) => {
               return (
                <>
                <button
                  className={
                    indexOfToday === index+7 ? `cycle_number active` : "cycle_number"
                  }
                >
                    {(is_holiday && indexOfToday === index+7) ? language === 'ar' ? "عطلة" : 'holiday' : index+1}
                </button>
                <span className="ar">
                  <ChevronRightIcon style={{ color: "#ccc" }} />
                </span>
               
              </>
               )
          })
        }
          </div>
        </div>
      
    </div>
  );
};
export default Stepper;
