import '../GoalDetails/GoalDetails.css'
import { useDispatch, useSelector } from "react-redux";
import Components from "../../Style/Components/Components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GetMap from "../../Components/GetMap/GetMap";
import { ActShow } from "../../../Redux/Gym/GymSlice";
import '../PlanDetails/PlanDetails.css'
import Content from './Content/Content';
import SwiperComponent from '../../Components/Swiper/SwiperComponent';
export default function GymDetails() {
  const { MyComponentTitle } = Components();
  const dispatch = useDispatch();
  const { gym , error, loading } = useSelector((state) => state.gym);
  const { id } = useParams();
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch, id]);
  const newData = gym?.section && gym.section?.map((data)=>{
    return(
      <Content key={data.id} data={data} />
    )
  }) 
  return (
    <SkeletonLoading loading={loading} error={error} type="detailsGoal">
      <div className="card top">
        <div className="product-imgs">
          <div style={{justifyContent:'center' , display:'flex'}} className="img-display">
            <div style={{width:'100%' , height:'400px'}} className="img-showcase">
              <img style={{borderRadius:'8px' , width:'75%', minWidth:'400px'}} src={gym.media && gym.media[0].original_url} alt="shoe" />
            </div>
          </div>
        </div>
        <div className="product-content">
          <MyComponentTitle className="product-title">
            Gym Details
          </MyComponentTitle>
          <a href="index" className="product-link">
            gym with fitlife
          </a>

          <div className="product-detail">
            <h1 style={{ padding: "1rem 0" }}>about this gym: </h1>
            <p>{gym.description}</p>
            <ul>
              <li>
                <CheckCircleIcon />
                gym: <span>{gym.name}</span>
              </li>
              <li>
                <CheckCircleIcon />
                distance: <span>{gym.distance+'km'}</span>
              </li>
              <li>
                <CheckCircleIcon />
                price: <span>{gym.price}</span>
              </li>
              <li>
                <CheckCircleIcon />
                address: <span>{gym.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="section__container service__container" id="service">
      <div className="service__header">
        <div className="service__header__content">
          <h2 className="section__header">Gym Address</h2>
          <p>
          Gym coordinates on the map. You can zoom in and out of the map to determine nearby places on it.
          </p>
        </div>
      </div>
      <GetMap data={gym && gym} />
    </section>
    <section className="section__container service__container" id="service">
      <div className="service__header">
        <div className="service__header__content">
          <h2 className="section__header">Gym Section</h2>
          <p>
          Sports sections available in this club
          </p>
        </div>
      </div>
      <div style={{display:'flex' , alignItems:'center' , justifyContent:'center'}} className="doctors__grid">
      <SwiperComponent data={newData} />
      </div>
      
    </section>
    </SkeletonLoading>
  );
}
