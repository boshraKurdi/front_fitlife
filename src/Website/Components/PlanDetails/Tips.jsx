import { useSelector } from 'react-redux';
export default function Tips() {
  const { value , language } = useSelector((state) => state.mode);
  return (
    <section className="section__container e_service__container" id="e_service">
      <div className="e_service__header">
        <div className="e_service__header__content">
          <h2 className="section__header">{language === 'ar' ? "نصائح مهمة للخطة" : "Important tips for the plan"}</h2>
          <p>
            {language === 'ar' ? "نصائح هامة قبل البدء بالخطة، حيث يجب عليك الالتزام بها لتحقيق اللياقة البدنية والصحة البدنية." : "Important tips before starting the plan, as you must adhere to it to achieve physical fitness and physical health."}
          </p>
        </div>
      </div>
      <div className="e_service__grid">
        <div className={`e_service__card ${value}`}>
          <span>
            1
          </span>
          <h4>{language === 'ar' ? "النصيحة الاولى" : "first advice"}</h4>
          <p>
           {language === 'ar' ? "الالتزام بالخطة في الموعد المحدد هو أحد العوامل التي تساعدك على تحقيق هدفك" : "Sticking to the plan on time is one of the factors that help you achieve your goal."}
          </p>
        </div>
        <div  className={`e_service__card ${value}`}>
          <span>
          2
          </span>
          <h4>{language === 'ar' ? "النصيحة الثانية" : "second advice"}</h4>
          <p>
            {language === 'ar' ? "الالتزام بالخطة في الموعد المحدد هو أحد العوامل التي تساعدك على تحقيق هدفك." : "If you experience problems after implementing the plan, you should consult a trainer or doctor."}
          </p>
        </div>
        <div  className={`e_service__card ${value}`}>
          <span>
          3
          </span>
          <h4>{language === 'ar' ? "النصيحة الثالثة" : "third advice"}</h4>
          <p>
            {language === 'ar' ? "ربما لا تجد النتيجة فورًا، يجب عليك التحلي بالصبر والاستمرار في تحقيق هدفك." : "You may not find the result immediately, you must be patient and continue to achieve your goal."}
          </p>
        </div>
      </div>
    </section>
  );
}
