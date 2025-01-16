import { useNavigate } from "react-router-dom";
import UseGetAddress from "./UseGetAddress";
import { useDispatch, useSelector } from "react-redux";
import { ActAuthUpdate } from "../../Redux/Auth/AuthSlice";
import { useSnackbar } from 'notistack';
export default function UseInformation({setBox, state, setState, form, setForm}){
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const nav = useNavigate()
    const { getLatALon , location , stats , setStats } = UseGetAddress({form, setForm});
    const { error , loading } = useSelector((state) => state.auth)
    function ChangeSetting() {
      setBox((prev) => !prev);
    }
    function HandelInput(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
    async function HandelSignUp(e) {
      e.preventDefault();
      let flag = false;
      let errors = {};
      setState({ ...state, loading: false });
  
      if (form.address === "") {
        errors.addressError = "the address is required";
      }
  
      if (Object.keys(errors).length > 0) {
        setForm({
          ...form,
          ...errors,
        });
        flag = true;
      } else {
        flag = false;
      }
      
      if (!flag) {
        const promise = dispatch(ActAuthUpdate(form)).unwrap().then(()=>{
         nav("/");
          enqueueSnackbar('Hello in our website fitlife!', { variant: "success" });
        }).catch(()=>{})
        return () => {
          promise.abort();
        }
      }
    }
    return { location , stats , setStats , error , loading , ChangeSetting , HandelInput , HandelSignUp , getLatALon}
}