import CheckIcon from "@mui/icons-material/Check";
import Cody from "../../../../assets/Cody.jpg";
import { useDispatch, useSelector } from "react-redux";
import { ActStoreAi } from "../../../../Redux/Chat/ChatSlice";
import Heading from "../../Heading/Heading";
export default function ChatBot() {
  const { language } = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  function HandelChat() {
    dispatch(ActStoreAi());
  }
  return (
    <div className="container">
       <Heading title={language === 'ar' ? 'خدماتنا' : 'Our Service'} subTitle={language === 'ar' ? 'مدرب الذكاء الاصطناعي' : 'coach Ai'} />
      <section className="chatbot section__container why__container" id="blog">
        <div className="why__image">
          <img src={Cody} alt="why choose us" />
        </div>
        <div className="why__content">
          <h2 className="section__header">
            {language == "en"
              ? "FitBot Services – Your AI Personal Trainer"
              : "خدمات FitBot – مدربك الشخصي بالذكاء الاصطناعي"}{" "}
            🔥
          </h2>
          <p>
            {language == "en"
              ? "FitBot is your smart fitness and nutrition assistant, designed to help you achieve your fitness goals easily and efficiently. Whether you want to build muscle, lose weight, or improve your fitness, FitBot provides you with the tools you need to reach the best version of yourself! 🚀"
              : "FitBot هو مساعدك الذكي في عالم اللياقة البدنية والتغذية، مصمم لمساعدتك على تحقيق أهدافك الرياضية بسهولة وكفاءة. سواء كنت ترغب في بناء العضلات، فقدان الوزن، أو تحسين لياقتك، FitBot يوفر لك الأدوات اللازمة للوصول إلى أفضل نسخة من نفسك! 🚀"}
          </p>
          <div className="why__grid">
            <span>
              <CheckIcon />
            </span>
            <div>
              <h4>
                {language === "en"
                  ? "Customized training plans 🏋️‍♂️"
                  : " خطط تدريب مخصصة 🏋️‍♂️"}
              </h4>
              <p>
                {language === "en"
                  ? "Guidelines on how to perform exercises correctly to avoid injuries."
                  : "إرشادات حول كيفية أداء التمارين بشكل صحيح لتجنب الإصابات."}
              </p>
            </div>
            <span>
              <CheckIcon />
            </span>
            <div>
              <h4>
                {language === "en"
                  ? "Smart nutrition programs 🥗"
                  : "برامج تغذية ذكية 🥗"}
              </h4>
              <p>
                {language === "en"
                  ? "Suggest healthy meals that fit your goals (weight loss, muscle building, fitness)."
                  : "اقتراح وجبات صحية تناسب أهدافك (خسارة الوزن، بناء العضلات، الحفاظ على اللياقة)."}
              </p>
            </div>
            <span>
              <CheckIcon />
            </span>
            <div>
              <h4>
                {language === "en"
                  ? "Immediate answers to any sports or nutritional inquiry 💡"
                  : " إجابات فورية عن أي استفسار رياضي أو تغذوي 💡"}
              </h4>
              <p>
                {language === "en"
                  ? "Ask anything about fitness or nutrition, and FitBot will give you accurate answers backed by the latest research."
                  : "اسأل عن أي شيء يخص اللياقة البدنية أو التغذية، وسيقدم لك FitBot إجابات دقيقة مدعومة بأحدث الأبحاث."}
              </p>
            </div>
            <span>
              <CheckIcon />
            </span>
            <div>
              <h4>
                {language === "en"
                  ?"Payment service for using FitBot Premium"
                  : " خدمة الدفع لاستخدام FitBot Premium"}
              </h4>
              <p>
                {language === "en"
                  ?"To take advantage of exclusive benefits like advanced training plans, customized meals, and personalized tracking, you can subscribe to FitBot Premium."
                  : "للاستفادة من المزايا الحصرية مثل خطط تدريب متقدمة، وجبات مخصصة، ومتابعة شخصية، يمكنك الاشتراك في FitBot Premium."}
              </p>
            </div>
          </div>
          <button onClick={HandelChat} className="btn_botchat">
            {language === 'en' ? "start now" : "ابدا الان" }🚀
          </button>
        </div>
      </section>
    </div>
  );
}
