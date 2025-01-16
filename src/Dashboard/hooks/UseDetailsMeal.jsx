import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActShow } from "../../Redux/Dashboard/Meal/MealSlice";
import { useParams } from "react-router-dom";
const UseDetailsMeal = () => {
  const { id } = useParams();
  const { meal, loadingShow, error } = useSelector((state) => state.Dmeal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch, id]);
  return { meal, loadingShow, error };
};
export default UseDetailsMeal;
