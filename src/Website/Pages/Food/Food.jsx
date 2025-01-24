import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../Components/Food/Dashboard";
import Search from "../../Components/Food/Search";
import { ActIndex } from "../../../Redux/Meal/MealSlice";
import "./Food.css";
import { useEffect, useState } from "react";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
import LottieFiles from "../../Components/Loading/LottieLoading/LottieFiles";
import Water from "../../Components/Food/Water/Water";
import { format } from "date-fns";
import { SetDataMeal } from "../../../Redux/Mode/ModeSlice";
export default function Food() {
  const { data_meal } = useSelector((state) => state.mode);
  const [open, setOpen] = useState({
    breakfast: true,
    lunch: false,
    dinner: false,
    snack: false,
  });
  const today = format(new Date(), "yyyy-MM-dd");
  const { meals, id, loading, error, message } = useSelector(
    (state) => state.meal
  );
  const indexOfToday =
    meals &&
    meals.date?.findIndex(
      (date) => format(date.date_meal, "yyyy-MM-dd") === today
    );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActIndex({ time: open, data: data_meal }));
  }, [dispatch, open, data_meal]);
  useEffect(() => {
    switch (indexOfToday) {
      case 0:
        dispatch(SetDataMeal({ day: 1, week: 1 }));
        break;
      case 1:
        dispatch(SetDataMeal({ day: 2, week: 1 }));
        break;
      case 2:
        dispatch(SetDataMeal({ day: 3, week: 1 }));
        break;
      case 3:
        dispatch(SetDataMeal({ day: 4, week: 1 }));
        break;
      case 4:
        dispatch(SetDataMeal({ day: 5, week: 1 }));
        break;
      case 5:
        dispatch(SetDataMeal({ day: 6, week: 1 }));
        break;
      case 6:
        dispatch(SetDataMeal({ day: 7, week: 1 }));
        break;
      case 7:
        dispatch(SetDataMeal({ day: 1, week: 2 }));
        break;
      case 8:
        dispatch(SetDataMeal({ day: 2, week: 2 }));
        break;
      case 9:
        dispatch(SetDataMeal({ day: 3, week: 2 }));
        break;
      case 10:
        dispatch(SetDataMeal({ day: 4, week: 2 }));
        break;
      case 11:
        dispatch(SetDataMeal({ day: 5, week: 2 }));
        break;
      case 12:
        dispatch(SetDataMeal({ day: 6, week: 2 }));
        break;
      case 13:
        dispatch(SetDataMeal({ day: 7, week: 2 }));
        break;
      default:
        dispatch(SetDataMeal({ day: 0, week: 0 }));
    }
  }, [indexOfToday, dispatch]);
  console.log(meals)
  return (
    <div style={{ marginTop: "8rem" }} className="main">
      <Search open={open} setOpen={setOpen} />
      {meals?.data?.length ? (
        <>
          <SkeletonLoading loading={loading} error={error} type="meal">
            <Dashboard open={open} meals={meals?.data} id={id} />
            <Water />
          </SkeletonLoading>
        </>
      ) : (
        <LottieFiles type="goal" message={message} />
      )}
    </div>
  );
}
