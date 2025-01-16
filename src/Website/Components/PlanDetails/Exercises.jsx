import { useSelector, useDispatch } from "react-redux";
import { memo, useEffect } from "react";
import { ActExerciseIndex } from "../../../Redux/Plan/PlanSlice";
import { format } from "date-fns";
import Stepper from "./Stepper/Stepper";
import { useNavigate } from "react-router-dom";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
const Exercises = ({ data, myplan, id }) => {
  const { value } = useSelector((state) => state.mode);
  const nav = useNavigate();
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
  const newData = exercises.exercise
    ? exercises?.exercise.map((data) => {
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
          <h2 className="section__header">Exercises</h2>
          <p>
            Each day of the week has its own exercises that have been carefully
            studied to achieve physical fitness.
          </p>

          <div className={`why__grid`}>
            {loading === "pending" ? "loading..." : newData}
          </div>
        </div>
      </section>
    </>
  );
};
export default Exercises;
