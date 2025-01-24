import Lottie from "lottie-react";
import "./Water.css";
import water1 from "../../../../lottiefiles/water.json";
import { useDispatch, useSelector } from "react-redux";
import OpacityIcon from "@mui/icons-material/Opacity";
import ButtonLoading from "../../Loading/ButtonLoading/ButtonLoading";
import { useEffect, useState } from "react";
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import { ActGetWater } from "../../../../Redux/Plan/PlanSlice";
import { ActStoreWater, ResetMessages } from "../../../../Redux/Target/TargetSlice";
import { useSnackbar } from "notistack";
export default function Water() {
  const { value } = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { water } = useSelector((state) => state.plan);
  const [data, setData] = useState(water?.targets?.length ? water?.targets[0]?.water : 0);
  const { loading, message, type } = useSelector((state) => state.target);
  
  useEffect(() => {
    dispatch(ActGetWater());
  }, [dispatch]);
  useEffect(() => {
      if (message) {
        enqueueSnackbar(`${message}`, { variant: `${type}` });
        dispatch(ResetMessages()); 
      }
    }, [message, type, dispatch, enqueueSnackbar]);
  return (
    <>
      <div className="water_title">
        <h1 style={{ display: "flex", alignItems: "center" }}>
          Water Quntity{" "}
          <OpacityIcon style={{ color: "#0087ff", fontSize: "3rem" }} />
        </h1>
      </div>
      <div className={`water ${value}`}>
        <div className="water_container">
          <div className="water_img">
            <Lottie className="water__img" animationData={water1} />
          </div>
          <div className="water_info">
            <h2>Enter Quntety Water</h2>
            <p style={{display:'flex' , alignItems:'center'}}>To enjoy a healthy life, you must consume sufficient amounts of water.  <OpacityIcon style={{ color: "#0087ff", fontSize: "1.7rem" }} /></p>
            <form>
              <label>The amount of water that you should drink💙</label>
              <input
                className="water-input"
                style={{ pointerEvents: "none" }}
                type="string"
                value={water?.water + "L"}
              />
              <label>The amount of water that you drunk💦</label>
              <input
                value={data}
                onChange={(e) => {
                  setData(e.target.value);
                }}
                className="water-input"
                type="number"
                placeholder="enter leter"
              />
              <div className="add_water">
              <span onClick={()=>{
                setData(data+1)
              }}>1 liter <LocalDrinkIcon/></span>
              <span  onClick={()=>{
                setData(data+2)
              }}>2 liter <LocalDrinkIcon/></span>
              <span  onClick={()=>{
                setData(data+3)
              }}>3 liter <LocalDrinkIcon/></span>
              </div>
              <button
                disabled={(loading === 'pending') ? true : false}
                onClick={(event) => {
                    event.preventDefault()
                  dispatch(ActStoreWater(data))
                    .unwrap()
                    .then(() => {
                    })
                    .catch(() => {
                    });
                }}
                className="button--link button--flex"
              >
                Save {loading === "pending" ? <ButtonLoading /> : ""}{" "}
                <i className="ri-arrow-right-down-line button__icon"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
