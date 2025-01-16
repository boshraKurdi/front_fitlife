import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GymValidation from "../validation/GymValidation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Chip, styled } from "@mui/material";
import { ActUpdate } from "../../Redux/Dashboard/Gym/GymSlice";
import { ActIndex } from "../../Redux/Dashboard/Section/SectionSlice";
import { useSnackbar } from "notistack";
import UseDetalisGym from "./UseDetailsGym";
export default function UseUpdateGym() {
  const { enqueueSnackbar } = useSnackbar();
  const nav = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.mode);
  const { sections , loading , error } = useSelector((state) => state.Dsection);
  const { loadingStore  } = useSelector((state) => state.Dgym);
  const { gym, loadingShow } = UseDetalisGym();
  const { checkoutSchema, initialValues } = GymValidation({
    gym,
    loadingShow,
  });
  const [chipData, setChipData] = useState([
  ]);
  useEffect(() => {
    const newChipData = gym?.section && gym.section?.map((e) => ({
      key: e.id,
      label: e?.title
    }));
    
    setChipData(newChipData);
  }, [gym]);
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
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("description_ar", values.description_ar);
    formData.append("price", values.price);
    formData.append("type", values.type);
    formData.append("open", values.open);
    formData.append("close", values.close);
    chipData.forEach((element) => {
      formData.append("section[]", element.key);
    });
    formData.append("address", values.address);
    // formData.append("lat", values.calories_max);
    // formData.append("lon", values.media);
    dispatch(ActUpdate({data:formData , id:id}))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Gym successfully!`, { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar(`Update Gym  faild!`, { variant: "error" });
      });
  };
  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue("media", file);
  };
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
    gym,
    sections,
    loadingShow,
    setChipData,
    MenuProps,
    isNonMobile,
    value,
    newData,
    loadingStore,
    loading,
    handleImageChange,
    handleFormSubmit,
    error,
    checkoutSchema,
    initialValues,
  };
}
