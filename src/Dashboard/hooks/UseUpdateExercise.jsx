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
  const { value , language } = useSelector((state) => state.mode);
  const { exercise, loadingShow } = UseDetailsExercise();
  const { checkoutSchema, initialValues , setInitialValues } = ExerciseValidation({
    exercise,
    loadingShow,
  });
  const [stepsCount, setStepsCount] = useState();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "150px",
        width: 250,
      },
    },
  };
  useEffect(()=>{
    setStepsCount(exercise?.steps?.length)
    setInitialValues({...initialValues , 
      title: exercise.title,
      title_ar: exercise.title_ar,
      description: exercise.description,
      description_ar: exercise.description_ar,
      duration: exercise.duration,
      calories:exercise.calories,
      counter:exercise.counter,
      type:exercise.type,
      steps:'',
      media :"",
    });
  }, [exercise])
  
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
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (exercise?.media && exercise.media[0]?.original_url) {
      setPreview(exercise.media[0].original_url);
    }
  }, [exercise]);
  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
  
    if (file) {
      setFieldValue("media", file);
  
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    MenuProps,
    handleStepImageChange,
    isNonMobile,
    language,
    handleStepsCountChange,
    value,
    handleDeleteStep,
    handleImageChange,
    handleFormSubmit,
    setStepsData,
    stepsData,
    checkoutSchema,
    initialValues,
    preview,
    stepsCount,
  };
}
