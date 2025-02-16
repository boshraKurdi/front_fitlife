import "./Footer.css";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Bg_Image } from "../../index";
import Components from "../../Style/Components/Components";
import { useSelector } from "react-redux";
export default function Footer() {
  const { value , language } = useSelector((state) => state.mode)
  const { MyComponentHeroSubtitleA} = Components();
  return (
    <footer className={`footer ${value}`} id="contact">
      <div
        className="section footer-top has-bg-image"
        style={{ backgroundImage: `url(${Bg_Image})` }}
      >
        <div className="container">
          <div className="footer-brand">
            <a href="index" className="logo">
              <FitnessCenterIcon className="ion-icon" />

              <span className="span">Fitlife</span>
            </a>

            <p className="footer-brand-text">
             {language == 'ar' ? 'الاوقات التي يمكننا الرد على طلباتكم': 'Times we can respond to your requests'}
            </p>

            <div className="wrapper">

              <ul className="footer-brand-list">
                <li>
                  <p className="footer-brand-title">{language === 'ar' ? "الجمعة - الاثنين" :"Monday - Friday"}</p>

                  <p>7:00Am - 10:00Pm</p>
                </li>

                <li>
                  <p className="footer-brand-title">{language === 'ar' ? "السبت - الاحد" : "Saturday - Sunday"}</p>

                  <p>7:00Am - 2:00Pm</p>
                </li>
              </ul>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title has-before">{language === 'ar' ? "اهم الروابط" : "Our Links"}</p>
            </li>

            <li>
              <a href="index" className="footer-link">
                {language === 'ar' ? "الصفحة الرئيسية" : "Home"}
              </a>
            </li>

            <li>
              <a href="index" className="footer-link">
               {language === 'ar' ? "حول الموقع" : "About Us"}
              </a>
            </li>

            <li>
              <a href="#index" className="footer-link">
                {language === 'ar' ? "الاهداف" : "goals"}
              </a>
            </li>

            <li>
              <a href="index" className="footer-link">
                {language === 'ar' ? "تواصل معنا" : "Contact Us"}
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title has-before">{language === 'ar' ? "تواصل معنا" : "Contact Us"}</p>
            </li>

            <li className="footer-list-item">
              <div className="icon">
                <LocationOnIcon />
              </div>

              <address className="address footer-link">
              {language === 'ar' ? "سوريا , حلب حي الفرقان" :  "syria , aleppo Al Furqan neighborhood"}
              </address>
            </li>

            <li className="footer-list-item">
              <div className="icon">
                <PhoneIcon />
              </div>

              <div>
                <a href="tel:18001213637" className="footer-link">
                  1800-121-3637
                </a>

                <a href="tel:+915552348765" className="footer-link">
                  +91 555 234-8765
                </a>
              </div>
            </li>

            <li className="footer-list-item">
              <div className="icon">
                <EmailIcon />
              </div>

              <div>
                <a href="mailto:info@fitlife.com" className="footer-link">
                  info@fitlife.com
                </a>

                <a href="mailto:services@fitlife.com" className="footer-link">
                  services@fitlife.com
                </a>
              </div>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title has-before">{language === 'ar' ? "نشرتنا الاخبارية" : "Our Newsletter"}</p>
            </li>

            <li>
              <form action="" className="footer-form">
                <input
                  type="email"
                  name="email_address"
                  aria-label="email"
                  placeholder={language === 'ar' ? "عنوان البريد الالكتروني" :"Email Address"}
                  required
                  className="input-field"
                />

                <button
                  type="submit"
                  className="btn btn-primary"
                  aria-label="Submit"
                >
                <SendIcon />
                </button>
              </form>
            </li>

            <li>
              <ul className="social-list">
                <li>
                  <MyComponentHeroSubtitleA href="index" className="social-link">
                    <FacebookIcon />
                  </MyComponentHeroSubtitleA>
                </li>

                <li>
                  <MyComponentHeroSubtitleA href="index" className="social-link">
                    <InstagramIcon />
                  </MyComponentHeroSubtitleA>
                </li>

                <li>
                  <MyComponentHeroSubtitleA href="index" className="social-link">
                    <TwitterIcon />
                  </MyComponentHeroSubtitleA>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 Fitlife. All Rights Reserved By{" "}
            <a href="index" className="copyright-link">
              codewithsadee.
            </a>
          </p>

          <ul className="footer-bottom-list">
            <li>
              <a href="index" className="footer-bottom-link has-before">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="index" className="footer-bottom-link has-before">
                Terms & Condition
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
