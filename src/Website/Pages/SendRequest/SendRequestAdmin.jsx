import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "./FormStyles.css";
import { useSnackbar } from 'notistack';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActSendRequestAdmin } from "../../../Redux/User/UserSlice";
import { useNavigate } from "react-router-dom";

const SendRequestAdmin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [previewImage, setPreviewImage] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.mode);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("description", data.description);
    formData.append("why_admin", data.why_admin);
    
    if (data.media && data.media[0]) {
        formData.append("media", data.media[0]);
    }
    if (data.media_file && data.media_file[0]) {
        formData.append("media_file", data.media_file[0]);
    }

    dispatch(ActSendRequestAdmin(formData)).unwrap()
      .then((response) => {
        nav('/', { replace: true });
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
          <h2>التسجيل كأدمن</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input 
              type="text" 
              placeholder={language === 'en' ? "description" : "الوصف"} 
              {...register("description", { required: "الوصف مطلوب" })} 
            />
            {errors.description && <p className="error-message">{errors.description.message}</p>}

            <input 
              type="text" 
              placeholder={language === 'en' ? "Why do you want to become an admin?" : "لماذا تريد ان تصبح ادمن"} 
              {...register("why_admin", { required: "مطلوب" })} 
            />
            {errors.why_admin && <p className="error-message">{errors.why_admin.message}</p>}

            <label className="custom-file-upload">
              {language === 'en' ? "select image" : "اختر صورة"}
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
              {language === 'en' ? "select file" : "اختر ملف الشهادة"}
              <input 
                type="file" 
                accept=".pdf,.doc,.docx" 
                {...register("media_file", { required: "يجب رفع الشهادة" })} 
                hidden 
              />
            </label>
            {errors.media_file && <p className="error-message">{errors.media_file.message}</p>}

            <motion.button type="submit" className="submit-btn" whileHover={{ scale: 1.05 }}>
              {language === 'en' ? "send" : "إرسال الطلب"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SendRequestAdmin;
