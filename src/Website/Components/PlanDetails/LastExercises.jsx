import { useSelector } from 'react-redux';
import Img1 from '../../../img/blog-two.jpg'
export default function LastExercises() {
    const { value } = useSelector((state) => state.mode)
  return (
    <section className="section__container doctors__container" id="pages">
      <div className="doctors__header">
        <div className="doctors__header__content">
          <h2 className="section__header">Latest exercises</h2>
          <p>The last exercises I have reached from the plan</p>
        </div>
      </div>
      <div className="doctors__grid">
        <div className={`doctors__card ${value}`}>
          <div className="doctors__card__image">
            <img src={Img1} alt="doctor" />
          </div>
          <h4>Dr. Emily Smith</h4>
          <p>Cardiologist</p>
        </div>
         <div className={`doctors__card ${value}`}>
          <div className="doctors__card__image">
            <img src={Img1} alt="doctor" />
          </div>
          <h4>Dr. James Anderson</h4>
          <p>Neurosurgeon</p>
        </div>
         <div className={`doctors__card ${value}`}>
          <div className="doctors__card__image">
            <img src={Img1} alt="doctor" />
          </div>
          <h4>Dr. Michael Lee</h4>
          <p>Dermatologist</p>
        </div>
      </div>
    </section>
  );
}
