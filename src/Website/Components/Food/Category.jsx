import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import CoffeeIcon from '@mui/icons-material/Coffee';
import AppleIcon from '@mui/icons-material/Apple';
export default function Category({Categories , setCategories}){
    return(
        // back-menus
        <div className="main-filter">
          <div>
            <h2 className="main-title-bottom">Menu <br />Catagory</h2>
          </div>
          <div className="filter-wrapper">
            <div onClick={()=>{
              setCategories(0)
            }} className={Categories === 0 ? 'active filter-card' : "filter-card"}>
              <div className="filter-icon">
                <RestaurantMenuIcon />
              </div>
              <p>All Menus</p>
            </div>
            <div onClick={()=>{
              setCategories(1)
            }} className={Categories === 1 ? 'active filter-card' : "filter-card"}>
              <div className="filter-icon">
                <LunchDiningIcon/>
              </div>
              <p>Meat</p>
            </div>
            <div onClick={()=>{
              setCategories(2)
            }} className={Categories === 2 ? 'active filter-card' : "filter-card"}>
              <div className="filter-icon">
                <LocalPizzaIcon/>
              </div>
              <p>Pizza</p>
            </div>
            <div onClick={()=>{
              setCategories(3)
            }} className={Categories === 3 ? 'active filter-card' : "filter-card"}>
              <div className="filter-icon">
                <LocalBarIcon/>
              </div>
              <p>Drink</p>
            </div>
            <div onClick={()=>{
              setCategories(4)
            }} className={Categories === 4 ? 'active filter-card' : "filter-card"}>
              <div className="filter-icon">
                <CoffeeIcon />
              </div>
              <p>Coffee</p>
            </div>
            <div onClick={()=>{
              setCategories(5)
            }} className={Categories === 5 ? 'active filter-card' : "filter-card"}>
              <div className="filter-icon">
                <AppleIcon/>
              </div>
              <p>Healthy</p>
            </div>
          </div>
        </div>
    )
}