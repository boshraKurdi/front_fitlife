import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { DataGrid } from "@mui/x-data-grid";

export default function Table({data , loading , columns}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const paginationModel = { page: 0, pageSize: 5 };
    return(
        <Box
        m="20px 0 0 0"
        height="61vh"
        sx={{
          boxShadow: `0px 0px 5px ${colors.primary[700]}` ,
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-container--top [role=row]": {
            backgroundColor: `${colors.greenAccent[700]} !important`,
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: `${colors.primary[400]} !important`,
          fontSize:`1.5rem !important` ,
          border: 'none !important'

          },
          "& .MuiTablePagination-selectLabel":{
            fontSize:'1.4rem'
          },
          "& .MuiTablePagination-displayedRows":{
            fontSize:'1.4rem !important'
          },
          "& .MuiTablePagination-input":{
            fontSize:'1.4rem !important'
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
            
          },
        }}
      >
        <DataGrid
          loading={loading === "pending" ? true : false}
          style={{ fontSize: "1.3rem" }}
          rows={data}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
    )

}