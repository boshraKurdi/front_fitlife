import '../../Pages/GoalDetails/GoalDetails.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Components from "../../Style/Components/Components";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SkeletonLoading from "../Loading/SkeletonLoading/SkeletonLoading";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Home = ({ myplan , loading , error , data }) => {
    const { MyComponentTitle } = Components()
    const { value , language } = useSelector((state) => state.mode);
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
        <MyComponentTitle className="product-title">{language === 'ar' ? "تفاصيل الخطة" : "myPlan Details"}</MyComponentTitle>
        <a href="index" className="product-link">
          myPlans in fitlife
        </a>

        <div className="product-detail">
          <h1 style={{padding:'1rem 0'}}>{language === 'ar' ? "حول هذه الخطة" : "about this myPlan"}: </h1>
          <p>{myplan?.plan && (language === 'ar' ? myplan.plan.description_ar : myplan.plan.description)}</p>
          <ul>
            <li>
              <CheckCircleIcon />
              {language === 'ar' ? "الخطة" : "myplan"}: <span>{language === 'ar' ? myplan?.title_ar : myplan?.title}</span>
            </li>
            <li>
              <CheckCircleIcon />
              {language === 'ar' ? "العضلة المستهدفة" : "muscle"}: <span>{language === 'ar' ? myplan.muscle_ar : myplan.muscle}</span>
            </li>
            <li>
              <CheckCircleIcon />
              {language === 'ar' ? "المدة" : "duration"}: <span>{myplan?.duration} {language === 'ar' ? "اسبوع" : "week"}</span>
            </li>
            <li>
            <div style={{width: '100%'}} className="card-progress">
              <div className="progress-wrapper">
                <p style={{color: value === 'dark' ? '#fff' : '#000'}} className="progress-label">{language === 'ar' ? "نسبة تقدمك في الخطة" : "Your progress on the plan"}</p>

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
          {data.day ? <NavLink to={`dashboard/${data.week}/${data.day}`} className='btn_start'>{language === 'ar' ? "عرض التفاصيل" : "show details"} <KeyboardDoubleArrowRightIcon/></NavLink> : ''}
        </div>
      </div>
    </div>
    </SkeletonLoading>
    </>
  );
};
export default Home;
