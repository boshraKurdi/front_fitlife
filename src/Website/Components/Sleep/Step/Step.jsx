import { useSelector } from 'react-redux';
import './Step.css'
export default function Step(){
    const { language } = useSelector((state) => state.mode);
    return(
        <section className="sleep_steps section container">
        <div className="steps__bg">
            <h2 className="section__title-center steps__title">
                {language === 'ar' ?`خطوات لبدء مشروعك التخطيط الصحيح`  : `Steps to start your plan off right`}
            </h2>

            <div className="steps__container grid">
                <div className="steps__card">
                    <div className="steps__card-number">01</div>
                    <h3 className="steps__card-title">{language === 'ar' ? "النوم مبكرا": "Bed Early"}</h3>
                    <p className="steps__card-description">
                   {language === 'ar' ? "اذهب إلى السرير في الساعة 10 أو 11." :  "Go to bed at 10 or 11 o'clock."}
                    </p>
                </div>

                <div className="steps__card">
                    <div className="steps__card-number">02</div>
                    <h3 className="steps__card-title">{language === 'ar' ? "ساعات نوم محددة" :"Specific Sleep Hours"}</h3>
                    <p className="steps__card-description">
                   {language === 'ar' ?"التزم بعدد ساعات النوم المحددة لك يوميًا لتستمتع بحياة صحية"  : "Stick to the number of hours of sleep specified for you daily to enjoy a healthy life"}
                    </p>
                </div>

                <div className="steps__card">
                    <div className="steps__card-number">03</div>
                    <h3 className="steps__card-title">{language === 'ar' ? "تسجيل مدة النوم" : "Record sleep duration"}</h3>
                    <p className="steps__card-description">
                    {language === 'ar' ? "انتقل إلى الحقل أدناه لملئه بعدد ساعات النوم الفعلية" : "Go to the field below to fill it with the number of actual hours of sleep"}
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}