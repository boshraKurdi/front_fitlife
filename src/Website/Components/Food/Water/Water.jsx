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
  const { value , language } = useSelector((state) => state.mode);
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
          {language === 'ar' ? "كمية شرب الماء" : "Water Amount"}{" "}
          <OpacityIcon style={{ color: "#0087ff", fontSize: "3rem" }} />
        </h1>
      </div>
      <div className={`water ${value}`}>
        <div className="water_container">
        
          <div className="water_info">
            <h2>{language === 'ar' ? "اختر كمية شربك للماء" : "Enter Amount Water"}</h2>
            <p style={{display:'flex' , alignItems:'center'}}>{language == 'en' ?  "To enjoy a healthy life, you must consume sufficient amounts of water." : "للتمتع بحياة صحية يجب عليك استهلاك كميات كافية من الماء"  }<OpacityIcon style={{ color: "#0087ff", fontSize: "1.7rem" }} /></p>
            <form>
              <label>{language === 'ar' ? "كيمة الماء التي ينبغي ان تشربها" : "The amount of water that you should drink"}💙</label>
              <input
                className="water-input"
                style={{ pointerEvents: "none" }}
                type="string"
                value={water?.water + "L"}
              />
              <label>{language === 'ar' ? "كمية الماء التي قمت بشربها" : "The amount of water that you drunk"}💦</label>
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
                setData(Number(data)+1)
              }}>1 {language === 'ar' ? "لتر"  : "liter"} <LocalDrinkIcon/></span>
              <span  onClick={()=>{
                setData(Number(data)+2)
              }}>2 {language === 'ar' ? "لتر"  : "liter"} <LocalDrinkIcon/></span>
              <span  onClick={()=>{
                setData(Number(data)+3)
              }}>3 {language === 'ar' ? "لتر"  : "liter"} <LocalDrinkIcon/></span>
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
                {language === 'ar' ? "حفظ"  : "save"} {loading === "pending" ? <ButtonLoading /> : ""}{" "}
                <i className="ri-arrow-right-down-line button__icon"></i>
              </button>
            </form>
          </div>
          <div className="water_img">
            <Lottie className="water__img" animationData={water1} />
          </div>
        </div>
      </div>
    </>
  );
}
