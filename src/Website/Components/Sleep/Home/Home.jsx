import Lottie from 'lottie-react';
import './Home.css'
import Lsleep from '../../../../lottiefiles/sleep2.json'
// import Imgg1 from '../../../../img/sleep.jpg'
export default function Home() {
  return (
    <section className="sleep_home" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">
          A plan to make your sleep better <br /> your life better
          </h1>
          <p className="home__description">
            Create incredible plant design for your offices or apastaments. Add
            fresness to your new ideas.
          </p>
        </div>
        <Lottie className='home__img' animationData={Lsleep} />

      

       
      </div>
    </section>
  );
}
