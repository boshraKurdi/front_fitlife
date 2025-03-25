import "../GoalDetails/GoalDetails.css";
import "../PlanDetails/PlanDetails.css";
import Boxs from "../../Components/Target/boxs";
import Home from "../../Components/Target/Home";
import Water from "../../Components/Target/Water/Water";
import Sleep from "../../Components/Target/Sleep/Sleep";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActAddDay, ActProgress } from "../../../Redux/Target/TargetSlice";
import Exercise from "../../Components/Target/Exercise/Exercise";
import LastExercises from "../../Components/Target/LastExercises/LastExercises";
import Meals from "../../Components/Target/Meals/Meals";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { SetHoliday } from "../../../Redux/Mode/ModeSlice";

export default function Target() {
  const dispatch = useDispatch();
  const { progress, error, loading } = useSelector((state) => state.target);
  const { data } = useSelector((state) => state.mode);
  const today = format(new Date(), "yyyy-MM-dd");
  const { user } = useSelector((state) => state.auth)
  console.log(user)
  useEffect(() => {
    dispatch(ActProgress({ day: data.day, week: data.week }))
      .unwrap()
      .catch(() => {
        console.log("error");
      });
     
  }, [dispatch, data]);
  useEffect(()=>{
    progress[0] && progress[0]?.date?.map((e) => {
      if (format(e.date, "yyyy-MM-dd") === today) {
        if (e.is_holiday) {
          dispatch(SetHoliday(1));
        }else{
          dispatch(SetHoliday(0));
        }
      }
    });
  } , [dispatch , progress])
  // useEffect(() => {
  //   if (data.day === 0) {
  //     Swal.fire({
  //       title:"مدة الهدف الخاص بك قد انتهى هل تريد تمديد فترة الهدف ام تريد ان تبدا بهدف اخر ",
  //       showDenyButton: true,
  //       confirmButtonText: "تمديد الفترة",
  //       denyButtonText: `عدم التمديد`,
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         Swal.fire("Saved!", "", "success");
  //         dispatch(ActAddDay()).unwrap.then().catch()
  //       } else if (result.isDenied) {
  //         Swal.fire("Changes are not saved", "", "info");
  //       }
  //     });
  //   }
  // }, [data.day]);

  return (
    <>
    
        <div>
          <Home progress={progress} error={error} loading={loading} />
          <Boxs />
          <Water progress={progress} error={error} loading={loading} />
          <Sleep progress={progress} error={error} loading={loading} />
          <Exercise progress={progress} error={error} loading={loading} />
          <LastExercises progress={progress} error={error} loading={loading} />
          <Meals progress={progress} error={error} loading={loading} />
         
        </div>
      
    </>
  );
}
