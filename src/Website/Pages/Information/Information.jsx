import { useState } from 'react';
import imgAuth from '../../../img/img-login.svg'
import {Loading , Size , Address} from '../../index'
import Scheduling from '../../Components/Information/Scheduling/Scheduling';
export default function Information(){
    const [state , setState] = useState({loading: false , errorValue: false});
    const [box , setBox] = useState('si')
    const [form, setForm] = useState({
        width: "",
        height: "",
        illness: '' ,
        gender:'male' ,
        age: 0,
        lat: '' ,
        lon: '' ,
        widthError: "",
        ageError: "",
        illnessError: "",
        heightError: "",
        address: "",
        days:{
            sunday: true,
            tuesday: true,
            monday: true,
            wednesday: true,
            thrusday: true,
            friday: true,
            saturday: true,
          },
        addressError: "",
      });
    return(
        state.loading ?
        <Loading />
        : 
        <div className="login">
        <div className="login__content">
            <div className="login__img">
                <img src={imgAuth} alt="" />
            </div>
            <div className="login__forms">
                {box === 'si' ? <Size state={state} setState={setState} setBox={setBox} form={form} setForm={setForm}/> : box === 's' ? <Scheduling state={state} setState={setState} setBox={setBox} form={form} setForm={setForm} /> : <Address state={state} setState={setState} setBox={setBox} form={form} setForm={setForm} /> }
            </div>
        </div>
    </div>
    )
}