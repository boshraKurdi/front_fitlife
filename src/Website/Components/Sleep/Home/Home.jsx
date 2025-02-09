import Lottie from 'lottie-react';
import './Home.css'
import Lsleep from '../../../../lottiefiles/sleep2.json'
import { useSelector } from 'react-redux';
export default function Home() {
  const { language } = useSelector((state) => state.mode);
  return (
    <section className="sleep_home" id="home">
      <div className="home__container container grid">
        <Lottie className='home__img' animationData={Lsleep} />
        <div className="home__data">
          <h1 className="home__title">
         {language === 'ar' ?  `خطة لتحسين نومك ${<br />} حياتك أفضل` :  `A plan to make your sleep better ${<br />} your life better`}
          </h1>
          <p className="home__description">
         {language === 'ar' ? "تهدف هذه الخطة إلى تتبع نشاط نومك للاستمتاع بحياة صحية" : "This plan aims to track your sleep activity to enjoy a healthy life."}
          </p>
        </div>
       
      </div>
    </section>
  );
}
