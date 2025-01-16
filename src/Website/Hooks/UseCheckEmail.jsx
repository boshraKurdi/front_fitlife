import axios from "axios";
import { useState } from "react"

const UseCheckEmail = () => {
    const [status , setStatus] = useState('idle');
    const [enterEmail , setEnterEmail] = useState(null);
    async function checkEmail (email){
        setEnterEmail(email);
        setStatus('checking');
        try {
            const res = await axios.get(`auth/${email}/checkEmail`)
            if (!res.data.length) {
                setStatus('av');
            }else{
                setStatus("notAv")
            }
            
        } catch (error) {
            setStatus('failed')
            
        }

    };
    function ResetValue(){
        setStatus("idle");
        setEnterEmail(null);
    }
    return {status , enterEmail , checkEmail , ResetValue}
}
export default UseCheckEmail