import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ServiceValidation from "../validation/ServiceValidation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ActUpdate } from "../../Redux/Dashboard/Service/ServiceSlice";
import { useSnackbar } from "notistack";
import UseDetalisService from "./UseDetailsService";
export default function UseUpdateService() {
  const { enqueueSnackbar } = useSnackbar();
  const nav = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.mode);
  const { loadingStore, error } = useSelector((state) => state.Dservice);
  const { service, loadingShow } = UseDetalisService();
  const { checkoutSchema, initialValues } = ServiceValidation({
    service,
    loadingShow,
  });
  
  const isNonMobile = useMediaQuery("(min-width:600px)");
 

  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("service", values.service);
    formData.append("price", values.price);
    formData.append("duration", values.duration);
 
    dispatch(ActUpdate({data:formData , id:id}))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Service successfully!`, { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar(`Update Service  faild!`, { variant: "error" });
      });
  };
 
 

  return {
    id,
    service,
    loadingShow,
    isNonMobile,
    value,
    handleFormSubmit,
    loadingStore,
    error,
    checkoutSchema,
    initialValues,
  };
}
