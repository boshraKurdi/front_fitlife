import { useSelector } from "react-redux";
import { image_chat_2 , Bg_Image } from "../../../index";
export default function Setp() {
  const { language } = useSelector((state) => state.mode);
  return (
    <section className="section service" id="service" style={{ backgroundImage: `url(${Bg_Image})` }}>
      <div className="container">
        <div className="service__grid">
          <div className="service__card">
            <span>01</span>
            <h4>{language === 'ar' ? "اختر خدمة" : "Select service"}</h4>
            <p>
              {language === 'ar' ? "تم تصميم برامج تدريب اللياقة البدنية لدينا لمساعدتك على بناء القوة وتحسين القدرة على التحمل وتحقيق أهداف اللياقة البدنية الشخصية الخاصة بك." : "Our fitness training programs are tailored to help you build strength, improve endurance, and achieve your personal fitness goals."}
            </p>
          </div>
          <div className="service__card">
            <span>02</span>

            <h4>{language === 'ar' ? "ادفع" : "Payment"}</h4>
            <p>
             {language === 'ar' ? "مثالية لجميع المستويات، تركز جلساتنا على تحسين المرونة والتوازن والوضوح العقلي مع مساعدتك على إدارة التوتر." :  "Perfect for all levels, our sessions focus on improving flexibility, balance, and mental clarity while helping you manage stress."}
            </p>
          </div>
          <div className="service__card">
            <span>03</span>
            <h4>{language === 'ar' ? "اختر المدرب المناسب" : "Choosing the right coach"}</h4>
            <p>
              {language === 'ar' ? "تم تصميم فصول الجمباز لدينا لتعزيز التنسيق والمرونة وقوة الجسم من خلال سلسلة من التمارين الممتعة والتحدي." : "Our gymnastics class are designed to boost coordination, flexibility, and core strength through a series of fun and challenging exercises."}
            </p>
          </div>
          <div className="service__card">
            <span>04</span>
            <h4>{language === 'ar' ? "ابدا المحادثة" : "Start the chat"}</h4>
            <p>
             {language === 'ar' ? "مناسب لجميع الأعمار ومستويات المهارة، يركز برنامج الفنون القتالية لدينا على التقنية والاحترام والنمو الشخصي مع بناء الثقة." : "Suitable for all ages and skill levels, our martial arts program emphasizes technique, respect, and personal growth while building confidence."}
            </p>
          </div>
          <div className="service__image">
            <img
              src={image_chat_2}
              alt="service"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
