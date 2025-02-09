import Hero from "../../Components/Home/Hero/Hero";
import About from "../../Components/Home/About/About" 
import Goal from '../../Components/Home/Goal/Goal'
export default function Home(){
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