import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActShow } from "../../Redux/Dashboard/Goal/GoalSlice";
import { useParams } from "react-router-dom";
const UseDetalisGoal = () => {
  const { id } = useParams();
  const { goal, loadingShow, error } = useSelector((state) => state.Dgoal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch, id]);
  return { goal, loadingShow, error };
};
export default UseDetalisGoal;
