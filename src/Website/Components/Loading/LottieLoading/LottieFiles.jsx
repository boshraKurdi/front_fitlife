import Lottie from "lottie-react";
import notFound from '../../../../lottiefiles/404.json'
import empty from '../../../../lottiefiles/empty.json'
import error from '../../../../lottiefiles/error.json'
import loading from '../../../../lottiefiles/loading.json'
import { Link } from "react-router-dom";
const lottieFilesMap = {
    notFound: notFound,
    empty: empty ,
    goal: empty ,
    error: error,
    loading: loading
}
console.log('LottieFiles empty')
const LottieFiles = ({type , message}) => {
    return(
        <div style={{display:"flex" , alignItems:"center" , justifyContent:"center" , margin: 'auto'}}>
            <div style={{width:"285px" , height:"285px"}}>
                <Lottie animationData={lottieFilesMap[type]} />
                {message && <h3 className="h3_go_to">{message}</h3>}
                {/* {type === 'goal' && <p className="go_to">To browse the goals, go to the <Link to="/#goal"> goals page</Link>.</p>} */}
            </div>
        </div>
    )
}
export default LottieFiles