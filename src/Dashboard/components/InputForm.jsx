import { TextField, InputAdornment, IconButton, Box } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";

export default function InputForm({
  handleBlur,
  handleChange,
  values,
  touched,
  errors,
  title,
  name,
  num = 1,
  type = "text",
}) {
  const { value } = useSelector((state) => state.mode);
  return (
    <TextField
    maxRows={num}
    multiline
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
    sx={{
      gridColumn: "span 2",
      "& .MuiFormHelperText-root": {
        fontSize: "1.3rem",
      },
      "& .MuiFilledInput-root": {
        borderBottom: `2px solid ${!!errors ? "red" : "#3da58a"}`,
        "&.Mui-error": {
          borderBottom: "2px solid red",
        },
      },
      "& .MuiFilledInput-root::before": { borderBottom: "none !important" },
      "& .MuiFilledInput-root::after": { borderBottom: "none !important" },
    }}
    InputProps={{
      sx: { fontSize: "1.5rem" },
      endAdornment:
        type === "number" ? (
          <div className="up_down">
          <InputAdornment style={{padding:"0" , margin:"0.5rem .5rem"}} position="start">
            <IconButton className="up" onClick={() => handleChange({ target: { name, value: Math.max(Number(values) - 1, 0) } })}>
              <Remove />
            </IconButton>
          </InputAdornment>
           <InputAdornment style={{padding:"0" , margin:"0.5rem .5rem"}} position="start">
           <IconButton className="dwon" onClick={() => handleChange({ target: { name, value: Number(values) + 1 } })}>
             <Add />
           </IconButton>
         </InputAdornment>
         </div>
        ) : null,
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
