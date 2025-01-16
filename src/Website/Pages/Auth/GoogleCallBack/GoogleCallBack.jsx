import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GOOGLE_CALL_BACK } from "../../../../Api/Api";
import Loading from "../../../Components/Loading/Loading";
import { useDispatch } from "react-redux";
import { SetAuth } from "../../../../Redux/Auth/AuthSlice";
import { useSnackbar } from 'notistack';
export default function GoogleCallBack(){
    const dispatch = useDispatch()
    const location = useLocation()
    const nav = useNavigate()
    const { enqueueSnackbar } = useSnackbar();
    useEffect(()=>{
        async function GoogleCall(){
            try {
                const res = await axios.get(`/${GOOGLE_CALL_BACK}${location.search}`)
                dispatch(SetAuth({token :res.data.access_token , user:res.data.user }))
                if (res.data.status === 'login') {
                   nav("/");  
                   enqueueSnackbar(`Login successfully!`, { variant: "success" });
                }else{
                   nav("/information");
                } 
            } catch (error) {
                dispatch({message:error , type:'error'});        
            }
        }
        GoogleCall();
    } , [location ,dispatch , nav , enqueueSnackbar])
    return <Loading />
}