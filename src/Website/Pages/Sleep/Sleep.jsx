import './Sleep.css'
import Home from "../../Components/Sleep/Home/Home";
import Input from "../../Components/Sleep/Input/Input";
import Step from '../../Components/Sleep/Step/Step';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ActGetSleep } from '../../../Redux/Plan/PlanSlice';
import SkeletonLoading from '../../Components/Loading/SkeletonLoading/SkeletonLoading';

export default function Sleep(){
    const { value } = useSelector((state) => state.mode)
    const dispatch = useDispatch()
    const { sleep , loading , error } = useSelector((state)=>state.plan)
    useEffect(()=>{
        dispatch(ActGetSleep()).unwrap().catch(()=>{})
    } , [dispatch])
    return(
        <main style={{minHeight:'100vh'}} className={`main sleep ${value}`}>
            <SkeletonLoading loading={loading} error={error} type="detailsGoal">
            <Home />
            <Step />
            <Input data={sleep} />
            </SkeletonLoading>
        </main>
    )
}