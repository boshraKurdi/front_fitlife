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
  const { value, language } = useSelector((state) => state.mode);
  const { sections, loading } = useSelector((state) => state.Dsection);
  const { gym, loadingShow } = UseDetalisGym();
  const { checkoutSchema, initialValues, setInitialValues } = GymValidation({
    gym,
    loadingShow,
  });
  const [chipData, setChipData] = useState([]);
  useEffect(() => {
    setInitialValues({
      ...initialValues,
      name: gym.name,
      description: gym.description,
      description_ar: gym.description_ar,
      open: gym.open,
      close: gym.close,
      price: gym.price,
      address: gym.address,
      type: gym.type,
      media: null,
    });
    const newChipData =
      gym?.section &&
      gym.section?.map(
        (e) => ({
          key: e.id,
          label: e?.title,
        }),
        [id]
      );

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
    dispatch(ActUpdate({ data: formData, id: id }))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        enqueueSnackbar(`Update Gym successfully!`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(`Update Gym  faild!`, { variant: "error" });
      });
  };
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (gym?.media && gym.media[0]?.original_url) {
      setPreview(gym.media[0].original_url);
    }
  }, [gym]);
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
  useEffect(() => {
    dispatch(ActIndex());
  }, [dispatch]);
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
    sections,
    loadingShow,
    setChipData,
    MenuProps,
    language,
    isNonMobile,
    value,
    newData,
    loading,
    handleImageChange,
    handleFormSubmit,
    checkoutSchema,
    preview,
    initialValues,
  };
}
