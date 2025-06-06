import { useSelector } from "react-redux";
import NotificationsPausedIcon from "@mui/icons-material/NotificationsPaused";
import Lottie from "lottie-react";
import SleepL from '../../../../lottiefiles/sleep2.json'
import "../Water/Water.css";
import Alarm from "../../../../lottiefiles/alarm.json";
import SkeletonLoading from "../../Loading/SkeletonLoading/SkeletonLoading";

export default function Exercise({ progress, error, loading }) {
  const { language , data , is_holiday} = useSelector((state) => state.mode);
  return (
    <SkeletonLoading loading={loading} error={error} type="detailsGoal">
      <section
        className="section__container e_service__container"
        id="e_service"
      >
        <div className="e_service__header">
          <div className="e_service__header__content">
            <h2 className="section__header">
              {language === "ar"
                ? "تتبع إنجازاتي في التمارين"
                : "Tracking My Workout Milestones"}
            </h2>
            <p>
              {language === "ar"
                ? "رحلتي نحو اللياقة: تتبع إنجازاتي في التمارين💪🏻🔥"
                : "My Fitness Journey: Tracking My Workout Milestones💪🏻🔥"}
            </p>
          </div>
        </div>
        {
          !is_holiday ?
          progress[0]?.myGoal?.exercise ?
        <div className="water_target">
          <div className="img">
            <Lottie className="home__img" animationData={Alarm} />
          </div>
          <div className="info">
            <h2>
              {language === "en"
                ? `🔥 I did ${progress[0]?.myGoal?.exercise} exercises today great job`
                : `🔥 أنجزت ${progress[0]?.myGoal?.exercise} تمارين اليوم عمل رائع`}
            </h2>
            <p>
              {language === "en"
                ? "Thank you for your amazing effort today! Your accomplishment is a testament to your determination and perseverance. Keep up the hard work, you are on the right track to your goals!"
                : "شكرًا لك على الجهد الرائع الذي بذلته اليوم! إنجازك هو شهادة على عزيمتك وإصرارك. استمر في العمل الجاد، فأنت تسير على الطريق الصحيح نحو أهدافك!"}
            </p>
            <button>
              go to exrcise <NotificationsPausedIcon />
            </button>
          </div>
        </div>
        :
        <div className="water_target">
        <div className="img">
          <Lottie className="home__img" animationData={Alarm} />
        </div>
        <div className="info">
          <h2>
            {language === "en"
              ? "🔥 What are you waiting for now?"
              : "🔥 ما الذي تنتظره ابدا الان"}
          </h2>
          <p>
            {language === "en"
              ? "Don't be discouraged! Every beginning requires courage. Today is a new opportunity to move towards your goals. Start with a small step, because every great beginning begins with a single step!"
              : "لا تحبط! كل بداية تحتاج إلى شجاعة. اليوم هو فرصة جديدة للانطلاق نحو أهدافك. ابدأ بخطوة صغيرة، فكل بداية رائعة تبدأ بخطوة!"}
          </p>
          <button>
            go to exrcise <NotificationsPausedIcon />
          </button>
        </div>
       
      </div>
       : 
       <div className="water_target">
        <div className="img">
          <Lottie className="home__img" animationData={SleepL} />
        </div>
        <div className="info">
          <h2>
            {language === "en"
              ? "Happy Holidays"
              : "عطلة سعيدة"}
              🥳
          </h2>
          <p>
            {language === "en"
              ? "Use your day off to recharge your energy and recharge your creativity. Every moment you take care of yourself leads you to greater accomplishments. Make this day an opportunity to relax and reflect on your dreams!"
              : "استغل يوم عطلتك لتجديد طاقتك وإعادة شحن إبداعك، فكل لحظة تعتني فيها بنفسك تقودك نحو إنجازات أكبر. اجعل من هذا اليوم فرصة للاسترخاء والتفكير في أحلامك!"}
          </p>
        </div>
        </div>
}
      </section>
    </SkeletonLoading>
  );
}
