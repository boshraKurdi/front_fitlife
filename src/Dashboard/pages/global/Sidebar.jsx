import { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { tokens } from "../../theme";
import CategoryIcon from "@mui/icons-material/Category";
import TableChartIcon from "@mui/icons-material/TableChart";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LayersIcon from "@mui/icons-material/Layers";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LogoutIcon from '@mui/icons-material/Logout';
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { useDispatch, useSelector } from "react-redux";
import ActAuthLogoutPanel from "../../../Redux/Auth/Act/ActAuthLogoutPanel";
import { ActIndex } from "../../../Redux/Dashboard/Goal/GoalSlice";
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
      className={
        title === "Dashboard" ||
        title === "Chat" ||
        title === "لوحة القيادة" ||
        title === "المحادثات"
          ? `linkA dash ${value}`
          : "linkA"
      }
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography style={{ fontSize: "1.3rem" }}>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const nav = useNavigate()
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { admin } = useSelector((state) => state.auth);
  const { value, language } = useSelector((state) => state.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const dispatch = useDispatch()
  const { goals } = useSelector((state) => state.Dgoal)
  useEffect(()=>{
    dispatch(ActIndex())
  } , [dispatch])
  const [openData, setOpenData] = useState({
    one: false,
    two: false,
    three: false,
  });
  function HandelLogout(){
    const promise = dispatch(ActAuthLogoutPanel()).unwrap().then(()=>{
      nav('/dashboard/loginPanel')
      }).catch((error)=>{console.log(error)})
      return () => {
      promise.abort();
    }
  }

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
                  {admin?.roles[0]?.name}
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
                  <Avatar
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    {admin?.name.charAt(0)}
                  </Avatar>
                </Stack>
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ margin: "1rem 3rem", fontSize: "2rem", width: "100%" }}
                >
                  {admin?.name}
                </Typography>
                <Typography
                  variant="h5"
                  color={colors.greenAccent[400]}
                  sx={{ m: "10px 0 0 0" }}
                >
                  {
                  goals?.map((data)=>{
                    if (data.id === admin?.specialization) {
                 return(
                  <>{data?.title}</>
                 )     
                    }
                  })
                }
                </Typography>
              </Box>
            </Box>
          )}

          <Box>
            <Item
              title={language == "en" ? "Dashboard" : "لوحة القيادة"}
              to="/dashboard"
              icon={<HomeOutlinedIcon style={{ fontSize: "2rem" }} />}
              selected={selected}
              setSelected={setSelected}
            />
            {admin?.roles[0]?.name === "coach" ? (
              <Item
                title="Chat"
                to="chat"
                icon={<ChatIcon style={{ fontSize: "2rem" }} />}
                selected={selected}
                setSelected={setSelected}
              />
            ) : (
              ""
            )}
          
              <>
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
                  <AssignmentTurnedInIcon
                    style={{ fontSize: "1.8rem", marginRight: "2rem" }}
                  />{" "}
                  {language == "en" ? "Requests" : "الطلبات المرسلة"}
                  <span style={{ display: "flex" }}>
                    {openData.one ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </span>
                </Typography>
                <Collapse in={openData.one} timeout="auto" unmountOnExit>
                {admin?.roles && admin?.roles[0]?.name == "coach" ?
                  <Box sx={{ ml: 4 }}>
                    <Item
                      title={
                        language == "en" ? "request goal" : "طلبات الاهداف"
                      }
                      to="/dashboard/requestGoals"
                      icon={<AssignmentIcon style={{ fontSize: "1.7rem" }} />}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </Box>
                  :""}
                  {admin?.roles && admin?.roles[0]?.name == "super" ? (
                    <Box sx={{ ml: 4 }}>
                      <Item
                        title={
                          language == "en"
                            ? "request admin"
                            : "طلبات الترقية الى ادمن"
                        }
                        to="/dashboard/requestAdmin"
                        icon={<AssignmentIcon style={{ fontSize: "1.7rem" }} />}
                        selected={selected}
                        setSelected={setSelected}
                      />
                    </Box>
                  ) : (
                    ""
                  )}
                  {admin?.roles && admin?.roles[0]?.name == "admin" ? (
                    <Box sx={{ ml: 4 }}>
                      <Item
                        title={
                          language == "en"
                            ? "request coach"
                            : "طلبات الترقية الى مدربين"
                        }
                        to="/dashboard/requestCoach"
                        icon={<AssignmentIcon style={{ fontSize: "1.7rem" }} />}
                        selected={selected}
                        setSelected={setSelected}
                      />
                    </Box>
                  ) : (
                    ""
                  )}
                </Collapse>
              </>
            {admin?.roles && admin?.roles[0]?.name !== "admin" ? (
              <>
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
                  <TableChartIcon
                    style={{ fontSize: "1.8rem", marginRight: "2rem" }}
                  />{" "}
                  {language == "en" ? "Data" : "البيانات"}
                  <span style={{ display: "flex" }}>
                    {openData.two ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </span>
                </Typography>

                <Collapse in={openData.two} timeout="auto" unmountOnExit>
                  <Box sx={{ ml: 4 }}>
                    <Item
                      title={language == "en" ? "Goal" : "الاهداف"}
                      to="/dashboard/goal"
                      icon={<AssignmentIcon style={{ fontSize: "1.7rem" }} />}
                      selected={selected}
                      setSelected={setSelected}
                    />

                    <Item
                      title={language == "en" ? "User" : "المستخدمين"}
                      to="/dashboard/user"
                      icon={
                        <AssignmentIndIcon style={{ fontSize: "1.7rem" }} />
                      }
                      selected={selected}
                      setSelected={setSelected}
                    />

                    <Item
                      title={language == "en" ? "Plan" : "الخطط"}
                      to="/dashboard/plan"
                      icon={
                        <AppRegistrationIcon style={{ fontSize: "1.7rem" }} />
                      }
                      selected={selected}
                      setSelected={setSelected}
                    />
                    <Item
                      title={language == "en" ? "Meal" : "الوجبات"}
                      to="/dashboard/meal"
                      icon={
                        <RestaurantMenuIcon style={{ fontSize: "1.7rem" }} />
                      }
                      selected={selected}
                      setSelected={setSelected}
                    />
                    <Item
                      title={language == "en" ? "Category" : "الفئات"}
                      to="/dashboard/category"
                      icon={<CategoryIcon style={{ fontSize: "1.7rem" }} />}
                      selected={selected}
                      setSelected={setSelected}
                    />
                    {admin?.roles[0]?.name === "super" ? (
                      <Item
                        title={language == "en" ? "Gym" : "النوادي الرياضة"}
                        to="/dashboard/gym"
                        icon={
                          <FitnessCenterIcon style={{ fontSize: "1.7rem" }} />
                        }
                        selected={selected}
                        setSelected={setSelected}
                      />
                    ) : (
                      ""
                    )}
                    <Item
                      title={language == "en" ? "Exercise" : "التمارين"}
                      to="/dashboard/exercise"
                      icon={
                        <SportsVolleyballIcon style={{ fontSize: "1.7rem" }} />
                      }
                      selected={selected}
                      setSelected={setSelected}
                    />
                    {admin?.roles[0]?.name === "super" ? (
                      <Item
                        title={language == "en" ? "Service" : "الخدمات"}
                        to="/dashboard/service"
                        icon={
                          <AttachMoneyIcon style={{ fontSize: "1.7rem" }} />
                        }
                        selected={selected}
                        setSelected={setSelected}
                      />
                    ) : (
                      ""
                    )}
                  </Box>
                </Collapse>
              </>
            ) : (
              ""
            )}
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
              <LayersIcon style={{ fontSize: "1.8rem", marginRight: "2rem" }} />{" "}
              {language == "en" ? "pages" : "الصفحات"}
              <span style={{ display: "flex" }}>
                {openData.three ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </span>
            </Typography>
            <Collapse in={openData.three} timeout="auto" unmountOnExit>
              <Box sx={{ ml: 4 }}>
                <Item
                  title={language === "en" ? "Calendar" : "تقويم"}
                  to="/dashboard/calendar"
                  icon={
                    <CalendarTodayOutlinedIcon style={{ fontSize: "1.7rem" }} />
                  }
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title={
                    language === "en" ? "FAQ Page" : "صفحة الأسئلة الشائعة"
                  }
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
                HandelLogout()
              }}
            >
              <LogoutIcon
                style={{ fontSize: "1.8rem", marginRight: "2rem" }}
              />{" "}
              {language === "en" ? "logout" : "تسجيل الخروج"}
              <span style={{ display: "flex" }}>
                
              </span>
            </Typography>
          </Box>
        </Menu>
      </div>
    </Box>
  );
};

export default Sidebar;
