import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequierAuthPanel(){
   const location = useLocation();
   const { tokenAdmin } = useSelector((state) => state.auth) 
   return tokenAdmin ? <Outlet /> : <Navigate state={{form : location}} replace to='/dashboard/loginPanel' />
}