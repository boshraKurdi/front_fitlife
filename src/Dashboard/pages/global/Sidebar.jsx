import { useState } from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography style={{fontSize: '1.3rem'}}>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

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
                  <MenuOutlinedIcon  />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              
              to="/dashboard"
              icon={<HomeOutlinedIcon style={{fontSize: '2rem'}}/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Goal"
              to="/dashboard/goal"
              icon={<AssignmentIcon style={{fontSize: '1.7rem'}} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="User"
              to="/dashboard/user"
              icon={<AssignmentIndIcon style={{fontSize: '1.7rem'}} />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
              title="Plan"
              to="/dashboard/plan"
              icon={<AppRegistrationIcon style={{fontSize: '1.7rem'}} />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Meal"
              to="/dashboard/meal"
              icon={<RestaurantMenuIcon style={{fontSize: '1.7rem'}} />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Gym"
              to="/dashboard/gym"
              icon={<FitnessCenterIcon style={{fontSize: '1.7rem'}} />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
              title="Exercise"
              to="/dashboard/exercise"
              icon={<SportsVolleyballIcon style={{fontSize: '1.7rem'}} />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Service"
              to="/dashboard/service"
              icon={<AttachMoneyIcon style={{fontSize: '1.7rem'}} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Calendar"
              to="/dashboard/calendar"
              icon={<CalendarTodayOutlinedIcon style={{fontSize: '1.7rem'}} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/dashboard/faq"
              icon={<HelpOutlineOutlinedIcon style={{fontSize: '1.7rem'}} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/dashboard/bar"
              icon={<BarChartOutlinedIcon style={{fontSize: '1.7rem'}} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/dashboard/pie"
              icon={<PieChartOutlineOutlinedIcon style={{fontSize: '1.7rem'}} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/dashboard/line"
              icon={<TimelineOutlinedIcon style={{fontSize: '1.7rem'}} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/dashboard/geography"
              icon={<MapOutlinedIcon style={{fontSize: '1.7rem'}} />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </div>
    </Box>
  );
};

export default Sidebar;
