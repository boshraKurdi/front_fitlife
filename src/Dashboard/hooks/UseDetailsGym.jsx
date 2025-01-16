import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActShow } from "../../Redux/Dashboard/Gym/GymSlice";
import { useParams } from "react-router-dom";
const UseDetalisGym = () => {
  const { id } = useParams();
  const { gym, loadingShow, error } = useSelector((state) => state.Dgym);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch, id]);
  return { gym, loadingShow, error };
};
export default UseDetalisGym;
