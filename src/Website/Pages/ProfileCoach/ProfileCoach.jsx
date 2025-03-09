import "./ProfileCoach.css";
import { useDispatch, useSelector } from "react-redux";
import { ActStore } from "../../../Redux/Chat/ChatSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ActShow } from "../../../Redux/User/UserSlice";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
export default function ProfileCoach() {
    const { value , language } = useSelector((state) => state.mode) 
    const { user , loading , error } = useSelector((state) => state.user)
    const { id } = useParams()
    const dispatch = useDispatch();
    console.log(error , loading)
    function HandelChat(){
      dispatch(ActStore(id))
    }
    useEffect(()=>{
      dispatch(ActShow(id))
    } ,[dispatch , id])
  return (
    <SkeletonLoading loading={loading} error={error} type="detailsGoal">
    <div className="about_section">
      <div className="about_coach">
       
        <div className="about_text">
          <h1>{language === 'en' ? "About" : 'حول'} {user?.name}</h1>
          <p className="p_profile_coach">
            {user?.description}
          </p>
          <div className="skill">
        <div className={`bar ${value}`}>
          <div className="text">
            <p>{language === 'en' ? "Performance Analysis" : "تحليل الاداء"}</p>
            <p>{user.analysis}%</p>
          </div>
          <div className="progress">
            <span style={{width:user? user.analysis+'%' : '0%'}} className="ui"></span>
          </div>
        </div>
        <div className={`bar ${value}`}>
          <div className="text">
            <p>{language === 'en' ? "Communication and relationship" : "التواصل والعلاقات الاجتماعية"}</p>
            <p>{user?.communication}%</p>
          </div>
          <div className="progress">
            <span style={{width:user? user.communication+'%' : '0%'}} className="marketing"></span>
          </div>
        </div>
        <div className={`bar ${value}`}>
          <div className="text">
            <p>{language === 'en' ? "Education and guidance" : "التعليم والتوجيه"}</p>
            <p>{user?.education}%</p>
          </div>
          <div className="progress">
            <span style={{width:user? user.education+'%': '0px'}} className="web"></span>
          </div>
        </div>
        <div className={`bar ${value}`}>
          <div className="text">
            <p>{language === 'en' ? "Professional Development" : "التطوير المهني"}</p>
            <p>{user.development}%</p>
          </div>
          <div className="progress">
            <span style={{width:user? user.development+'%' : '0%'}} className="seo"></span>
          </div>
        </div>
      </div>
          <div className="buttons">
            <button onClick={HandelChat} className="hire_me">
              {language === 'en' ? "start chat" : "ابدا المحادثة"}
            </button>
          </div>
        </div>
        <img src={user.media && user.media[0].original_url} alt="none" className="about_img" />
        
      </div>

    
    </div>
    </SkeletonLoading>
  );
}
