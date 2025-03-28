import { MenuItem, Select } from "@mui/material";

export default function SelectForm({
  values,
  selectd,
  handleChange,
  touched,
  errors,
  MenuProps,
  data,
  loading ='',
})
{
  console.log(data[0]?.id)
  return (
    <Select
      name="type"
      value={values}
      variant="filled"
      onChange={handleChange}
      error={!!touched && !!errors}
      helperText={touched && errors}
      sx={{ gridColumn: "span 4", fontSize: "1.6rem" }}
      MenuProps={MenuProps}
      displayEmpty
      renderValue={(selected) => {
        if (!selected) {
          return <em style={{ color: "#aaa" }}>{selectd}</em>;
        }
        return selected;
      }}
    >
      
      {loading === 'pending' ? 
       <MenuItem value="0">loading...</MenuItem>
     :
      data?.map((d) => {
        <MenuItem
          sx={{
            fontSize: "1.2rem",
            fontFamily: "system-ui",
            lineHeight: "1.5",
          }}
          key={d?.id}
          value={d?.id}
        >
          {d?.title}
        </MenuItem>;
      })}
    </Select>
  );
}
