import { useDispatch, useSelector } from "react-redux";
import "./DashboardPlan.css";
import Cycle from "../../Components/Cycle/Cycle";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ActShow } from "../../../Redux/MyPlan/MyPlanSlice";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BarChart from "../../Components/Chart/BarChart";
export default function DashboardPlan() {
  const { value , language , data } = useSelector((state) => state.mode);
  const { id , week , day } = useParams();
  const [type , setType] = useState({one:'weekly' , two:week})
  const dispatch = useDispatch();
  const { myplan, error, loading } = useSelector((state) => state.myPlan);
  useEffect(() => {
    dispatch(ActShow({id:id , day:data?.day , week:data?.week , data:type}))
      .unwrap()
      .catch(() => {
      });
  }, [dispatch, id , type , data ]);
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
                  <span className="greeeting">
                    {language === 'ar' ? myplan?.title_ar : myplan?.title}
                  </span>
                  <h2 style={{ display: "flex", alignItems: "center" }}>
                    {language === 'ar' ? "تقدمي" : "my progress"}
                  </h2>
                </div>
              </div>

              <div className="cards">
                <div
                  style={{ marginBottom: "3rem", justifyContent: "center" }}
                  className="row_profile_2 row-1"
                >
                  <div className="col">
                    <div className="balance-card">
                      <h3 className="cardtittle">{language === 'ar' ? "اجمالي تقدمي" : "Total progress"}</h3>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <h2 className="balance">{language === 'ar' ? "21 تمرين" : "21 exercises"}</h2>
                        <Cycle num={myplan?.totalRate} />
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="total-invoice">
                      <h3 className="cardtittle">{language === 'ar' ? "التقدم اليومي" : "Daily progress"}</h3>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <h2 className="balance">{day} {language === 'ar' ? "يوم" : "day"}</h2>
                        <Cycle num={myplan?.totalRateDay} />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="paid-invoice">
                      <h3 className="cardtittle">{language === 'ar' ? "التقدم الاسبوعي" : "Weekly progress"}</h3>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <h2 className="balance">{week} {language === 'ar' ? "اسبوع" : "week"}</h2>
                        <Cycle num={myplan?.totalRateWeekOne[week-1]?.rate} />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ justifyContent: "center", marginBottom: "3rem" }}
                  className="row_profile row-1"
                >
                  <div style={{ width: "97%" }} className="col">
                    <div className="latest-activity">
                      <div style={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}}>
                        <h3 className="cardtittle">{language === 'ar' ? "التقدم اليومي" : "Daily progress plan"}</h3>
                        <Button
                        className="btn_options"
                          id="demo-positioned-button"
                          aria-controls={
                            open ? "demo-positioned-menu" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          {type.one} <KeyboardArrowDownIcon/>
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
                            setType({...type , one:'monthly'})
                            }}>monthly</MenuItem>
                          <MenuItem onClick={()=>{
                            handleClose()
                            setType({...type , one:'weekly'})
                            }}>weekly</MenuItem>
                        </Menu>
                      </div>
                      <Box height="250px" m="-20px 0 0 0">
                        <BarChart data={myplan?.arrDay}/>
                      </Box>
                    </div>
                  </div>
                  <div style={{ width: "97%" }} className="col">
                    <div className="latest-activity">
                      <div style={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}}>
                        <h3 className="cardtittle">{language === 'ar' ? "حرق السعرات الحرارية كل يوم" : "Burn calories every day"}</h3>
                      </div>
                      <Box height="250px" m="-20px 0 0 0">
                        <BarChart data={myplan?.arrCal}/>
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SkeletonLoading>
          </div>
        </div>
      </div>
  );
}
