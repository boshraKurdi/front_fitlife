import { useState } from "react";

export default function UseGetAddress({form , setForm}){
    const [stats , setStats] = useState({loading:'idle' , error:''});
    const getLatALon = async (address) =>{
        try {
            setStats({...stats , loading:'pending'});
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${address}&addressdetails=1`,
                {
                  headers: {
                    'User-Agent': 'Mozilla/5.0',
                  },
                }
              );
                const data = await res.json();
                const { lat, lon } = data[0];
                setStats({...stats , loading:'succeeded'})
                setForm({...form ,  lat : lat, lon : lon });            
        } catch (error) {
            setStats({...stats , loading:'failed' , error: error})
        }
    }
    return { getLatALon , stats ,setStats }
}