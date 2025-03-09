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

export default function Target() {
  const dispatch = useDispatch();
  const { progress, error, loading } = useSelector((state) => state.target);
  const { data , language } = useSelector((state) => state.mode);
  useEffect(() => {
    dispatch(ActProgress({ day: data.day, week: data.week }))
      .unwrap()
      .catch(() => {
        console.log("error");
      });
  }, [dispatch, data]);
  useEffect(() => {
    if (data.day === 0) {
      Swal.fire({
        title:"مدة الهدف الخاص بك قد انتهى هل تريد تمديد فترة الهدف ام تريد ان تبدا بهدف اخر ",
        showDenyButton: true,
        confirmButtonText: "تمديد الفترة",
        denyButtonText: `عدم التمديد`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          dispatch(ActAddDay()).unwrap.then().catch()
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  }, [data.day]);

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
