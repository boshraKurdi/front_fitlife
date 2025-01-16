import { useState } from 'react';
import imgAuth from '../../../img/img-login.svg'
import {Loading , Size , Address} from '../../index'
export default function Information(){
    const [state , setState] = useState({loading: false , errorValue: false});
    const [box , setBox] = useState(true)
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
                {box ? <Size state={state} setState={setState} setBox={setBox} form={form} setForm={setForm}/> : <Address state={state} setState={setState} setBox={setBox} form={form} setForm={setForm} /> }
            </div>
        </div>
    </div>
    )
}