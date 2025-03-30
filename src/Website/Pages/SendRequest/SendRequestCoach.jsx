import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "./FormStyles.css";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActSendRequestCoach } from "../../../Redux/User/UserSlice";
import { MenuItem, Select } from "@mui/material";
import { ActIndex } from "../../../Redux/Goal/GoalSlice";

const SendRequestCoach = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [previewImage, setPreviewImage] = useState(null);
  const { language } = useSelector((state) => state.mode);
  const { enqueueSnackbar } = useSnackbar();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [specialization, setSpecialization] = useState({ value: 0, title: "" });
  useEffect(() => {
      dispatch(ActIndex());
    }, [dispatch]);
    const { goals } = useSelector((state) => state.goal);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("description", data.description);
    formData.append("communication", data.communication);
    formData.append("analysis", data.analysis);
    formData.append("education", data.education);
    formData.append("development", data.development);
    formData.append("specialization", specialization.value);

    if (data.media && data.media[0]) {
      formData.append("media", data.media[0]);
    }
    if (data.media_file && data.media_file[0]) {
      formData.append("media_file", data.media_file[0]);
    }

    dispatch(ActSendRequestCoach(formData))
      .unwrap()
      .then((response) => {
        nav("/", { replace: true });
        enqueueSnackbar(`${response.message}`, { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar(`${error}`, { variant: "error" });
      });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="rr">
      <div className="container">
        <motion.div
          className="form-box scrollable"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>{language === "en" ? "Apply to become a coach" : "طلب أن تصبح مدرب"}</h2>
          <form className="class_form" onSubmit={handleSubmit(onSubmit)}>
            <textarea
              placeholder={language === "en" ? "Description" : "الوصف الكامل"}
              {...register("description", { required: language === "en" ? "Description is required" : "الوصف مطلوب" })}
            ></textarea>
            {errors.description && <p className="error-message">{errors.description.message}</p>}

            <input
              type="text"
              placeholder={language === "en" ? "Communication in percentage" : "التواصل بالنسبة المئوية"}
              {...register("communication", { required: language === "en" ? "Communication is required" : "التواصل مطلوب" })}
            />
            {errors.communication && <p className="error-message">{errors.communication.message}</p>}

            <input
              type="text"
              placeholder={language === "en" ? "Analysis in percentage" : "مهارات التحليل بالنسبة المئوية"}
              {...register("analysis", { required: language === "en" ? "Analysis is required" : "التحليل مطلوب" })}
            />
            {errors.analysis && <p className="error-message">{errors.analysis.message}</p>}

            <input
              type="text"
              placeholder={language === "en" ? "Education in percentage" : "التعليم بالنسبة المئوية"}
              {...register("education", { required: language === "en" ? "Education is required" : "التعليم مطلوب" })}
            />
            {errors.education && <p className="error-message">{errors.education.message}</p>}

            <input
              type="text"
              placeholder={language === "en" ? "Development in percentage" : "مهارات التطوير بالنسبة المئوية"}
              {...register("development", { required: language === "en" ? "Development is required" : "التطوير مطلوب" })}
            />
            {errors.development && <p className="error-message">{errors.development.message}</p>}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={specialization.title} // تأكد من أن specialization.title هو القيمة الصحيحة
              label="Specialization"
              onChange={(event) => {
                const selectedId = event.target.value; // الحصول على القيمة المحددة
                const selectedData = goals.find(
                  (data) => data.id === selectedId
                ); // العثور على البيانات المناسبة
                setSpecialization({
                  ...specialization,
                  title:
                    language === "en"
                      ? selectedData?.title
                      : selectedData?.title_ar, // تحديث العنوان بناءً على اللغة
                  value: selectedId, // تحديث القيمة
                });
              }}
              displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return <em style={{ color: "#aaa" }}>Specialization</em>;
                }
                return selected;
              }}
            >
              {goals?.map((data) => {
                return (
                  <MenuItem key={data?.id} value={data?.id}>
                    {language === "en" ? data?.title : data?.title_ar}
                  </MenuItem>
                );
              })}
            </Select>
            <label className="custom-file-upload">
              {language === "en" ? "Select image" : "اختر صورة"}
              <input
                type="file"
                accept="image/*"
                {...register("media", { required: "يجب رفع الصورة" })}
                onChange={handleImageChange}
                hidden
              />
            </label>
            {previewImage && <img src={previewImage} alt="Preview" className="preview-image" />}

            <label className="custom-file-upload">
              {language === "en" ? "Select file" : "اختر ملف الشهادة"}
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                {...register("media_file", { required: "يجب رفع الشهادة" })}
                hidden
              />
            </label>
            {errors.media_file && <p className="error-message">{errors.media_file.message}</p>}

            <motion.button type="submit" className="submit-btn" whileHover={{ scale: 1.05 }}>
              {language === "en" ? "Send" : "إرسال الطلب"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SendRequestCoach;
