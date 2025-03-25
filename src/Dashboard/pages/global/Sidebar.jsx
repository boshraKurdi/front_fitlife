import { useState } from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import {
  Avatar,
  Box,
  Collapse,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { tokens } from "../../theme";
import TableChartIcon from '@mui/icons-material/TableChart';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LayersIcon from '@mui/icons-material/Layers';
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BarChartIcon from '@mui/icons-material/BarChart';
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { useSelector } from "react-redux";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { value } = useSelector((state) => state.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      className={title === 'Dashboard' ? `linkA dash ${value}` : "linkA"}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography style={{ fontSize: "1.3rem" }}>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { admin } = useSelector((state) => state.auth);
  const { value } = useSelector((state) => state.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [openData, setOpenData] = useState({
    one: false,
    two: false,
    three: false,
  });

  const handleToggle = (num) => {
    if (num == 1) {
      setOpenData({
        ...openData,
        one: !openData.one,
        two: false,
        three: false,
        four: false,
      });
    } else if (num == 2) {
      setOpenData({
        ...openData,
        one: false,
        two: !openData.two,
        three: false,
        four: false,
      });
    } else if (num == 3) {
      setOpenData({
        ...openData,
        one: false,
        two: false,
        three: !openData.three,
        four: false,
      });
    } else {
      setOpenData({
        ...openData,
        one: false,
        two: false,
        three: false,
        four: !openData.four,
      });
    }
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <div>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box
                textAlign="center"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar style={{fontSize:'1.6rem' , fontWeight:'bold' , width:"50px" , height:'50px'}}>{admin?.name.charAt(0)}</Avatar>
                </Stack>
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ margin: "1rem 3rem", fontSize: "2rem", width: "100%" }}
                >
                  {admin?.name}
                </Typography>
              </Box>
            </Box>
          )}

          <Box >
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon style={{ fontSize: "2rem" }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              className={`ll ${value}`}
              color={colors.grey[300]}
              sx={{
                m: "15px 0 5px 20px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={() => {
                handleToggle(1);
              }}
            >
             <AssignmentTurnedInIcon style={{fontSize:'1.8rem' , marginRight:"2rem"}}/> Requests
              <span style={{display:'flex'  , marginLeft: "auto" }}>
                {openData.one ? <KeyboardArrowDownIcon/> : <ChevronRightIcon/>}
              </span>
            </Typography>
            <Collapse in={openData.one} timeout="auto" unmountOnExit>
              <Box sx={{ ml: 4 }}>
                <Item
                  title="request goal"
                  to="/dashboard/requestGoals"
                  icon={<AssignmentIcon style={{ fontSize: "1.7rem" }} />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            </Collapse>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              className={`ll ${value}`}
              sx={{
                m: "15px 0 5px 20px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={() => {
                handleToggle(2);
              }}
            >
              <TableChartIcon style={{fontSize:'1.8rem' , marginRight:"2rem"}}/> Data
              <span style={{display:'flex'  , marginLeft: "auto" }}>
                {openData.two ? <KeyboardArrowDownIcon/> : <ChevronRightIcon />}
              </span>
            </Typography>

            <Collapse in={openData.two} timeout="auto" unmountOnExit>
              <Box sx={{ ml: 4 }}>
                <Item
                  title="Goal"
                  to="/dashboard/goal"
                  icon={<AssignmentIcon style={{ fontSize: "1.7rem" }} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="User"
                  to="/dashboard/user"
                  icon={<AssignmentIndIcon style={{ fontSize: "1.7rem" }} />}
                  selected={selected}
                  setSelected={setSelected}
                />

                <Item
                  title="Plan"
                  to="/dashboard/plan"
                  icon={<AppRegistrationIcon style={{ fontSize: "1.7rem" }} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Meal"
                  to="/dashboard/meal"
                  icon={<RestaurantMenuIcon style={{ fontSize: "1.7rem" }} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Category"
                  to="/dashboard/category"
                  icon={<RestaurantMenuIcon style={{ fontSize: "1.7rem" }} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Gym"
                  to="/dashboard/gym"
                  icon={<FitnessCenterIcon style={{ fontSize: "1.7rem" }} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Exercise"
                  to="/dashboard/exercise"
                  icon={<SportsVolleyballIcon style={{ fontSize: "1.7rem" }} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Service"
                  to="/dashboard/service"
                  icon={<AttachMoneyIcon style={{ fontSize: "1.7rem" }} />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            </Collapse>

            <Typography
              variant="h6"
              className={`ll ${value}`}
              color={colors.grey[300]}
              sx={{
                m: "15px 0 5px 20px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={() => {
                handleToggle(3);
              }}
            >
              <LayersIcon style={{fontSize:'1.8rem' , marginRight:"2rem"}}/> pages
              <span style={{display:'flex'  , marginLeft: "auto" }}>
                {openData.three ? <KeyboardArrowDownIcon/> : <ChevronRightIcon/>}
              </span>
            </Typography>
            <Collapse in={openData.three} timeout="auto" unmountOnExit>
              <Box sx={{ ml: 4 }}>
                <Item
                  title="Calendar"
                  to="/dashboard/calendar"
                  icon={
                    <CalendarTodayOutlinedIcon style={{ fontSize: "1.7rem" }} />
                  }
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="FAQ Page"
                  to="/dashboard/faq"
                  icon={
                    <HelpOutlineOutlinedIcon style={{ fontSize: "1.7rem" }} />
                  }
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            </Collapse>

            <Typography
              variant="h6"
              className={`ll ${value}`}
              color={colors.grey[300]}
              sx={{
                m: "15px 0 5px 20px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={() => {
                handleToggle(4);
              }}
            >
              <BarChartIcon style={{fontSize:'1.8rem' , marginRight:"2rem"}}/> charts
              <span style={{display:'flex'  , marginLeft: "auto" }}>
                {openData.four ? <KeyboardArrowDownIcon/> : <ChevronRightIcon/>}
              </span>
            </Typography>
            <Collapse in={openData.four} timeout="auto" unmountOnExit>
              <Box sx={{ ml: 4 }}>
                <Item
                  title="Bar Chart"
                  to="/dashboard/bar"
                  icon={<BarChartOutlinedIcon style={{ fontSize: "1.7rem" }} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Pie Chart"
                  to="/dashboard/pie"
                  icon={
                    <PieChartOutlineOutlinedIcon
                      style={{ fontSize: "1.7rem" }}
                    />
                  }
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Line Chart"
                  to="/dashboard/line"
                  icon={<TimelineOutlinedIcon style={{ fontSize: "1.7rem" }} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Geography Chart"
                  to="/dashboard/geography"
                  icon={<MapOutlinedIcon style={{ fontSize: "1.7rem" }} />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            </Collapse>
          </Box>
        </Menu>
      </div>
    </Box>
  );
};

export default Sidebar;
