import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ExerciseValidation from "../validation/ExerciseValidation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ActUpdate } from "../../Redux/Dashboard/Exercise/ExerciseSlice";
import { useSnackbar } from "notistack";
import UseDetailsExercise from "./UseDetailsExercise";
import { useEffect, useState } from "react";
import { Chip, styled } from "@mui/material";
export default function UseUpdateExercise() {
  const { enqueueSnackbar } = useSnackbar();
  const nav = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.mode);
  const { loadingStore, error } = useSelector((state) => state.Dexercise);
  const { exercise, loadingShow } = UseDetailsExercise();
  const { checkoutSchema, initialValues } = ExerciseValidation({
    exercise,
    loadingShow,
  });
 
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "150px",
        width: 250,
      },
    },
  };
  const [chipData, setChipData] = useState([
  ]);
  useEffect(() => {
    const newChipData = exercise?.steps && exercise.steps.map((e) => ({
      key: e.id,
      content: e.content,
      content_ar: e.content
    }));
    setChipData(newChipData);
  }, [exercise]);

  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("title_ar", values.title_ar);
    formData.append("description_ar", values.description_ar);
    formData.append("duration", values.duration);
    formData.append("calories", values.calories);
    chipData.forEach((step, index) => {
      formData.append(`steps[${index}][content]`, step.content);
      formData.append(`steps[${index}][content_ar]`, step.content_ar);
  });
    formData.append("counter", values.counter);
    formData.append("media", values.media);
    dispatch(ActUpdate({data:formData , id:id}))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Exercise successfully!`, { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar(`Update Exercise faild!`, { variant: "error" });
      });
  };
  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue("media", file);
  };
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
          label={data.content}
          onDelete={handleDelete(data)}
        />
      </ListItem>
    );
  });
  return {
    exercise,
    loadingShow,
    MenuProps,
    setChipData,
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
