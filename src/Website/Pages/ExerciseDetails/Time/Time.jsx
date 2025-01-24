import { useDispatch, useSelector } from "react-redux"
import Heading from "../../../Components/Heading/Heading";
import { useEffect, useState } from "react";
import SwiperComponent from "../../../Components/Swiper/SwiperComponent";
import {ActStoreE, ResetMessages} from "../../../../Redux/Target/TargetSlice";
import { useSnackbar } from 'notistack';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
export default function Time({calories , plan_id , id}){
  const dispatch = useDispatch();
  const nav = useNavigate();
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
       useEffect(() => {
              if (message) {
                enqueueSnackbar(`${message}`, { variant: `${type}` });
                dispatch(ResetMessages()); 
              }
            }, [message, type, dispatch, enqueueSnackbar]);
    const newData = data.map((d)=>{
        return(
          <>
            <div style={{width:'275px'}} className={`e_service__card ${value}`}>
            <h4>{d.title}</h4>
            <p>
            {d.calories} burns calories
            </p>
            <span onClick={()=>(
                 Swal.fire({
                        title: "Are You Ready?!",
                        text: "You won't be able to revert this!",
                        icon: "question",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "I ready"
                      }).then((result) => {
                        if (result.isConfirmed) {
                          nav('workout')
                      }
                      })
            )} style={{borderRadius:'8px'}}>
             start now
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