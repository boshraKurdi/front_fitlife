import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Error403 from "../Dashboard/components/error/error403";

export default function RequierAuthPanel({ allowedRole }){
   const location = useLocation();
   const { tokenAdmin , admin } = useSelector((state) => state.auth) 
   return tokenAdmin ?  allowedRole.includes(admin?.roles[0]?.name) ? <Outlet /> : <Error403 /> : <Navigate state={{form : location}} replace to='/dashboard/loginPanel' />
}