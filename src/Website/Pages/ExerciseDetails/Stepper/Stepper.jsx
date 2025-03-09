import { useSelector } from "react-redux";
import "./Stepper.css";
import CustomizedDialogs from "../CustomizedDialogs";
import { useState } from "react";
export default function Stepper({ steps }) {
  const { value, language } = useSelector((state) => state.mode);
  const [open, setOpen] = useState({status:false , index:0});
  // const [index, setIndex] = useState(0);

  const handleOpenDialog = (index) => {
    setOpen({...open , status:true , index:(index-1)});
  };

  const handleCloseDialog = () => {
    setOpen({...open , status:false});
  };
  const newD = steps
    ? steps?.map((data, index) => {
        return (
          <>
            <div  className="timeline_container right_container">
              <span
                style={{ right: language === "ar" && "4%" }}
                className={`num_img ${value}`}
              >
                {++index}
              </span>
              {/* <div className="class_step"> */}

              <div onClick={()=>{handleOpenDialog(index)}} className={`text_body ${value}`}>
                <img
                  src={data?.media && data?.media[0]?.original_url}
                  alt="none"
                />
                <p>{language === "ar" ? data?.content_ar : data?.content}</p>
              </div>
              {/* </div> */}
            </div>
            <CustomizedDialogs language={language} setOpen={setOpen} index={index} steps={steps} open={open} handleClose={handleCloseDialog} />
          </>
          
        );
      })
    : "";
  return <div className="timeline">{newD}</div>;
}
