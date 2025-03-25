import { useSelector } from "react-redux";
import SkeletonLoading from "../Loading/SkeletonLoading/SkeletonLoading";
import Components from "../../Style/Components/Components";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Home({progress , error , loading}){
    const { MyComponentTitle } = Components()
    const { value , language } = useSelector((state) => state.mode);
    console.log(progress)
   
    return(
        <>
        <SkeletonLoading loading={loading} error={error} type="detailsGoal">
          <div className={`card top ${value}`}>
          <div className="product-imgs">
          <div style={{justifyContent:'center' , display:'flex'}} className="img-display">
                <div style={{width:'100%' , height:'400px'}} className="img-showcase">
                  <img style={{borderRadius:'50%' , width:'75%', minWidth:'400px' , objectFit:'contain'}} src={progress[0]?.myGoal && progress[0]?.myGoal.media[0]?.original_url} alt="shoe" />
              </div>
            </div>
          </div>
          <div className="product-content">
            <MyComponentTitle className="product-title">{language === 'ar' ? "تفاصيل هدفي" : "My Goal Details"}</MyComponentTitle>
            <a href="index" className="product-link">
              myGoal in fitlife
            </a>
    
            <div className="product-detail">
              <h1 style={{padding:'1rem 0'}}>{language === 'ar' ? "حول هذا الهدف" : "Goal this progress"}: </h1>
              <p>{progress[0]?.myGoal && (language === 'ar' ? progress[0].myGoal.description_ar : progress[0].myGoal.description)}</p>
              <ul>
                <li>
                  <CheckCircleIcon />
                  {progress[0]?.myGoal && (language === 'ar' ? "اسم الهدف" : "goal title")}: <span>{progress[0]?.myGoal && (language === 'ar' ? progress[0]?.myGoal?.title_ar : progress[0]?.myGoal.title)}</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  {language === 'ar' ? "حرق السعرات " : "calroies"}: <span>{progress[0]?.myGoal && (progress[0]?.myGoal?.calories_max )+ '..' + progress[0]?.myGoal?.calories_min}</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  {language === 'ar' ? "المدة" : "duration"}: <span>{progress[0]?.myGoal?.duration} {language === 'ar' ? "اسبوع" : "week"}</span>
                </li>
                <li>
                <div style={{width: '100%'}} className="card-progress">
                  <div className="progress-wrapper">
                    <p style={{color: value === 'dark' ? '#fff' : '#000'}} className="progress-label">{language === 'ar' ? "نسبة تقدمك في الهدف" : "Your progress on the goal"}</p>
    
                    <span style={{color: value === 'dark' ? '#fff' : '#000'}} className="progress-value">{`${progress[0]?.myGoal?.totalRate}%`}</span>
                  </div>
    
                  <div className="progress-bg">
                    <div
                      className="progress-bar"
                      style={{ width: `${progress[0]?.myGoal?.totalRate}%` }}
                    ></div>
                  </div>
                </div>
                </li>
              </ul>
              {/* {data.day ? <NavLink to={`dashboard/${data.week}/${data.day}`} className='btn_start'>{language === 'ar' ? "عرض التفاصيل" : "show details"} <KeyboardDoubleArrowRightIcon/></NavLink> : ''} */}
            </div>
          </div>
        
        </div>
        </SkeletonLoading>
        </>
    )

}