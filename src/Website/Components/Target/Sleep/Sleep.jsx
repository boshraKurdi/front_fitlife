import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NotificationsPausedIcon from "@mui/icons-material/NotificationsPaused";
import Lottie from "lottie-react";
import "../Water/Water.css";
import Alarm from "../../../../lottiefiles/alarm.json";
import Sad from "../../../../lottiefiles/sad.json";
import SkeletonLoading from "../../Loading/SkeletonLoading/SkeletonLoading";

export default function Sleep({ progress, error, loading }) {
  const { language } = useSelector((state) => state.mode);
  console.log(progress[0]?.sleep[0]?.sleep)
  const nav = useNavigate();
  return (
    <SkeletonLoading loading={loading} error={error} type="detailsGoal">
      <section
        className="section__container e_service__container"
        id="e_service"
      >
        <div className="e_service__header">
          <div className="e_service__header__content">
            <h2 className="section__header">
              {language === "ar" ? "تتبع ساعات نومك" : "Track your sleep hours"}
            </h2>
            <p>
              {language === "ar"
                ? "تتبع ساعات نومك: مفتاح الراحة والصحة😴"
                : "Track your sleep hours: the key to rest and health😴"}
            </p>
          </div>
        </div>
        {
        !progress[0]?.sleep[0]?.targets?.length ? (
            <div className="water_target">
            <div className="img">
              <Lottie className="home__img" animationData={Alarm} />
            </div>
            <div className="info">
              <h2>{language === 'en' ? "You didn't sleep at all today" : "لم تنم اليوم أبداً"}😭</h2>
              <p>
               {language === 'en' ? "Don't give up! Every moment is a new opportunity. Try to get some rest now, sleep is the key to your health and energy!" : "لا تيأس! كل لحظة هي فرصة جديدة. حاول أن تأخذ قسطًا من الراحة الآن، فالنوم هو المفتاح لصحتك وطاقتك!"}
              </p>
              <button onClick={()=>{
               nav('/sleep')
              }}>
                go to sleep <NotificationsPausedIcon />
              </button>
            </div>
          </div>
         
        ) : progress[0]?.sleep[0]?.targets[0]?.sleep >
          Number(progress[0]?.sleep[0]?.sleep) ? (
          <div className="water_target">
            <div className="img">
              <Lottie className="home__img" animationData={Alarm} />
            </div>
            <div className="info">
              <h2>{language === 'en' ? `I slept a good amount of time today it is ${progress[0]?.sleep[0]?.targets[0]?.sleep}h of ${progress[0]?.sleep[0]?.sleep}h` : `لقد نمت اليوم لمدة جيدة وهي ${progress[0]?.sleep[0]?.targets[0]?.sleep}h من ${progress[0]?.sleep[0]?.sleep}h`}😍</h2>
              <p>
               {language === 'en' ? "Great job! Your good sleep today is an investment in your health. Keep strengthening this habit, good sleep is the key to success!" : "عمل رائع! نومك الجيد اليوم هو استثمار في صحتك. استمر في تعزيز هذه العادة، فالنوم الجيد هو سر النجاح!"}
              </p>
              <button  onClick={()=>{
               nav('/sleep')
              }}>
                go to sleep <NotificationsPausedIcon />
              </button>
            </div>
          </div>
        ) : (
            <div className="water_target">
            <div className="img">
              <Lottie className="home__img" animationData={Sad} />
            </div>
            <div className="info">
              <h2>{language === 'en' ? `I slept less than usual it is ${progress[0]?.sleep[0]?.targets[0]?.sleep}h of ${progress[0]?.sleep[0]?.sleep}h` : `لقد نمت أقل من المعتاد وهي ${progress[0]?.sleep[0]?.targets[0]?.sleep}h من ${progress[0]?.sleep[0]?.sleep}h`}😢</h2>
              <p>
               {language === 'en' ? "Every new night gives you a chance to renew! Try to give yourself some time to sleep tonight, the body needs rest to thrive!" : "كل ليلة جديدة تمنحك فرصة للتجديد! حاول أن تمنح نفسك بعض الوقت للنوم الليلة، فالجسد يحتاج إلى الراحة ليزدهر!"}
              </p>
              <button  onClick={()=>{
               nav('/sleep')
              }}>
                go to sleep <NotificationsPausedIcon />
              </button>
            </div>
          </div>
        )}
      </section>
    </SkeletonLoading>
  );
}
