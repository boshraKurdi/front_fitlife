import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CategoryValidation from "../validation/CategoryValidation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ActUpdate } from "../../Redux/Dashboard/Category/CategorySlice";
import { useSnackbar } from "notistack";
import UseDetailsCategory from "./UseDetailsCategory";
import { useEffect } from "react";
export default function UseUpdateCategory() {
  const { enqueueSnackbar } = useSnackbar();
  const nav = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.mode);
  const { loadingStore , error  } = useSelector((state) => state.Dcategory);
  const { category, loadingShow } = UseDetailsCategory();
  const { checkoutSchema, initialValues , setInitialValues } = CategoryValidation({
    category,
    loadingShow,
  });
  useEffect(()=>{
    setInitialValues({...initialValues , 
      title: category.title,
      title_ar: category.title_ar,
    });
  }, [id])
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("title_ar", values.title_ar);
    dispatch(ActUpdate({data:formData , id:id}))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Category successfully!`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(`Update Category  faild!`, { variant: "error" });
      });
  };
  
  return {
    id,
    category,
    loadingShow,
    isNonMobile,
    value,
    loadingStore,
    handleFormSubmit,
    error,
    checkoutSchema,
    initialValues,
  };
}
