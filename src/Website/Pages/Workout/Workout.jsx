import './Workout.css'
import { Goal_1 } from "../../index";
import Heading from '../../Components/Heading/Heading'
import Lottie from 'lottie-react';
import Work1 from '../../../lottiefiles/workout1.json'
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ActShow } from '../../../Redux/Exercise/ExerciseSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { ActStoreE, ResetMessages } from '../../../Redux/Target/TargetSlice';
export default function Workout(){
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();
    const { id , plan_id  } = useParams()
    const { loadingShow , error , exercise } = useSelector((state) => state.exercise);
    const { loadingE , message , type  } = useSelector((state) => state.target);
    const { language , data   } = useSelector((state) => state.mode)
    const [seconds, setSeconds] = useState(exercise?.duration);
  useEffect(()=>{
    dispatch(ActShow(id))
  } , [dispatch , id])
  const [isActive, setIsActive] = useState(true);
  const nav = useNavigate();
   useEffect(() => {
              if (message) {
                enqueueSnackbar(`${message}`, { variant: `${type}` });
                dispatch(ResetMessages()); 
              }
            }, [message, type, dispatch, enqueueSnackbar]);
  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
    Swal.fire({
        title: "Good Work!",
        text: "You won't be able to revert this!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "go to page"
      }).then((result) => {
        if (result.isConfirmed) {
          data.day ? dispatch(ActStoreE({calories:exercise?.calories , id:plan_id , check:id}))
            .unwrap()
                  .then(()=>{
                    nav(`/exerciseDetails/${id}/${plan_id}`)
                  })
                  .catch(()=>{
                    nav(`/exerciseDetails/${id}/${plan_id}`)
                  })
                  :
            nav(`/exerciseDetails/${id}/${plan_id}`)
      }
      });
      setIsActive(false); 
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);



    return(
        <section
        className="section top has-bg-image"
        id="class"
        aria-label="class"
        style={{ backgroundImage: `url(${Goal_1})` }}
      >
        <div className="container" style={{ position: "relative" }}>
          <Heading title="Workout" subTitle=''/>
          <div className='workout_container'>
          <Lottie style={{width:'400px' ,marginRight:'auto'}} className='home__img' animationData={Work1} />
          <div style={{margin:"0 1rem"}} className='wrokout_info'>
            <h2>{language === 'en' ? exercise?.title :  exercise?.title_ar}</h2>
            <p>{language === 'en' ? exercise?.description : exercise?.description_ar}</p>
            <div className='ws'>
            <span>{seconds} s</span>
            <span className={isActive && 'active'}  onClick={()=>{
                setIsActive((prev) => !prev)
            }}>{isActive ? <PlayArrowIcon/> : <PauseIcon/>}</span>
            </div>
          </div>
          </div>
        </div>
      </section>
    )
}