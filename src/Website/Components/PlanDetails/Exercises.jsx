import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ActExerciseIndex } from "../../../Redux/Plan/PlanSlice";
import { format } from "date-fns";
// import Lottie from "lottie-react";
import Stepper from "./Stepper/Stepper";
// import Lsleep from "../../../lottiefiles/sleep2.json";
import { useNavigate } from "react-router-dom";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
const Exercises = ({ data, myplan, id }) => {
  const { value, language , is_holiday } = useSelector((state) => state.mode);
  const { user } = useSelector((state) => state.auth);
  const nav = useNavigate();
  const [butt, setButt] = useState(`${user.gender}`);
  const { exercises, loading } = useSelector((state) => state.plan);
  const dispatch = useDispatch();
  const today = format(new Date(), "yyyy-MM-dd");
  const indexOfToday =
    myplan?.date &&
    myplan?.date?.findIndex(
      (date) => format(date.date, "yyyy-MM-dd") === today
    );
console.log(is_holiday)
  useEffect(() => {
    dispatch(ActExerciseIndex({ data: data, id: id }))
      .unwrap()
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, data, indexOfToday, id]);
  const filteredExercise = butt
    ? exercises?.exercise?.filter((data) => data?.type === butt)
    : filteredExercise;
  const newData = !is_holiday
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
                  <div style={{ width: "30%" }}>
                    <h4>{language === "ar" ? data.title_ar : data.title}</h4>
                    <p>X{data?.counter}</p>
                  </div>
                  <p>
                    {language === "ar" ? data.description_ar : data.description}
                  </p>
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
    : exercises?.exercise?.map((data) => {
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
                  <div style={{ width: "30%" }}>
                    <h4>{language === "ar" ? data.title_ar : data.title}</h4>
                    <p>X{data?.counter}</p>
                  </div>
                  <p>
                    {language === "ar" ? data.description_ar : data.description}
                  </p>
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
      });

  return (
    <>
      <section
        style={{ alignItems: "flex-start" }}
        className="section__container why__container"
        id="blog"
      >
        <div
          style={{ display: "flex", justifyContent: "flex-start" }}
          className="why__image"
        >
          <Stepper myplan={myplan} indexOfToday={indexOfToday} data={data} />
        </div>

        <div className="why__content">
          <>
            <h2 className="section__header">
              {language === "ar" ? "التمارين" : "Exercises"}
            </h2>
            <p>
              {language === "ar"
                ? "كل يوم من أيام الأسبوع له تمارينه الخاصة التي تمت دراستها بعناية لتحقيق اللياقة البدنية"
                : "Each day of the week has its own exercises that have been carefully studied to achieve physical fitness"}
            </p>
            {!is_holiday ?
            <div className="type_exe">
              <button
                onClick={() => {
                  setButt("male");
                }}
                className={butt === "male" && "active"}
              >
                male
              </button>
              <button
                onClick={() => {
                  setButt("feminine");
                }}
                className={butt === "feminine" && "active"}
              >
                feminine
              </button>
            </div>
:""}

            <div className={`why__grid`}>
              {loading === "pending" ? "loading..." : newData}
            </div>
          </>
        </div>
      </section>
    </>
  );
};
export default Exercises;
