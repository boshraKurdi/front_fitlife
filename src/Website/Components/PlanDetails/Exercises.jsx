import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ActExerciseIndex } from "../../../Redux/Plan/PlanSlice";
import { format } from "date-fns";
import Lottie from 'lottie-react';
import Stepper from "./Stepper/Stepper";
import Lsleep from '../../../lottiefiles/sleep2.json'
import { useNavigate } from "react-router-dom";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
const Exercises = ({ data, myplan, id }) => {
  const { value } = useSelector((state) => state.mode);
  const { user } = useSelector((state) => state.auth);
  const nav = useNavigate();
  const [butt , setButt] = useState(`${user.gender}`);
  const { exercises, loading } = useSelector((state) => state.plan);
  const dispatch = useDispatch();
  const today = format(new Date(), "yyyy-MM-dd");
  const indexOfToday =
    myplan?.date &&
    myplan?.date?.findIndex(
      (date) => format(date.date, "yyyy-MM-dd") === today
    );
  useEffect(() => {
    dispatch(ActExerciseIndex({ data: data, id: id }))
      .unwrap()
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, data, indexOfToday, id]);
  const filteredExercise = butt 
  ? exercises?.exercise?.filter(data => 
      data?.type === butt
    )
  : filteredExercise;
  const newData = data.day 
    ? filteredExercise?.map((data) => {
        return (
          <>
            <div className="dd" key={data.id}>
              <span key={data.id} className={`${value}`}>
                <img
                  src={data.media && data.media[0].original_url}
                  alt="none"
                />
              </span>
              <div
                className="exed"
                onClick={() => {
                  nav("/exerciseDetails/" + data.id + "/" + exercises.id);
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                  {myplan?.targets &&
                    myplan?.targets?.map((d) => {
                      return (
                        d.check === data?.id && (
                          <FileDownloadDoneIcon
                            key={d.id}
                            style={{ background: "green" }}
                            className="chech_exe"
                          />
                        )
                      );
                    })}
                </div>
              </div>
            </div>
          </>
        );
      })
    : "";

  return (
    <>
      <section
        style={{ alignItems: "flex-start" }}
        className="section__container why__container"
        id="blog"
      >
        <div className="why__image">
          <Stepper myplan={myplan} indexOfToday={indexOfToday} data={data} />
        </div>
        <div className="why__content">
        {data.day ?
        <>
          <h2 className="section__header">Exercises</h2>
          <p>
            Each day of the week has its own exercises that have been carefully
            studied to achieve physical fitness.
          </p>
          <div className="type_exe">
            <button onClick={()=>{setButt('male')}} className={butt === 'male' && 'active'}>male</button>
            <button  onClick={()=>{setButt('feminine')}} className={butt === 'feminine' && 'active'}>feminine</button>
          </div>

          <div className={`why__grid`}>
            {loading === "pending" ? "loading..." : newData}
          </div>
          </>
              : <div style={{display:'flex' , flexDirection: 'column',alignItems: 'center'}}>
                <Lottie style={{width:'300px'}} animationData={Lsleep} />
                <p style={{fontSize:'1.7rem'}}>Happy Holidays🥳🥳</p>
              </div>}
        </div>
      </section>
    </>
  );
};
export default Exercises;
