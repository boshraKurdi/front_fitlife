import { image_chat_2 , Bg_Image } from "../../../index";
export default function Setp() {
  return (
    <section className="section service" id="service" style={{ backgroundImage: `url(${Bg_Image})` }}>
      <div className="container">
        <div className="service__grid">
          <div className="service__card">
            <span>01</span>
            <h4>Select service</h4>
            <p>
              Our fitness training programs are tailored to help you build
              strength, improve endurance, and achieve your personal fitness
              goals.
            </p>
          </div>
          <div className="service__card">
            <span>02</span>
            <h4>Payment</h4>
            <p>
              Perfect for all levels, our sessions focus on improving
              flexibility, balance, and mental clarity while helping you manage
              stress.
            </p>
          </div>
          <div className="service__card">
            <span>03</span>
            <h4>Choosing the right coach</h4>
            <p>
              Our gymnastics classNamees are designed to boost coordination,
              flexibility, and core strength through a series of fun and
              challenging exercises.
            </p>
          </div>
          <div className="service__card">
            <span>04</span>
            <h4>Start the chat</h4>
            <p>
              Suitable for all ages and skill levels, our martial arts program
              emphasizes technique, respect, and personal growth while building
              confidence.
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
