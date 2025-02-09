import { useDispatch, useSelector } from 'react-redux'
import SkeletonLoading from '../Loading/SkeletonLoading/SkeletonLoading'
import './Exercise.css'
import SwiperComponent from '../Swiper/SwiperComponent'
import { useEffect } from 'react'
import { ActExerciseIndex } from '../../../Redux/Plan/PlanSlice'
import Content from './Content/Content'
export default function Exercise({id , day , week}){
    const { exercises , loading , error } = useSelector((state) => state.plan)
    const { language } = useSelector((state) => state.mode)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(ActExerciseIndex({id:id , day:day , week:week})).unwrap().catch(()=>{})
    } ,[dispatch , id , day , week])
    const newData = exercises && exercises[0].exercise.map((data)=>{
        return(
            <Content key={data.id} data={data} />
        )
    })
    return(
        <>
        {
        //   <SkeletonLoading loading={loading} error={error} type="plan">
        <>
            {exercises?.length > 0 && (
              <section className=" " id="blog" aria-label="blog">
                <div className="container" style={{ position: "relative" }}>
                <h2 style={{textAlign:'start' , margin:'2rem 0' , fontSize:'3rem'}}>{language === 'ar' ? "تمارين" : "Exercises"}</h2>
                  <ul className="class-list has-scrollbar">
                    <SwiperComponent data={newData} />
                  </ul>
                </div>
              </section>
            )}
            </>
        }
      </>
    )
}