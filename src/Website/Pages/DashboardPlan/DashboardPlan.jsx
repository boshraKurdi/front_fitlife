import { useDispatch, useSelector } from "react-redux";
import "./DashboardPlan.css";
import Cycle from "../../Components/Cycle/Cycle";
import LineChart from "../../Components/Chart/LineChart";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ActShow } from "../../../Redux/MyPlan/MyPlanSlice";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function DashboardPlan() {
  const { value } = useSelector((state) => state.mode);
  const { id , week } = useParams();
  const [type , setType] = useState({one:'weekly' , two:week})
  const dispatch = useDispatch();
  const { myplan, error, loading } = useSelector((state) => state.myPlan);
  useEffect(() => {
    dispatch(ActShow({id:id , data:type}))
      .unwrap()
      .catch(() => {
        console.log("error");
      });
  }, [dispatch, id , type ]);
  console.log(myplan?.arrDay)
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
          <div class="container-body">
          <SkeletonLoading loading={loading} error={error} type="meal">
            <div className="main-body">
              <div className="headtittle">
                <div>
                  <span className="greeeting">
                    {myplan?.plan && myplan?.plan.title}
                  </span>
                  <h2 style={{ display: "flex", alignItems: "center" }}>
                    my progress
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
                      <h3 className="cardtittle">Total progress</h3>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <h2 className="balance">42 exercises</h2>
                        <Cycle num={myplan?.totalRate} />
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="total-invoice">
                      <h3 className="cardtittle">Daily progress</h3>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <h2 className="balance">2 day</h2>
                        <Cycle num={myplan?.totalRateDay} />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="paid-invoice">
                      <h3 className="cardtittle">Weekly progress</h3>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <h2 className="balance">{week === '1' ? 'first' : 'second'} week</h2>
                        <Cycle num={myplan?.totalRateWeekOne} />
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
                        <h3 className="cardtittle">Latest activity plan</h3>
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
                        <LineChart
                          data={myplan?.arrDay}
                          title="daily"
                          isDashboard={true}
                        />
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
