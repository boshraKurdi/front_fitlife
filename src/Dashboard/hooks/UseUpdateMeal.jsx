import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealValidation from "../validation/MealValidation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ActUpdate } from "../../Redux/Dashboard/Meal/MealSlice";
import { ActIndex } from "../../Redux/Dashboard/Category/CategorySlice";
import { useSnackbar } from "notistack";
import UseDetalisMeal from "./UseDetailsMeal";
export default function UseUpdateMeal() {
  const { enqueueSnackbar } = useSnackbar();
  const nav = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.mode);
  const { loadingStore, error } = useSelector((state) => state.Dmeal);
  const { meal, loadingShow } = UseDetalisMeal();
  const { checkoutSchema, initialValues ,setInitialValues } = MealValidation({
    meal,
    loadingShow,
  });
  
  const isNonMobile = useMediaQuery("(min-width:600px)");

  
  const [stepsData, setStepsData] = useState([]);
  const [stepsCount, setStepsCount] = useState(meal?.ingredients?.length);
  const handleStepImageChange = (file, index) => {
    const updatedSteps = [...stepsData];
    updatedSteps[index].media_ingredients = file;
    setStepsData(updatedSteps);
  };
  useEffect(()=>{
    setInitialValues({...initialValues , 
      title: meal.title,
      title_ar: meal.title_ar,
      description: meal.description,
      description_ar: meal.description_ar,
      calories:meal.calories,
      fats:meal.fats,
      carbohydrates:meal.carbohydrates,
      proteins:meal.proteins,
      prepare:meal.prepare,
      prepare_ar:meal.prepare_ar,
      category_id:meal.category_id,
      ingredients: '',
      media: '' ,
    });
  } , [id] )
  useEffect(() => {
    if (meal?.ingredients) {
      const formattedSteps = meal.ingredients.map((step) => ({
        id: step.id || 0,
        name: step.name || '',
        name_ar: step.name_ar || '',
        num: step.num || 0,
        media_ingredients: null,
      }));
      setStepsData(formattedSteps);
    }
  }, [meal]);
  const handleDeleteStep = (index) => {
    setStepsData((prevSteps) => prevSteps.filter((_, i) => i !== index));
  };
  const handleStepChange = (index, field, value) => {
    const updatedSteps = [...stepsData];
    updatedSteps[index][field] = value;
    setStepsData(updatedSteps);
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
          name: "",
          name_ar: "",
          num: 0,
          media_ingredients: null,
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
    formData.append("components", values.components);
    formData.append("components_ar", values.components_ar);
    formData.append("prepare", values.prepare);
    formData.append("prepare_ar", values.prepare_ar);
    formData.append("calories", values.calories);
    formData.append("fats", values.fats);
    formData.append("carbohydrates", values.carbohydrates);
    formData.append("proteins", values.proteins);
    formData.append("category_id", values.category_id);
    // إضافة خطوات التمرين
    stepsData.forEach((step, index) => {
      formData.append(`ingredients[${index}][name]`, step.name);
      formData.append(`ingredients[${index}][name_ar]`, step.name_ar);
      formData.append(`ingredients[${index}][num]`, step.num);
      if (step.media_ingredients) {
        formData.append(`media_ingredients[${index}]`, step.media_ingredients);
      }
    });
    formData.append("media", values.media);
    dispatch(ActUpdate({data:formData , id:id}))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Meal successfully!`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(`Update Meal  faild!`, { variant: "error" });
      });
  };
  const [preview, setPreview] = useState(meal?.media && meal?.media[0]?.original_url);

  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue("media", file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const { categories, loading } = useSelector((state) => state.Dcategory);
  useEffect(() => {
    dispatch(ActIndex());
  }, [dispatch ]);
 

  return {
    id,
    meal,
    loadingShow,
    isNonMobile,
    value,
    handleDeleteStep,
    handleStepChange,
    stepsData,
    handleStepsCountChange,
    setStepsData,
    stepsCount,
    categories,
    loading,
    handleImageChange,
    handleStepImageChange ,
    handleFormSubmit,
    loadingStore,
    error,
    checkoutSchema,
    initialValues,
    preview,
  };
}
