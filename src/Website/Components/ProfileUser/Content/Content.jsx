import LineChart from "../../Chart/LineChart";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import Cycle from "../../Cycle/Cycle";
import BarChart from "../../Chart/BarChart";
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { ActDeleteAccount, ActProfile } from "../../../../Redux/User/UserSlice";
import SkeletonLoading from "../../Loading/SkeletonLoading/SkeletonLoading";
import LottieFiles from "../../Loading/LottieLoading/LottieFiles";
import Swal from 'sweetalert2'
import { NavLink } from "react-router-dom";
// import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Content() {
  const dispatch = useDispatch()
  const { profile , loading , error } = useSelector((state) => state.user)
  useEffect(()=>{
    dispatch(ActProfile())
  } ,[dispatch])
  const HandelDestroy = useCallback(
    () => {
      dispatch(ActDeleteAccount());
    },
    [dispatch]
  );
  function HandelDelete(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        HandelDestroy();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  return (
     <SkeletonLoading loading={loading} error={error} type="profile">
    <div className="main-body">
      <div className="headtittle">
        <div>
        <span className="greeeting">{profile?.name},</span>
        <h2 style={{display:'flex' ,alignItems:'center'}}><EmailIcon style={{marginRight:'.5rem'}} />{profile?.email}</h2>
        {/* <h2><LocationOnIcon/> syria , aleppo</h2> */}
        </div>
        <div style={{display:'flex' , alignItems:'center'}}>
      <NavLink to="edit" className="btn_profile"><EditIcon />edit profile</NavLink>
      <button onClick={HandelDelete} className="btn_profile_delete"><DeleteIcon />delete account</button>
      </div>
      </div>
      {profile?.goal_plan?.length ?

      <div className="cards">
        <div
          style={{ marginBottom: "3rem", justifyContent: "center" }}
          className="row_profile_2 row-1"
        >
          <div className="col">
            <div className="balance-card">
              <h3 className="cardtittle">Calories</h3>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h2 className="balance">{profile?.goal && (profile?.goal?.calories_max + ' - ' + profile?.goal?.calories_min)}</h2>
                <Cycle num={profile?.totalRate} />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="total-invoice">
              <h3 className="cardtittle">Healthy Weight</h3>
              <div style={{ display: "flex", alignItems: "center" , justifyContent:'space-between' }}>
                <h2 className="balance">{profile?.width}kg / {profile?.height}cm</h2>
                <span className="bmi"><AssignmentTurnedInIcon/>{profile?.BMI}</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="paid-invoice">
              <h3 className="cardtittle">Sleep</h3>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h2 className="balance">8h - 7h</h2>
                <Cycle num="60" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ justifyContent: "center", marginBottom: "3rem" }}
          className="row_profile row-1"
        >
          <div className="col">
            <div className="latest-activity">
              <h3 className="cardtittle">Latest activity exercises</h3>
              <Box height="250px" m="-20px 0 0 0">
                <LineChart title='exercises' data={profile?.caloriesForDay} isDashboard={true} />
              </Box>
            </div>
          </div>
          <div className="col">
            <div className="latest-activity">
              <h3 className="cardtittle">Latest activity meals</h3>
              <Box height="250px" m="-20px 0 0 0">
                <LineChart data={profile?.FoodForDay} title="meal" isDashboard={true} />
              </Box>
            </div>
          </div>
        </div>
        <div style={{ justifyContent: "center" }} className="row_profile row-1">
          <div className="col">
            <div className="latest-activity">
              <h3
                className="cardtittle"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Weekly Schedule <EditIcon className="edit_week_day" />
              </h3>
              <div className="pather_day_week">
                <div className="day_week">
                  <CheckCircleIcon className="true" />
                  <span>monday</span>
                </div>
                <div className="day_week">
                  <CheckCircleIcon className="true" />
                  <span>tuesday</span>
                </div>
                <div className="day_week">
                  <CancelIcon className="false" />
                  <span>wednesday</span>
                </div>
                <div className="day_week">
                  <CheckCircleIcon className="true" />
                  <span>thrusday</span>
                </div>
                <div className="day_week">
                  <CancelIcon className="false" />
                  <span>friday</span>
                </div>
                <div className="day_week">
                  <CheckCircleIcon className="true" />
                  <span>saturday</span>
                </div>
                <div className="day_week">
                  <CancelIcon className="false" />
                  <span>sunday</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="latest-activity">
              <h3 className="cardtittle">Latest activity water</h3>
              <Box height="250px" mt="-20px">
                <BarChart data={profile.waterForDay} title="water" isDashboard={true} />
              </Box>
            </div>
          </div>
          <div className="col">
            <div className="latest-activity">
              <h3 className="cardtittle">Latest activity sleep</h3>
              <Box height="250px" mt="-20px">
                <BarChart title="sleep" data={profile.sleepForDay} isDashboard={true} />
              </Box>
            </div>
          </div>
          <div className="col">
            <div className="latest-activity">
              <h3
                className="cardtittle"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                My Goal <EditIcon className="edit_week_day" />
              </h3>
              <div className="pather_day_week">
                <div className="day_week">
                  <CheckCircleIcon className="true" />
                  <span >{profile?.goal && profile?.goal.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <LottieFiles message={'You are not involved in a goal'} type="goal" />
}
    </div>
    </SkeletonLoading>
  );
}
