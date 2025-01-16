import { useDispatch, useSelector } from "react-redux";
import Home from "../../Components/DetailsFood/Home";
import Information from "../../Components/DetailsFood/Information";
import OtherFood from "../../Components/DetailsFood/OtherFood";
import './DetailsFood.css'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ActShow } from "../../../Redux/Meal/MealSlice";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
export default function DetailsFood() {
    const { value } = useSelector((state) => state.mode) 
    const { id } = useParams();
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(ActShow(id))
    } , [dispatch , id])
    const { meal , loadingShow , error} = useSelector((state) => state.meal);
  return (
     <SkeletonLoading loading={loadingShow} error={error} type="detailsGoal">
    <div className={`viewport ${value}`}>
      <div id="js-scroll-content">
        <Home meal={meal} />
        <Information meal={meal} />
        <OtherFood meal={meal} loading={loadingShow} error={error} />
      </div>
    </div>
    </SkeletonLoading>
  );
}
