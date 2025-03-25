import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import ChatIcon from '@mui/icons-material/Chat';
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActPogress } from "../../../Redux/Dashboard/Admin/AdminSlice";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const { progress } = useSelector((state)=>state.admin)
  useEffect(()=>{
    dispatch(ActPogress())
  } ,[dispatch])
  console.log(progress)

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          sx={{borderRadius: '8px' , boxShadow: `3px 3px 5px ${colors.primary[700]}`}}
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
          status={false}
            title={`${progress?.TotalCaloriesRate}`}
            subtitle="Total Calories"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          sx={{borderRadius: '8px' , boxShadow: `3px 3px 5px ${colors.primary[700]}`}}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={`${progress?.countChatBotSession}`}
            subtitle="Chat Bot Session"
            progress={`${progress?.countChatBotSession/progress?.countChatSession}`}
            increase={`${(progress?.countChatBotSession/progress?.countChatSession)*100}%`}
            icon={
              <FaceRetouchingNaturalIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          
          sx={{borderRadius: '8px' , boxShadow: `3px 3px 5px ${colors.primary[700]}`}}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
          title={`${progress?.countCoach}`}
            subtitle="Count Coach"
            progress={`${progress?.countCoach/progress?.countUserSginUp}`}
            increase={`${(progress?.countCoach/progress?.countUserSginUp)*100}%`}
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          sx={{borderRadius: '8px' , boxShadow: `3px 3px 5px ${colors.primary[700]}`}}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={`${progress?.countChatCoachSession}`}
            subtitle="Chat CoachS ession"
            progress={`${progress?.countChatCoachSession/progress?.countChatSession}`}
            increase={`${(progress?.countChatCoachSession/progress?.countChatSession)*100}%`}
            icon={
              <ChatIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{borderRadius: '8px' , boxShadow: `3px 3px 5px ${colors.primary[700]}`}}
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
                get Last User Login
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
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{borderRadius: '8px' , boxShadow: `3px 3px 5px ${colors.primary[700]}`}}
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
          count Chat With Caoch Today
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle progress={progress?.countChatWithCaochToday} size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[600]}
              sx={{ mt: "15px" }}
            >
              {progress?.countChatWithCaochToday} revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{borderRadius: '8px' , boxShadow: `3px 3px 5px ${colors.primary[700]}`}}
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
                total Water
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
            <LineChart data={progress?.totalWater} isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{borderRadius: '8px' , boxShadow: `3px 3px 5px ${colors.primary[700]}`}}
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

        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{borderRadius: '8px' , boxShadow: `3px 3px 5px ${colors.primary[700]}`}}
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
                total Sleep
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
            <LineChart data={progress?.totalSleep} isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{borderRadius: '8px' , boxShadow: `3px 3px 5px ${colors.primary[700]}`}}
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
                total Calories
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
            <LineChart data={progress?.totalCalories} isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{borderRadius: '8px' , boxShadow: `3px 3px 5px ${colors.primary[700]}`}}
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
          count Chat With Bot Today
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle progress={progress?.countChatWithBotToday} size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[600]}
              sx={{ mt: "15px" }}
            >
              {progress?.countChatWithBotToday} revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          sx={{borderRadius: '8px' , boxShadow: `3px 3px 5px ${colors.primary[700]}`}}
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
