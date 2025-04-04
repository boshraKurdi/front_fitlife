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
  const { value , language } = useSelector((state) => state.mode);
  const { goal, loadingShow } = UseDetalisGoal();
  const { checkoutSchema, initialValues ,setInitialValues } = GoalValidation({
    goal,
    loadingShow,
  });
  const [chipData, setChipData] = useState([
  ]);
  useEffect(() => {
    setInitialValues({...initialValues , 
      title: goal.title ,
    title_ar: goal.title_ar,
    description: goal.description,
    description_ar: goal.description_ar,
    duration: goal.duration,
    calories_min:goal.calories_min,
    calories_max:goal.calories_max,
    Plan:'',
    media: '' ,
    });
    const newChipData = goal?.plan && goal?.plan?.map((e) => ({
      key: e.id,
      label: e?.title+' '+e?.title,
    }), [id]);
    
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
    console.log(values)
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("title_ar", values.title_ar);
    formData.append("description_ar", values.description_ar);
    formData.append("duration", values.duration);
    chipData.forEach((element) => {
      formData.append("Plan[]", element.key);
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
   const [preview, setPreview] = useState();
  useEffect(() => {
    if (goal?.media && goal.media[0]?.original_url) {
      setPreview(goal.media[0].original_url);
    }
  }, [goal]);
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
  const newData = chipData?.map((data) => {
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
    setChipData,
    MenuProps,
    isNonMobile,
    language,
    value,
    newData,
    plans,
    loading,
    handleImageChange,
    handleFormSubmit,
    loadingShow,
    checkoutSchema,
    initialValues,
    preview,
  };
}
