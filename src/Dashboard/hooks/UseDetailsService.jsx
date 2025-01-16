import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActShow } from "../../Redux/Dashboard/Service/ServiceSlice";
import { useParams } from "react-router-dom";
const UseDetailsService = () => {
  const { id } = useParams();
  const { service, loadingShow, error } = useSelector((state) => state.Dservice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch, id]);
  return { service, loadingShow, error };
};
export default UseDetailsService;
