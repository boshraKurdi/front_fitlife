import { Box, IconButton, MenuItem, Select, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { SetLanguage, SetMode } from "../../../Redux/Mode/ModeSlice";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const { value, language } = useSelector((state) => state.mode);
  const mode = value === "dark" ? "light" : "dark";
  const handleChange = () => {
    dispatch(SetLanguage());
  };
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        width="300px"
        padding="0 1rem"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
      <Box display="flex" margin={"0 1rem"}>
        <IconButton
          onClick={() => {
            dispatch(SetMode(mode));
          }}
        >
          {value === "dark" ? (
            <DarkModeOutlinedIcon style={{ fontSize: "2.3rem" }} />
          ) : (
            <LightModeOutlinedIcon style={{ fontSize: "2.3rem" }} />
          )}
        </IconButton>
      </Box>
      <Box>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"ar"}>Arabic</MenuItem>
        </Select>
      </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
