import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlanValidation from "../validation/PlanValidation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Chip, styled } from "@mui/material";
import { ActUpdate , ActShow } from "../../Redux/Dashboard/Plan/PlanSlice";
import { useSnackbar } from "notistack";
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
  useEffect(() => {
    const newChipData =plan?.levels && plan.levels.map((e) => ({
      key: e.id,
      label: e?.title
    }));
    setChipData(newChipData);
  } , [plan])
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
  
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch , id]);
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("title_ar", values.title_ar);
    formData.append("description_ar", values.description_ar);
    formData.append("duration", values.duration);
    chipData.forEach((element) => {
      formData.append("levels[]", element.key);
    });
    formData.append("muscle", values.muscle);
    formData.append("muscle_ar", values.muscle_ar);
    formData.append("media", values.media);
    dispatch(ActUpdate({data:formData , id:id}))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Plan successfully!`, { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar(`Update Plan  faild!`, { variant: "error" });
      });
  };
  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue("media", file);
  };
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));
  const [chipData, setChipData] = useState([]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };
  const newData = chipData.map((data) => {
    return (
      <ListItem key={data.key}>
        <Chip
          sx={{ fontSize: "1.5rem" }}
          label={data.label}
          onDelete={handleDelete(data)}
        />
      </ListItem>
    );
  });
  return {
    id,
    plan,
    loadingShow,
    setChipData,
    MenuProps,
    isNonMobile,
    value,
    newData,
    handleImageChange,
    handleFormSubmit,
    loadingStore,
    error,
    checkoutSchema,
    initialValues,
  };
}
