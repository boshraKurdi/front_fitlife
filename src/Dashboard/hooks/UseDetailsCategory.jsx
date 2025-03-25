import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActShow } from "../../Redux/Dashboard/Category/CategorySlice";
import { useParams } from "react-router-dom";
const UseDetailsCategory = () => {
  const { id } = useParams();
  const { category, loadingShow, error } = useSelector((state) => state.Dcategory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch, id]);
  return { category, loadingShow, error };
};
export default UseDetailsCategory;
