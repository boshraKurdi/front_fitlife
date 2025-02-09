import "./Hero.css";
import {Hero_1 , Hero_2 , Hero_3 , Hero_4 , Hero_5 , Bg_Image} from '../../../index'
import Components from "../../../Style/Components/Components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSelector } from "react-redux";
export default function Hero() {
  const { MyComponentHeroSubtitle , MyComponentTitle , MyComponentTextP } = Components();
  const { language } = useSelector((state) => state.mode)
  return (
    <section
      className="section hero has-after has-bg-image"
      id="home"
      aria-label="hero"
      data-section
      style={{ backgroundImage: `url(${Bg_Image})` }}
    >
      <div className="container">
        <div className="hero-content">
          <MyComponentHeroSubtitle className="hero-subtitle">
            <strong className="strong">{language === 'en' ? "The Best" : 'الافضل'}</strong>{language === 'en' ? "Fitness Club" : 'نادي اللياقة البدنية'}
          </MyComponentHeroSubtitle>

          <MyComponentTitle style={{textAlign:language === 'ar' &&'right'}} className="h1 hero-title">{language === 'en' ? "Work Hard To Get Better Life" : 'العمل الجاد للحصول على حياة أفضل'}</MyComponentTitle>

          <MyComponentTextP style={{textAlign:language === 'ar' &&'right'}} className="section-text">
          {language === 'ar' ? 'ابدأ رحلتك نحو القوة واللياقة اليوم، فكل خطوة تخطوها تقربك من النسخة الأفضل من نفسك!' : 'Start your journey to strength and fitness today, every step you take brings you closer to the best version of yourself!'}
          </MyComponentTextP>

          <button className="btn btn-primary">
            Get Started
          </button>
        </div>
        <div className="hero-banner">
          <LazyLoadImage
            src={Hero_1}
            width={660}
            height={753}
            effect="blur"
            alt="hero banner"
            className="w-100"
          />

          <img
            src={Hero_2}
            width="666"
            height="666"
            aria-hidden="true"
            alt=""
            className="circle circle-1"
          />
          <img
            src={Hero_3}
            width="666"
            height="666"
            aria-hidden="true"
            alt=""
            className="circle circle-2"
          />

          <img
            src={Hero_4}
            width="255"
            height="270"
            alt="heart rate"
            className="abs-img abs-img-1"
          />
          <img
            src={Hero_5}
            width="348"
            height="224"
            alt="calories"
            className="abs-img abs-img-2"
          />
        </div>
      </div>
    </section>
  );
}
