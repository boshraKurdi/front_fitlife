import { TextField } from "@mui/material";
import { useSelector } from "react-redux";

export default function InputForm({
  handleBlur,
  handleChange,
  values,
  touched,
  errors,
  title,
  name ,
  type ="text" 
}) {
  const { value } = useSelector((state) => state.mode);
  return (
    <TextField
      fullWidth
      variant="filled"
      type={type}
      label={title}
      onBlur={handleBlur}
      onChange={handleChange}
      value={values}
      name={name}
      error={!!touched && !!errors}
      helperText={touched && errors}
      sx={{ gridColumn: "span 2" }}
      InputProps={{
        sx: { fontSize: "1.5rem" },
      }}
      InputLabelProps={{
        sx: {
          fontSize: "1.6rem",
          color: value === "dark" ? "#fff" : "#000",
          "&.Mui-focused": {
            color: value === "dark" ? "#fff" : "#000",
          },
        },
      }}
    />
  );
}
