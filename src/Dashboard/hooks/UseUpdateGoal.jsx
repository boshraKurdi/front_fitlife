import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoalValidation from "../validation/GoalValidation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Chip, styled } from "@mui/material";
import { ActUpdate } from "../../Redux/Dashboard/Goal/GoalSlice";
import { ActIndex } from "../../Redux/Dashboard/Plan/PlanSlice";
import { useSnackbar } from "notistack";
import UseDetalisGoal from "./UseDetailsGoal";
export default function UseUpdateGoal() {
  const { enqueueSnackbar } = useSnackbar();
  const nav = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.mode);
  const { loadingStore, error } = useSelector((state) => state.Dgoal);
  const { goal, loadingShow } = UseDetalisGoal();
  const { checkoutSchema, initialValues } = GoalValidation({
    goal,
    loadingShow,
  });
  const [chipData, setChipData] = useState([
  ]);
  useEffect(() => {
    const newChipData = goal?.plan_level && goal.plan_level.map((e) => ({
      key: e.id,
      label: e.plan?.title+' '+e.level?.title,
    }));
    
    setChipData(newChipData);
  }, [goal]);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "150px",
        width: 250,
      },
    },
  };

  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("title_ar", values.title_ar);
    formData.append("description_ar", values.description_ar);
    formData.append("duration", values.duration);
    chipData.forEach((element) => {
      formData.append("PlanLevel[]", element.key);
    });
    formData.append("calories_min", values.calories_min);
    formData.append("calories_max", values.calories_max);
    formData.append("media", values.media);
    dispatch(ActUpdate({data:formData , id:id}))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Goal successfully!`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(`Update Goal  faild!`, { variant: "error" });
      });
  };
  const [preview, setPreview] = useState(goal?.media && goal?.media[0].original_url);

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
  const { plans, loading } = useSelector((state) => state.Dplan);
  useEffect(() => {
    dispatch(ActIndex());
  }, [dispatch ]);
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

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
    goal,
    loadingShow,
    setChipData,
    MenuProps,
    isNonMobile,
    value,
    newData,
    plans,
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
