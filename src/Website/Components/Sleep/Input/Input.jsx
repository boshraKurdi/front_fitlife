import "./Input.css";
import Img2 from '../../../../img/sleep_schedule.png' 
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActStoreSleep } from "../../../../Redux/Target/TargetSlice";
import { useSnackbar } from 'notistack';
import ButtonLoading from "../../Loading/ButtonLoading/ButtonLoading";
export default function Input({data}) {
    const [sleep , setSleep] = useState(data.targets && data.targets[0]?.sleep);
    const {loading , message , type} = useSelector((state) => state.target)
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
  return (
    <section className="sleep_about section container" id="about">
      <div className="about__container grid">
        {/* <Lottie className="about__img" animationData={Lsleep} /> */}
        <img src={Img2} alt="none" className="about__img" />

        <div className="about__data">
          <h2 className="section__title about__title">
          Sleep duration & <br /> input field
          </h2>

          <p className="about__description">
            We have over 4000+ unbiased reviews and our customers trust our
            plant process and delivery service every time
          </p>
          <div className="about__details">
                <label>The amount of sleep you should have😴</label>
                <input type="text" style={{pointerEvents:'none'}} className="sleep_input" placeholder="enter your hours sleep" value={data.sleep + ' h'} />
            </div>
          <form >
            <div className="about__details">
                <label>The amount of sleep that you had 💤</label>
                <input value={sleep} onChange={(e)=>{setSleep(e.target.value)}} type="number" className="sleep_input" placeholder="enter your hours sleep" />
            </div>

            <button onClick={(e)=>{
                e.preventDefault()
                dispatch(ActStoreSleep(sleep)).unwrap().then(()=>{
                    enqueueSnackbar(`${message}`, { variant: `${type}` });
    
                }).catch(()=>{
                    enqueueSnackbar(`${message}`, { variant: `${type}` });
                })
            }} disabled={loading === 'pending' ? true : false} className="button--link button--flex">
              Save {loading === 'pending' ? <ButtonLoading/> : ''} <i className="ri-arrow-right-down-line button__icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
