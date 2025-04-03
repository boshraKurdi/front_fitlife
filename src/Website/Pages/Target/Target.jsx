import "../GoalDetails/GoalDetails.css";
import "../PlanDetails/PlanDetails.css";
import Boxs from "../../Components/Target/boxs";
import Home from "../../Components/Target/Home";
import Water from "../../Components/Target/Water/Water";
import Sleep from "../../Components/Target/Sleep/Sleep";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  ActAddDay,
  ActNotAddDay,
  ActProgress,
} from "../../../Redux/Target/TargetSlice";
import Exercise from "../../Components/Target/Exercise/Exercise";
import LastExercises from "../../Components/Target/LastExercises/LastExercises";
import Meals from "../../Components/Target/Meals/Meals";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { SetData, SetHoliday } from "../../../Redux/Mode/ModeSlice";
import { useNavigate } from "react-router-dom";
import LottieFiles from "../../Components/Loading/LottieLoading/LottieFiles";

export default function Target() {
  const dispatch = useDispatch();
  const { progress, error, loading, message } = useSelector(
    (state) => state.target
  );
  const nav = useNavigate();
  const { data } = useSelector((state) => state.mode);
  const today = format(new Date(), "yyyy-MM-dd");
  useEffect(() => {
    dispatch(ActProgress())
      .unwrap()
      .catch(() => {
        console.log("error");
      });
  }, [dispatch, data]);
  useEffect(() => {
    const indexOfToday =
      progress[0]?.date &&
      progress[0]?.date?.findIndex(
        (date) => format(date.date, "yyyy-MM-dd") === today
      );
    let weekNumber = null;
    let dayNumber = null;
    let weekn = null;

    if (indexOfToday !== -1) {
      weekn = Math.floor(indexOfToday / 7);
      weekNumber = Math.floor(weekn % progress[0]?.duration) + 1;
      dayNumber = (indexOfToday % 7) + 1;
      dispatch(SetData({ ...data, day: dayNumber, week: weekNumber }));
    } else {
      dispatch(SetData({ ...data, day: -1, week: -1 }));
    }
    progress &&
      progress[0]?.date?.map((e) => {
        if (format(e.date, "yyyy-MM-dd") === today) {
          if (e.is_holiday) {
            dispatch(SetHoliday(1));
          } else {
            dispatch(SetHoliday(0));
          }
        }
      });
  }, [dispatch, progress]);
  useEffect(() => {
    if (progress[0]?.status?.day === -1) {
      Swal.fire({
        title:
          "مدة الهدف الخاص بك قد انتهى هل تريد تمديد فترة الهدف ام تريد ان تبدا بهدف اخر ",
        showDenyButton: true,
        confirmButtonText: "تمديد الفترة",
        denyButtonText: `عدم التمديد`,
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(ActAddDay()).unwrap().then(()=>{
              }).catch(()=>{
              })
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          dispatch(ActNotAddDay()).unwrap().then(()=>{
            nav('/' , {replace: true})
         
            }).catch(()=>{
             
            })
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  }, [data.day]);

  return (
    <>
      <div>
        {message != "" ? (
           <div className={`card top`}>
          <LottieFiles type="goal" message={message} />
          </div>
        ) : (
          <>
            <Home progress={progress} error={error} loading={loading} />
            <Boxs />
            <Water progress={progress} error={error} loading={loading} />
            <Sleep progress={progress} error={error} loading={loading} />
            <Exercise progress={progress} error={error} loading={loading} />
            <LastExercises
              progress={progress}
              error={error}
              loading={loading}
            />
            <Meals progress={progress} error={error} loading={loading} />
          </>
        )}
      </div>
    </>
  );
}
