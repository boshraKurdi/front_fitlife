import Components from '../../Style/Components/Components'
import './Loading.css'
export default function Loading(){
    const { MyComponentContainerLoader } = Components();
    return(
        <MyComponentContainerLoader className="container_loader">
            <div className='fitlife'>FiLife</div>
            <div className="loader"></div>
        </MyComponentContainerLoader>
    )
}