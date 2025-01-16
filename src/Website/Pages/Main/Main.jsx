import { Outlet } from "react-router-dom";
import { Header , Footer } from "../../index";
import '../../../Website/Style/Media.css'
export default function Main(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />     
        </>
    )
}