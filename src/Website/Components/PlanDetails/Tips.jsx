import { useSelector } from 'react-redux';
export default function Tips() {
    const { value } = useSelector((state) => state.mode)
  return (
    <section className="section__container e_service__container" id="e_service">
      <div className="e_service__header">
        <div className="e_service__header__content">
          <h2 className="section__header">Important tips for the plan</h2>
          <p>
            Important tips before starting the plan, as you must adhere to it to
            achieve physical fitness and physical health.
          </p>
        </div>
      </div>
      <div className="e_service__grid">
        <div className={`e_service__card ${value}`}>
          <span>
            1
          </span>
          <h4>first advice</h4>
          <p>
            Sticking to the plan on time is one of the factors that help you
            achieve your goal.
          </p>
        </div>
        <div  className={`e_service__card ${value}`}>
          <span>
          2
          </span>
          <h4>second advice</h4>
          <p>
            If you experience problems after implementing the plan, you should
            consult a trainer or doctor.
          </p>
        </div>
        <div  className={`e_service__card ${value}`}>
          <span>
          3
          </span>
          <h4>third advice</h4>
          <p>
            You may not find the result immediately, you must be patient and
            continue to achieve your goal.
          </p>
        </div>
      </div>
    </section>
  );
}
