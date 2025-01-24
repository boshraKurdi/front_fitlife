import Lottie from 'lottie-react';
import './Home.css'
import Lsleep from '../../../../lottiefiles/sleep2.json'
export default function Home() {
  return (
    <section className="sleep_home" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">
          A plan to make your sleep better <br /> your life better
          </h1>
          <p className="home__description">
          This plan aims to track your sleep activity to enjoy a healthy life.
          </p>
        </div>
        <Lottie className='home__img' animationData={Lsleep} />

      

       
      </div>
    </section>
  );
}
