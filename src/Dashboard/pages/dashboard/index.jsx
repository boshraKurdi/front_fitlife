import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import ChatIcon from "@mui/icons-material/Chat";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActPogress } from "../../../Redux/Dashboard/Admin/AdminSlice";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const { progress } = useSelector((state) => state.admin);
  const { language } = useSelector((state) => state.mode);
  const { admin } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(ActPogress());
  }, [dispatch]);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title={language === "en" ? "DASHBOARD" : "لوحة القيادة"}
          subtitle={
            language === "en"
              ? "Welcome to your dashboard"
              : "مرحباً بكم في لوحة التحكم الخاصة بك"
          }
        />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        {admin?.roles[0]?.name != "admin" ?
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          sx={{
            borderRadius: "8px",
            boxShadow: `3px 3px 5px ${colors.primary[700]}`,
          }}
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            status={false}
            title={
              admin?.roles[0]?.name != "super"
                ? `${progress?.TotalCaloriesRateForNotCoach} `
                : `${progress?.TotalCaloriesRate} `
            }
            subtitle={
              language === "en" ? "Average calories" : "متوسط السعرات الحرارية"
            }
            // progress="0.75"
            // increase="+14%"
            icon={
              <AccessibilityIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        :
        <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        sx={{
          borderRadius: "8px",
          boxShadow: `3px 3px 5px ${colors.primary[700]}`,
        }}
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          status={false}
          title={`${progress?.countRequestCoach} `
          }
          subtitle={
            language === "en" ? "count Request Coach" : "طلبات الترقية الى مدرب"
          }
          // progress="0.75"
          // increase="+14%"
          icon={
            <AccessibilityIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>}
        {admin?.roles[0]?.name === "super" || admin?.roles[0]?.name === "admin" ? (
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            sx={{
              borderRadius: "8px",
              boxShadow: `3px 3px 5px ${colors.primary[700]}`,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={`${progress?.countChatBotSession}`}
              subtitle={
                language === "en" ? "Chat Bot Session" : "عدد محاداثات البوت"
              }
              progress={`${
                progress?.countChatBotSession / progress?.countChatSession
              }`}
              increase={`${
                (progress?.countChatBotSession / progress?.countChatSession) *
                100
              }%`}
              icon={
                <FaceRetouchingNaturalIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        ) : (
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            sx={{
              borderRadius: "8px",
              boxShadow: `3px 3px 5px ${colors.primary[700]}`,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              status={false}
              title={`${progress?.drinkUserWaterTotalForNotCoach}`}
              subtitle={
                language === "en" ? "Average water intake" : "متوسط شرب الماء"
              }
              icon={
                <WaterDropIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        )}
        {admin?.roles[0]?.name === "super" || admin?.roles[0]?.name === "admin"  ? (
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            sx={{
              borderRadius: "8px",
              boxShadow: `3px 3px 5px ${colors.primary[700]}`,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={`${progress?.countCoach}`}
              subtitle={language === "en" ? "Count Coach" : "عدد المدربين"}
              progress={`${progress?.countCoach / progress?.countUserSginUp}`}
              increase={`${
                Math.floor((progress?.countCoach / progress?.countUserSginUp) * 100
        )}%`}
              icon={
                <PersonAddIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        ) : (
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            sx={{
              borderRadius: "8px",
              boxShadow: `3px 3px 5px ${colors.primary[700]}`,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              status={false}
              title={`${progress?.drinkUserSleepTotalForNotCoach}`}
              subtitle={
                language === "en"
                  ? "Average hours of sleep"
                  : "متوسط ساعات النوم"
              }
              icon={
                <AirlineSeatIndividualSuiteIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        )}
        {admin?.roles[0]?.name === "super" ||
        admin?.roles[0]?.name === "admin" ? (
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            sx={{
              borderRadius: "8px",
              boxShadow: `3px 3px 5px ${colors.primary[700]}`,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={`${progress?.countChatCoachSession}`}
              subtitle={
                language === "en"
                  ? "Chat Coach Session"
                  : "عدد محادثات المدربين"
              }
              progress={`${
                progress?.countChatCoachSession / progress?.countChatSession
              }`}
              increase={`${
                (progress?.countChatCoachSession / progress?.countChatSession) *
                100
              }%`}
              icon={
                <ChatIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        ) : (
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            sx={{
              borderRadius: "8px",
              boxShadow: `3px 3px 5px ${colors.primary[700]}`,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              status={false}
              title={`${progress?.countChatCoachSessionForCoach}`}
              subtitle={language === "en" ? "My Chat Session" : "عدد محادثاتي"}
              icon={
                <ChatIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        )}

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{
            borderRadius: "8px",
            boxShadow: `3px 3px 5px ${colors.primary[700]}`,
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                {language === "en"
                  ? "get Last User Login"
                  : "عدد المسجلين دخول كل يوم"}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[600] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart data={progress?.getLastUserLogin} isDashboard={true} />
          </Box>
        </Box>
        {admin?.roles[0].name === "super" ||
        admin?.roles[0].name === "admin" ? (
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            sx={{
              borderRadius: "8px",
              boxShadow: `3px 3px 5px ${colors.primary[700]}`,
            }}
            backgroundColor={colors.primary[400]}
            p="30px"
          >
            <Typography variant="h5" fontWeight="600">
              {language === "en"
                ? "count Chat With Caoch Today"
                : "نسبة المحادثات مع المدربين يوميا"}
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle
                progress={progress?.countChatWithCaochTodayRate}
                size="125"
              />
              <Typography
                variant="h5"
                color={colors.greenAccent[600]}
                sx={{ mt: "15px" }}
              >
                {progress?.countChatWithCaochTodayRate}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            sx={{
              borderRadius: "8px",
              boxShadow: `3px 3px 5px ${colors.primary[700]}`,
            }}
            backgroundColor={colors.primary[400]}
            p="30px"
          >
            <Typography variant="h5" fontWeight="600">
              {language === "en"
                ? "count My Chat Today"
                : "نسبة محادثاتي يوميا"}
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle
                progress={progress?.countChatWithCaochTodayRateForNotCoach/100}
                size="125"
              />
              <Typography
                variant="h5"
                color={colors.greenAccent[600]}
                sx={{ mt: "15px" }}
              >
                {progress?.countChatWithCaochTodayRateForNotCoach}
              </Typography>
            </Box>
          </Box>
        )}
      
         {admin?.roles && admin?.roles[0]?.name !== "admin" ?
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{
            borderRadius: "8px",
            boxShadow: `3px 3px 5px ${colors.primary[700]}`,
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                {language === "en"
                  ? "Average daily water intake"
                  : "متوسط شرب الماء يوميا"}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[600] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart
              data={
                admin?.roles[0].name === "super"
                  ? progress?.totalWater
                  : progress?.totalWaterForNotCoach
              }
              isDashboard={true}
            />
          </Box>
        </Box>
        :""}
        {/* top user start */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{
            borderRadius: "8px",
            boxShadow: `3px 3px 5px ${colors.primary[700]}`,
          }}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`3px solid ${colors.primary[700]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`2px solid ${colors.primary[700]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[600]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                color="#fff"
                backgroundColor={colors.greenAccent[600]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* end user top */}
        {admin?.roles && admin?.roles[0]?.name !== "admin" ? (
          <>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{
            borderRadius: "8px",
            boxShadow: `3px 3px 5px ${colors.primary[700]}`,
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                {language === "en"
                  ? "Average number of hours of sleep"
                  : "متوسط عدد ساعات النوم"}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[600] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart
              data={
                admin?.roles[0]?.name === "super"
                  ? progress?.totalSleep
                  : progress?.totalSleepForNotCoach
              }
              isDashboard={true}
            />
          </Box>
        </Box>
      
          <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            sx={{
              borderRadius: "8px",
              boxShadow: `3px 3px 5px ${colors.primary[700]}`,
            }}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  {language === "en"
                    ? "Average daily calories"
                    : "متوسط السعرات الحرارية يوميا"}
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{ fontSize: "26px", color: colors.greenAccent[600] }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart
                data={
                  admin?.roles[0]?.name === "super"
                    ? progress?.totalCalories
                    : progress?.totalCaloriesForNotCoach
                }
                isDashboard={true}
              />
            </Box>
          </Box>
          </>
        ) : (
          ""
        )}

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{
            borderRadius: "8px",
            boxShadow: `3px 3px 5px ${colors.primary[700]}`,
          }}
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            {language === "en"
              ? "Average number of bot conversations"
              : "متوسط عدد محادثات البوت"}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle
              progress={progress?.countChatWithBotTodayRate}
              size="125"
            />
            <Typography
              variant="h5"
              color={colors.greenAccent[600]}
              sx={{ mt: "15px" }}
            >
              {progress?.countChatWithBotTodayRate}
            </Typography>
          </Box>
        </Box>
        {admin?.roles && admin?.roles[0]?.name !== "admin" ? (
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            sx={{
              borderRadius: "8px",
              boxShadow: `3px 3px 5px ${colors.primary[700]}`,
            }}
            backgroundColor={colors.primary[400]}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              {language === "en"
                ? "Average calories in food"
                : "متوسط سعرات الحرارية في الاكل "}
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart
                title="calroies"
                data={
                  admin?.roles[0]?.name === "super"
                    ? progress?.totalCaloriesFood
                    : progress?.totalCaloriesFoodForNotCoach
                }
                isDashboard={true}
              />
            </Box>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
