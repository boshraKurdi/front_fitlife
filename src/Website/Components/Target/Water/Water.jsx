import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import "./Water.css";
import Sad from "../../../../lottiefiles/sad.json";
import Alarm from "../../../../lottiefiles/alarm.json";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SkeletonLoading from "../../Loading/SkeletonLoading/SkeletonLoading";

export default function Water({ progress, error, loading }) {
  const { language } = useSelector((state) => state.mode);
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
              {language === "ar" ? "تتبع شرب الماء" : "Track your water intake"}
            </h2>
            <p>
              {language === "ar"
                ? "تتبع شرب الماء: صحتك في كل قطرة 💧"
                : "Track your water intake: Your health in every drop 💧"}
            </p>
          </div>
        </div>
        {
            !progress[0]?.water[0]?.targets?.length ?
            <div className="water_target">
            <div className="img">
              <Lottie className="home__img" animationData={Alarm} />
            </div>
            <div className="info">
              <h2>{language === 'en' ? "You haven't had any water today." : "لم تشرب اليوم ماء أبداً"}😭</h2>
              <p>
                {language === 'en' ? "Don't worry! Every new beginning starts with a single step. Start drinking a glass of water now, and you will feel the big difference in your health!" :"لا تقلق! كل بداية جديدة تبدأ بخطوة واحدة. ابدأ بشرب كوب من الماء الآن، وستشعر بالفرق الكبير في صحتك!"}
              </p>
              <button onClick={()=>{
               nav('/food/1')
              }}>go to drink <WaterDropIcon/></button>
            </div>
          </div>
          :
          ( 
            progress[0]?.water[0]?.targets[0]?.water > Number(progress[0]?.water[0]?.water) ?
             <div className="water_target">
             <div className="img">
               <Lottie className="home__img" animationData={Sad} />
             </div>
             <div className="info">
               <h2>{language === 'en' ? `I drank a good amount of water today. it is ${progress[0]?.water[0]?.targets[0]?.water}L of ${progress[0]?.water[0]?.water}L` :`لقد شربت اليوم كمية ماء جيدة وهي ${progress[0]?.water[0]?.targets[0]?.water}L من ${progress[0]?.water[0]?.water}L`}🤓</h2>
               <p>
                {language === 'en' ? "Great! You've done an excellent job drinking water today! Keep it up, every sip brings you closer to better health!" :"رائع! لقد قمت بعمل ممتاز في شرب الماء اليوم! استمر في ذلك، فكل رشفة تقربك من صحة أفضل!"}
               </p>
               <button onClick={()=>{
               nav('/food/1')
              }}>go to drink <WaterDropIcon/></button>
             </div>
           </div> :
              <div className="water_target">
              <div className="img">
                <Lottie className="home__img" animationData={Sad} />
              </div>
              <div className="info">
                <h2>{language === 'en' ? `it is ${progress[0]?.water[0]?.targets[0]?.water}L of ${progress[0]?.water[0]?.water}L` : `شربت اليوم ماء  ${progress[0]?.water[0]?.targets[0]?.water}L من ${progress[0]?.water[0]?.water}L`}😢</h2>
                <p>
                  {language === 'en' ? "Don't forget, every drop counts! Try to add more water to your daily routine, your health is worth it!" : 'لا تنسى، كل قطرة مهمة! حاول أن تضيف المزيد من الماء إلى روتينك اليومي، فصحتك تستحق ذلك!'}
                </p>
                <button onClick={()=>{
               nav('/food/1')
              }} >go to drink <WaterDropIcon/></button>
              </div>
            </div>
           

          )
            
        }
     
      </section>
    </SkeletonLoading>
  );
}
