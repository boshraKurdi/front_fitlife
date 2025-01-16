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
  const { checkoutSchema, initialValues } = MealValidation({
    meal,
    loadingShow,
  });
  
  const isNonMobile = useMediaQuery("(min-width:600px)");
 

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
    formData.append("category_id", values.category_id);
    formData.append("media", values.media);
    dispatch(ActUpdate({data:formData , id:id}))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Goal successfully!`, { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar(`Update Goal  faild!`, { variant: "error" });
      });
  };
  const [preview, setPreview] = useState(meal?.media && meal?.media[0].original_url);

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
    categories,
    loading,
    handleImageChange,
    handleFormSubmit,
    loadingStore,
    error,
    checkoutSchema,
    initialValues,
    preview
  };
}
