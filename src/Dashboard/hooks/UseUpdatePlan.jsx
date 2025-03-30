import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlanValidation from "../validation/PlanValidation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ActUpdate , ActShow } from "../../Redux/Dashboard/Plan/PlanSlice";
import { useSnackbar } from "notistack";
import { ActExerciseIndex } from "../../Redux/Dashboard/Exercise/ExerciseSlice";
import { ActIndex } from "../../Redux/Dashboard/Meal/MealSlice";
export default function UseUpdatePlan() {
  const { enqueueSnackbar } = useSnackbar();
  const nav = useNavigate();
  const { value , language } = useSelector((state) => state.mode);
  const { loadingStore, error } = useSelector((state) => state.Dplan);
  const { plan, loadingShow } = useSelector((state) => state.Dplan);
  const { checkoutSchema, initialValues , setInitialValues } = PlanValidation({
    plan,
    loadingShow,
  });
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { id } = useParams();
  const dispatch = useDispatch();
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "150px",
        width: 250,
      },
    },
  };
  useEffect(()=>{
    setInitialValues({...initialValues , 
      title: plan.title,
    title_ar: plan.title_ar,
    description: plan.description,
    description_ar: plan.description_ar,
    duration: plan.duration,
    muscle: plan.muscle,
    muscle_ar: plan.muscle_ar,
    type: plan.type,
    water: plan.water,
    sleep: plan.sleep,
    type_ar: plan.type_ar,
      media: ''
    });
  } , [plan])
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (plan?.media && plan.media[0]?.original_url) {
      setPreview(plan.media[0].original_url);
    }
  }, [plan]);
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
    const [check, setCheck] = useState({name:plan?.type , name_ar:plan?.type_ar});
  const [time , setTime] = useState(plan?.duration)
  const [chipData, setChipData] = useState([]);

  useEffect(() => {
    if (plan?.exercise) {
      // نفرغ التمارين حسب الأيام
      const days = Array.from({ length: time * 7 }, (_, index) => {
        return plan.exercise
          .filter(
            (exercise) =>
              exercise?.pivot?.day === (index % 7) + 1 &&
              exercise?.pivot?.week === Math.floor(index / 7) + 1
          )
          .map((exercise) => ({
            key: exercise.id,
            label: exercise.title,
          }));
      });
      setChipData(days); // تحديث الحالة
    } else {
      setChipData(Array.from({ length: time * 7 }, () => []));
    }
  }, [plan, time]); // استدعاء `useEffect` عند تغيير `plan` أو `time`
  
  
    const [type] = useState([
      { name: "thigh exercises" },
      { name: "Abdominal exercises" },
      { name: "Stretching exercises" },
      { name: "Sculpting exercises" },
      { name: "food" },
      { name: "water" },
      { name: "sleep" },
    ]);
    const [type_ar] = useState([
      { name: "تمارين الفخذ" },
      { name: "تمارين البطن" },
      { name: "تمارين الشد" },
      { name: "تمارين النحت" },
      { name: "غذاء" },
      { name: "ماء" },
      { name: "نوم" },
    ]);
  
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch , id]);
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("title_ar", values.title_ar);
    formData.append("type", check.name);
    formData.append("type_ar", check.name_ar);
    formData.append("description_ar", values.description_ar);
    formData.append("duration", values.duration);
    formData.append("water", values.water);
    formData.append("sleep", values.sleep);
    formData.append("a", JSON.stringify(chipData.map(day => day.map(item => item.key))));
    formData.append("muscle", values.muscle);
    formData.append("muscle_ar", values.muscle_ar);
    formData.append("media", values.media);
    dispatch(ActUpdate({data:formData , id:id}))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Plan successfully!`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(`Update Plan  faild!`, { variant: "error" });
      });
  };
  const { exercises } = useSelector((state) => state.Dexercise)
  useEffect(()=>{
    dispatch(ActExerciseIndex())
  } ,[dispatch])
  useEffect(() => {
      dispatch(ActIndex());
    }, [dispatch]);
    const handleDurationChange = (event, setFieldValue) => {
      const value = event.target.value;
      setFieldValue("duration", value);
      
      // التأكد من أنه عدد صحيح وإيجابي
      if (!isNaN(value) && value > 0) {
        setTime(parseInt(value, 10)); 
        setChipData(Array.from({ length: value * 7 }, () => [])); // تحديث الحقول بناءً على المدخل
      }
    };
    const { meals } = useSelector((state) => state.Dmeal);
  return {
    id,
    plan,
    loadingShow,
    handleDurationChange,
    check ,
    setCheck,
    MenuProps,
    isNonMobile,
    value,
    chipData,
    exercises,
    meals,
    type ,
    time,
    language,
    setTime ,
    type_ar,
    setChipData,
    preview,
    handleImageChange,
    handleFormSubmit,
    loadingStore,
    error,
    checkoutSchema,
    initialValues,
  };
}
