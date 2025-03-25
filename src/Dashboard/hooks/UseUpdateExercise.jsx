import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ExerciseValidation from "../validation/ExerciseValidation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ActUpdate } from "../../Redux/Dashboard/Exercise/ExerciseSlice";
import { useSnackbar } from "notistack";
import UseDetailsExercise from "./UseDetailsExercise";
import { useEffect, useState } from "react";
export default function UseUpdateExercise() {
  const { enqueueSnackbar } = useSnackbar();
  const nav = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.mode);
  const { loadingStore, error } = useSelector((state) => state.Dexercise);
  const { exercise, loadingShow } = UseDetailsExercise();
  const { checkoutSchema, initialValues } = ExerciseValidation({
    exercise,
    loadingShow,
  });
 
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "150px",
        width: 250,
      },
    },
  };
  
   const [stepsCount, setStepsCount] = useState(exercise?.steps?.length);
    const [stepsData, setStepsData] = useState([]);
    const handleStepImageChange = (file, index) => {
      const updatedSteps = [...stepsData];
      updatedSteps[index].media_steps = file;
      setStepsData(updatedSteps);
    };
    useEffect(() => {
      if (exercise?.steps) {
        const formattedSteps = exercise.steps.map((step) => ({
          id:step.id || 0 ,
          content: step.content || '',
          content_ar: step.content_ar || '',
          media: null, // إذا حاب تضيف صورة جديدة من المستخدم بعدين
        }));
    
        setStepsData(formattedSteps);
      }
    }, [exercise]);
    const handleDeleteStep = (index) => {
      setStepsData((prevSteps) => prevSteps.filter((_, i) => i !== index));
    };
  
    const handleStepsCountChange = (e) => {
      const count = parseInt(e.target.value) || 0;
    
      // نحدث العداد فقط (هذا يفيدك لو فيه عنصر Input مرتبط فيه)
      setStepsCount(count);
    
      // أهم جزء: التحديث على stepsData نفسه
      setStepsData((prevStepsData) => {
        const currentCount = prevStepsData.length;
    
        if (count > currentCount) {
          // نضيف الفارق بدون مضاعفة
          const difference = count - currentCount;
          const additionalSteps = Array.from({ length: difference }, () => ({
            id: 0,
            content: "",
            content_ar: "",
            media_steps: null,
          }));
    
          return [...prevStepsData, ...additionalSteps];
        } else if (count < currentCount) {
          // نقص العناصر ببساطة
          return prevStepsData.slice(0, count);
        } else {
          // العدد متساوي، ما يحتاج تغيير
          return prevStepsData;
        }
      });
    };
    

  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("title_ar", values.title_ar);
    formData.append("description_ar", values.description_ar);
    formData.append("duration", values.duration);
    formData.append("calories", values.calories);
    formData.append("type", values.type);
     // إضافة خطوات التمرين
     stepsData.forEach((step, index) => {
      formData.append(`steps[${index}][id]`, step.id);
      formData.append(`steps[${index}][content]`, step.content);
      formData.append(`steps[${index}][content_ar]`, step.content_ar);
      if (step.media_steps) {
        formData.append(`media_steps[${index}]`, step.media_steps);
      }
    });

    formData.append("counter", values.counter);
    formData.append("media", values.media);
    dispatch(ActUpdate({data:formData , id:id}))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Exercise successfully!`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(`Update Exercise faild!`, { variant: "error" });
      });
  };
  const [preview, setPreview] = useState(exercise?.media && exercise?.media[0]?.original_url);
  
    const handleImageChange = (event, setFieldValue) => {
      const file = event.currentTarget.files[0];
      setFieldValue("image", file);
  
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

  return {
    exercise,
    loadingShow,
    MenuProps,
    handleStepImageChange,
    isNonMobile,
    handleDeleteStep,
    handleStepsCountChange,
    value,
    handleImageChange,
    handleFormSubmit,
    loadingStore,
    error,
    checkoutSchema,
    initialValues,
    preview ,
    setStepsData ,
    stepsData,
    stepsCount
  };
}
