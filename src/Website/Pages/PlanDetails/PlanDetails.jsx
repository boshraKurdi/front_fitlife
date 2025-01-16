import './PlanDetails.css'
import Exercises from '../../Components/PlanDetails/Exercises'
import Home from '../../Components/PlanDetails/Home'
import LastExercises from '../../Components/PlanDetails/LastExercises'
import Tips from '../../Components/PlanDetails/Tips'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActShow } from '../../../Redux/MyPlan/MyPlanSlice'
export default function PlanDetails(){
    const { id } = useParams();
    const [ type ] = useState({one:'weekly' , two:1})
    const { data } = useSelector((state) => state.mode)
     const dispatch = useDispatch()
        const { myplan , error , loading } = useSelector((state) => state.myPlan)
        useEffect(()=>{
          dispatch(ActShow({id:id , data:{one:'weekly' , two:data.week}})).unwrap().catch(()=>{console.log('error')})
        } , [dispatch , id , type , data])
    return(
        <>
        <Home data={data} myplan={myplan} loading={loading} error={error} />
        <Tips />
        <Exercises myplan={myplan} data={data} id={id} />
        <LastExercises />
        </>
    )
}