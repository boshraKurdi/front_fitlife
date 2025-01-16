import '../../Pages/GoalDetails/GoalDetails.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Components from "../../Style/Components/Components";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SkeletonLoading from "../Loading/SkeletonLoading/SkeletonLoading";
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const Home = ({ myplan , loading , error , data }) => {
    const { MyComponentTitle } = Components()
    const { value } = useSelector((state) => state.mode);
  return (
    <>
    <SkeletonLoading loading={loading} error={error} type="detailsGoal">
      <div className={`card top ${value}`}>
      <div className="product-imgs">
      <div style={{justifyContent:'center' , display:'flex'}} className="img-display">
            <div style={{width:'100%' , height:'400px'}} className="img-showcase">
              <img style={{borderRadius:'50%' , width:'75%', minWidth:'400px' , objectFit:'contain'}} src={myplan?.media && myplan.media[0]?.original_url} alt="shoe" />
          </div>
        </div>
      </div>
      <div className="product-content">
        <MyComponentTitle className="product-title">myPlan Details</MyComponentTitle>
        <a href="index" className="product-link">
          myPlans in fitlife
        </a>

        <div className="product-detail">
          <h1 style={{padding:'1rem 0'}}>about this myPlan: </h1>
          <p>{myplan?.plan && myplan.plan.description}</p>
          <ul>
            <li>
              <CheckCircleIcon />
              myplan: <span>{myplan?.title}</span>
            </li>
            <li>
              <CheckCircleIcon />
              muscle: <span>{myplan.muscle}</span>
            </li>
            <li>
              <CheckCircleIcon />
              duration: <span>{myplan?.duration}</span>
            </li>
            <li>
            <div style={{width: '100%'}} className="card-progress">
              <div className="progress-wrapper">
                <p style={{color: value === 'dark' ? '#fff' : '#000'}} className="progress-label">Class Full</p>

                <span style={{color: value === 'dark' ? '#fff' : '#000'}} className="progress-value">{(myplan?.totalRate ? myplan?.totalRate : 0)+'%'}</span>
              </div>

              <div className="progress-bg">
                <div
                  className="progress-bar"
                  style={{ width: `${(myplan?.totalRate ? myplan?.totalRate : 0)}%` }}
                ></div>
              </div>
            </div>
            </li>
          </ul>
          <NavLink to={'dashboard/1'} className='btn_start'>show details <KeyboardDoubleArrowRightIcon/></NavLink>
        </div>
      </div>
    </div>
    </SkeletonLoading>
    </>
  );
};
export default Home;
