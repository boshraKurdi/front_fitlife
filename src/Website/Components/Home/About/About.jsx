import "./About.css";
import { About_1 , About_2 , About_3 , About_4 , About_5 } from '../../../index'
import { useSelector } from "react-redux";
export default function About() {
  const { language } = useSelector((state) => state.mode)
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">

        <div className="about-content">
          <p className="section-subtitle" style={{margin: '0'}}>{language === 'ar' ? "حول موقعنا" : "About Us"}</p>

          <h2 className="h2 section-title">{language === 'ar' ? "مرحباً بكم في موقع اللياقة البدنية الخاصة بنا" : "Welcome To Our Fitness Website"}</h2>

          <p className="section-text">
           {language === 'ar' ? 'مرحبًا بكم في موقعنا المخصص لتحسين اللياقة البدنية، حيث نقدم لكم منصة شاملة تهدف إلى تعزيز صحتكم ولياقتكم البدنية. يتيح لكم موقعنا الوصول إلى مجموعة متنوعة من البرامج التدريبية المصممة لتلبية احتياجات جميع المستويات، بدءًا من المبتدئين وحتى الرياضيين المحترفين. نقدم أيضًا نصائح غذائية متوازنة، مقالات تعليمية، ومقاطع فيديو توضيحية لمساعدتكم على تحقيق أهدافكم. انضموا إلينا اليوم واكتشفوا كيف يمكنكم تحسين لياقتكم البدنية والشعور بالنشاط والحيوية في حياتكم اليومية!' : 'Welcome to our dedicated fitness improvement site, where we provide you with a comprehensive platform for your health and fitness sector. Our site gives you access to a variety of general programs for all levels of the public, from beginners to professional athletes. We also provide balanced advice, nutritional articles, videos and should help you achieve your goals. Join us today and discover how you can facilitate your fitness, activity and vitality in your daily life!'}
          </p>

          <p className="section-text">
            {language === 'ar' ? 'ابدأ رحلتك نحو القوة واللياقة اليوم، فكل خطوة تخطوها تقربك من النسخة الأفضل من نفسك!' : 'Start your journey to strength and fitness today, every step you take brings you closer to the best version of yourself!'}
          </p>

          <div className="wrapper">
            <div className="about-coach">
              <figure className="coach-avatar">
                <img
                  src={About_5}
                  width="65"
                  height="65"
                  loading="lazy"
                  alt="Trainer"
                />
              </figure>

              <div>
                <h3 className="h3 coach-name">Denis Robinson</h3>

                <p className="coach-title">{language === 'ar' ? "مدربنا" : "Our Coach"}</p>
              </div>
            </div>

            <a href="index" className="btn btn-primary">
              {language === 'ar' ? 'اكتشف اكثر': 'Explore More'}
            </a>
          </div>
        </div>
        <div className="about-banner has-after">
          <img
            src={About_1}
            width="660"
            height="648"
            loading="lazy"
            alt="about banner"
            className="w-100"
          />

          <img
            src={About_2}
            width="660"
            height="534"
            loading="lazy"
            aria-hidden="true"
            alt=""
            className="circle circle-1"
          />
          <img
            src={About_3}
            width="660"
            height="534"
            loading="lazy"
            aria-hidden="true"
            alt=""
            className="circle circle-2"
          />

          <img
            src={About_4}
            width="650"
            height="154"
            loading="lazy"
            alt="fitness"
            className="abs-img w-100"
          />
        </div>
      </div>
    </section>
  );
}
