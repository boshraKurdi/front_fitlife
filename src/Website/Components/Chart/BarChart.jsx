import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../../Dashboard/theme";
import { useSelector } from "react-redux";

const BarChart = ({ data , isDashboard = false  , title = ''}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {language} = useSelector((state) => state.mode)

  return (
    <ResponsiveBar
    data={data}
    theme={{
      axis: {
        domain: {
          line: {
            stroke: colors.grey[100],
          },
        },
        legend: {
          text: {
            fill: colors.grey[100],
          },
        },
        ticks: {
          line: {
            stroke: colors.grey[100],
            strokeWidth: 1,
          },
          text: {
            fill: colors.grey[100],
          },
        },
      },
      legends: {
        text: {
          fill: colors.grey[100],
        },
      },
    }}
    keys={["y"]}
    indexBy="x"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.5}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={() => "hsl(294.74deg 16.89% 62.04%)"}
    
    /** ⇩ ⇩ ⇩ إضافة المحاور هنا ⇩ ⇩ ⇩ **/
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'date',   // ← عنوان محور X
      legendPosition: "middle",
      legendOffset: 40,     // ← المسافة من المحور
    }}
    
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: `${title}`,   // ← عنوان محور Y
      legendPosition: "middle",
      legendOffset: -50,    // ← المسافة من المحور
    }}
    
    enableLabel={false}
  />
  
  );
};

export default BarChart;
