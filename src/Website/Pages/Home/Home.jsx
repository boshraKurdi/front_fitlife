import Hero from "../../Components/Home/Hero/Hero";
import About from "../../Components/Home/About/About" 
import Goal from '../../Components/Home/Goal/Goal'
import { useSelector } from "react-redux";
export default function Home(){
    const { token } = useSelector((state) => state.auth) 
    console.log(token)
    return(
            <main>
            <article>
                <Hero />
                <About />
                <Goal />
            </article>
        </main>
    )
}