import { useDispatch, useSelector } from "react-redux"
import Heading from "../../../Components/Heading/Heading";
import { useState } from "react";
import SwiperComponent from "../../../Components/Swiper/SwiperComponent";
import {ActStoreE} from "../../../../Redux/Target/TargetSlice";
import { useSnackbar } from 'notistack';

export default function Time({calories , plan_id , id}){
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
    const { value } = useSelector((state) => state.mode);
    const { loadingE , message , type  } = useSelector((state) => state.target);
    const [ data ] = useState([
        {title: '1 time' , calories:calories} ,
        {title: '2 time' , calories:2*calories} ,
        {title: '3 time' , calories:3*calories} ,
        {title: '4 time' , calories:4*calories} ,
        {title: '5 time' , calories:5*calories} ,
        {title: '6 time' , calories:6*calories} ,
        {title: '7 time' , calories:7*calories} ,
        {title: '8 time' , calories:8*calories} ,
        {title: '9 time' , calories:9*calories} ,
        {title: '10 time' , calories:10*calories} ,
    ]) 
    const newData = data.map((d)=>{
        return(
          <>
            <div style={{width:'275px'}} className={`e_service__card ${value}`}>
            <h4>{d.title}</h4>
            <p>
            {d.calories} burns calories
            </p>
            <span onClick={()=>(
                dispatch(ActStoreE({calories:d.calories , id:plan_id , check:id}))
                .unwrap()
                      .then(()=>{
                        enqueueSnackbar(`${message}`, { variant: `${type}`});
                      })
                      .catch(()=>{
                        enqueueSnackbar(`${message}`, { variant: `${type}`});
                      })
            )} style={{borderRadius:'8px'}}>
              {loadingE === 'pending' ? 'loading..'  : 'save'}
            </span>
          </div>
          </>
        )
    })
   
    return(
        <section className="section__container e_service__container" id="e_service">
            <Heading title={'custome repetitions'} subTitle={'custome repetitions for exercise'} />
        <div style={{display:'flex'}} className="e_service__grid">
        <SwiperComponent data={newData} />
          
        </div>
      </section>
    )
}