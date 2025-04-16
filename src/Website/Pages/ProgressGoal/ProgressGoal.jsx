import { useDispatch, useSelector } from "react-redux";
import "./ProgressGoal.css";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Cycle from "../../Components/Cycle/Cycle";
import { Box, Button, Menu , MenuItem } from "@mui/material";
import BarChart from "../../Components/Chart/BarChart";
import { useEffect, useState } from "react";
import { ActProgressGoal } from "../../../Redux/User/UserSlice";
import { useParams } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../DashboardPlan/DashboardPlan.css";
import LottieFiles from "../../Components/Loading/LottieLoading/LottieFiles";
export default function ProgressGoal() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { value, language } = useSelector((state) => state.mode);
  const { progressGoal, loading, error } = useSelector((state) => state.user);
    const [type , setType] = useState(0)
  useEffect(() => {
    dispatch(ActProgressGoal({ id: id, index: type }));
  }, [dispatch, id , type]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={`profile ${value}`}>
      <div className="container_profile">
        <div className="container-body">
          <SkeletonLoading loading={loading} error={error} type="profile">
            <div className="main-body">
              <div className="headtittle">
                <div>
                  <span className="greeeting">{language == 'ar' ? progressGoal?.goal?.title_ar : progressGoal?.goal?.title},</span>
                  <h2 style={{ display: "flex", alignItems: "center" }}></h2>
                  {/* <h2><LocationOnIcon/> syria , aleppo</h2> */}
                </div>
              </div>
              {progressGoal ? (
                <div className="cards">
                  <div
                    style={{ marginBottom: "3rem", justifyContent: "center" }}
                    className="row_profile_2 row-1"
                  >
                    <div className="col">
                      <div className="balance-card">
                        <h3 className="cardtittle">
                          {language == "ar"
                            ? "السعرات الحرارية من التمارين"
                            : "Calories Exrices"}
                            ✅
                        </h3>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <h2 className="balance">
                            {language == "ar" ? "حرقت" : "hs"}{" "}
                            {progressGoal?.exercise_calories &&
                              progressGoal?.exercise_calories}
                          </h2>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col">
                      <div className="paid-invoice">
                        <h3 className="cardtittle">
                          {language == "ar"
                            ? "السعرات الحرارية من الطعام"
                            : "Calories Foods"}
                            🍕
                        </h3>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <h2 className="balance">
                            {language == "ar" ? "استهلكت" : "hs"}{" "}
                            {progressGoal?.meal_calories &&
                              progressGoal?.meal_calories}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="paid-invoice">
                        <h3 className="cardtittle">
                          {language == "ar" ? "صافي الحرق" : "Net burn"}🔥
                        </h3>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <h2 className="balance">
                            {progressGoal?.net_burned &&
                              progressGoal?.net_burned}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="paid-invoice">
                        <h3 className="cardtittle">
                          {language == "ar"
                            ? "ماذا انجزت"
                            : "What have you accomplished?"}📊
                        </h3>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <h2 className="balance">
                            {language == "ar" ? "انجزت" : "hs"}
                            {progressGoal?.percentage &&
                              progressGoal?.percentage}
                            %
                          </h2>
                          <Cycle num={progressGoal.percentage * 100} />
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="total-invoice">
                        <h3 className="cardtittle">
                          {language == "ar"
                            ? "الوزن المتوقع"
                            : "Expected weight"}⚖️
                        </h3>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <h2 className="balance">
                            {progressGoal?.start_weight}kg /{" "}
                            {progressGoal?.final_weight}kg
                          </h2>
                          <span
                            style={{ left: language === "ar" && "18%" }}
                            className="bmi"
                          >
                            <AssignmentTurnedInIcon />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                  style={{margin:"1rem" , width:'100px'}}
                        className="btn_options"
                          id="demo-positioned-button"
                          aria-controls={
                            open ? "demo-positioned-menu" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          {type+1} week <KeyboardArrowDownIcon/>
                        </Button>
                        <Menu
                          id="demo-positioned-menu"
                          aria-labelledby="demo-positioned-button"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                        >
                          <MenuItem onClick={()=>{
                            handleClose()
                            setType(0)
                            }}>1 week</MenuItem>
                          <MenuItem onClick={()=>{
                            handleClose()
                            setType(1)
                            }}>2 week</MenuItem>
                        </Menu>
                  <div
                    style={{ justifyContent: "center", marginBottom: "3rem" }}
                    className="row_profile row-1"
                  >
                    <div  style={{ width: "97%" }} className="col">
                      <div className="latest-activity">
                        <h3 className="cardtittle">
                        
                          {language == "ar"
                            ? "اخر نشاطي في التمارين"
                            : "Latest activity exercises"}
                        </h3>
                        <Box height="250px" m="-20px 0 0 0">
                          {/* <LineChart title='exercises' data={profile?.caloriesForDay} isDashboard={true} /> */}
                          <BarChart
                            title="calories"
                            data={progressGoal?.datesCaloriesE}
                          />
                        </Box>
                      </div>
                    </div>
                    <div  style={{ width: "97%" }} className="col">
                      <div className="latest-activity">
                        <h3 className="cardtittle">
                          {language == "ar"
                            ? "اخر نشاطي في الوجبات"
                            : "Latest activity meals"}
                        </h3>
                        <Box height="250px" m="-20px 0 0 0">
                          {/* <LineChart data={profile?.FoodForDay} title="meal" isDashboard={true} /> */}
                          <BarChart
                            title="calories"
                            data={progressGoal?.datesCaloriesFood}
                          />
                        </Box>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ justifyContent: "center", marginBottom: "3rem" }}
                    className="row_profile row-1"
                  >
                    <div  style={{ width: "97%" }} className="col">
                      <div className="latest-activity">
                        <h3 className="cardtittle">
                          {language == "ar"
                            ? "اخر نشاطي في شرب الماء"
                            : "Latest activity water"}
                        </h3>
                        <Box height="250px" m="-20px 0 0 0">
                          {/* <LineChart title='exercises' data={profile?.caloriesForDay} isDashboard={true} /> */}
                          <BarChart
                            title="liter"
                            data={progressGoal?.totalWater}
                          />
                        </Box>
                      </div>
                    </div>
                    <div  style={{ width: "97%" }} className="col">
                      <div className="latest-activity">
                        <h3 className="cardtittle">
                          {language == "ar"
                            ? "اخر نشاطي في ساعات النوم"
                            : "Latest activity sleep"}
                        </h3>
                        <Box height="250px" m="-20px 0 0 0">
                          {/* <LineChart data={progressGoal?.FoodForDay} title="meal" isDashboard={true} /> */}
                          <BarChart
                            title="hours sleep"
                            data={progressGoal?.totalSleep}
                          />
                        </Box>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <LottieFiles
                  message={"You are not involved in a goal"}
                  type="goal"
                />
              )}
            </div>
          </SkeletonLoading>
        </div>
      </div>
    </div>
  );
}
