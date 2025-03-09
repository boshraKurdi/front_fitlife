import { useSelector } from "react-redux";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { useNavigate } from "react-router-dom";
export default function Boxs(){
    const { value , language } = useSelector((state) => state.mode);
    const nav = useNavigate()
    return(
        <section className="section__container e_service__container" id="e_service">
        <div className="e_service__header">
          <div  className="e_service__header__content">
            <h2 className="section__header">{language === 'ar' ? "خطط هذا الهدف" : "Plan this goal"}</h2>
            <p>
              {language === 'ar' ?"يوجد داخل الهدف عدة خطط عليك العمل عليها واكمالها للوصول الى هدفك 💪🏻🔥" : "There are several plans inside the goal that you must work on and complete to reach your goal 💪🏻🔥"}
            </p>
          </div>
        </div>
        <div className="e_service__grid">
          <div onClick={()=>{
            nav('/user')
          }} className={`e_service__card ${value}`}>
            <span>
              <FitnessCenterIcon style={{fontSize:'2rem'}}/>
            </span>
            <h4>{language === 'ar' ? "خطط التمارين" : "Exercise plans"}</h4>
            <p>
             {language === 'ar' ? "كل بداية جديدة تحمل في طياتها إمكانيات لا حصر لها! ابدأ اليوم بخطة التمارين الخاصة بك، فكل خطوة تخطوها تقربك أكثر نحو صحتك المثلى ولياقتك البدنية. تذكر، الأهم هو الالتزام والاستمرارية. أنت قادر على تحقيق أهدافك" : "Every new beginning holds endless possibilities! Start your workout plan today, every step you take will bring you closer to your optimal health and fitness. Remember, the most important thing is commitment and consistency. You can achieve your goals"}
            </p>
          </div>
          <div onClick={()=>{
            nav('/food/1')
          }} className={`e_service__card ${value}`}>
            <span>
            <LocalDiningIcon style={{fontSize:'2rem'}}/>
            </span>
            <h4>{language === 'ar' ? "خطط الغذاء" : "Food plans"}</h4>
            <p>
              {language === 'ar' ? "ابدأ رحلتك نحو صحة أفضل باتباع خطة وجبات متوازنة! كل وجبة تختارها هي خطوة نحو تحقيق أهدافك. تذكر أن التغيير يستغرق وقتًا، ولكن كل جهد تبذله اليوم سيؤتي ثماره غدًا. كن قويًا، وامنح جسدك التغذية التي يستحقها!" : "Start your journey to better health with a balanced meal plan! Every meal you choose is a step towards achieving your goals. Remember, change takes time, but every effort you put in today will pay off tomorrow. Be strong, and give your body the nourishment it deserves!"}
            </p>
          </div>
          <div onClick={()=>{
            nav('/sleep')
          }}  className={`e_service__card ${value}`}>
            <span>
            <NightlightIcon style={{fontSize:'2rem'}}/>
            </span>
            <h4>{language === 'ar' ? "خطة النوم" : "Sleep plan"}</h4>
            <p>
              {language === 'ar' ? "ابدأ رحلتك نحو نوم هانئ! كل ليلة هي فرصة لتجديد طاقتك واستعادة نشاطك. امنح نفسك الوقت للاسترخاء، واحتضن روتين نوم صحي. تذكر، النوم الجيد هو مفتاح الصحة والسعادة. ابدأ الآن، فغدًا سيكون أفضل!" : "Start getting a good night's sleep! Every night is a chance to recharge and rejuvenate. Give yourself new time, and have a healthy home. Remember, sleep is the key to health. Start now, tomorrow will be better!"}
            </p>
          </div>
        </div>
      </section>
    )

}