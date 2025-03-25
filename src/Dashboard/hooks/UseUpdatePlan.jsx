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
  const { value } = useSelector((state) => state.mode);
  const { loadingStore, error } = useSelector((state) => state.Dplan);
  const { plan, loadingShow } = useSelector((state) => state.Dplan);
  const { checkoutSchema, initialValues } = PlanValidation({
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
  const [preview, setPreview] = useState(plan?.media && plan?.media[0]?.original_url);

  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue("image", file);

    // إنشاء معاينة للصورة
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
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
    const { meals } = useSelector((state) => state.Dmeal);
  return {
    id,
    plan,
    loadingShow,
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
