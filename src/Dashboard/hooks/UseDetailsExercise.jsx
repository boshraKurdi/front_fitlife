import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActShow } from "../../Redux/Dashboard/Exercise/ExerciseSlice";
import { useParams } from "react-router-dom";
const UseDetailsExercise = () => {
  const { id } = useParams();
  const { exercise, loadingShow, error } = useSelector((state) => state.Dexercise);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch, id]);
  return { exercise, loadingShow, error };
};
export default UseDetailsExercise;
