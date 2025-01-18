import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../Components/Food/Dashboard";
import Search from "../../Components/Food/Search";
import { ActIndex } from "../../../Redux/Meal/MealSlice";
import "./Food.css";
import { useEffect, useState } from "react";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
import LottieFiles from "../../Components/Loading/LottieLoading/LottieFiles";
import Water from "../../Components/Food/Water/Water";
export default function Food() {
  const { data } = useSelector((state) => state.mode)
  const [open, setOpen] = useState({
    breakfast: true,
    lunch: false,
    dinner: false,
    snack: false,
  });

  const { meals , id , loading, error , message } = useSelector((state) => state.meal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActIndex({time:open , data:data}));
  }, [dispatch, open , data]);
  return (
    <div style={{ marginTop: "8rem" }} className="main">
      <Search open={open} setOpen={setOpen} />
       {meals.length ? <>
          <SkeletonLoading loading={loading} error={error} type="meal">
            <Dashboard open={open} meals={meals} id={id} />
            <Water />
          </SkeletonLoading>
        </>:<LottieFiles
          type="goal"
          message={message}
        />}
    </div>
  );
}
