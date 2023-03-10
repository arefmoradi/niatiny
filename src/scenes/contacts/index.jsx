import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import faIRGrid from "../../settings/MUIlocate"


const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [

    {
      field: "name",
      headerName: "نام",
      flex: 1,
    
    },
    {
      field: "age",
      headerName: "سن",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: .4
    },
    {
      field: "phone",
      headerName: "شماره",
      flex: 1,
    },
    {
      field: "city",
      headerName: "شهر",
      flex: .7,
    },

  ];


  return (
    <Box m="20px">
      <Header
        title="کاربران"
        subtitle="لیست کامل کاربران"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          localeText={faIRGrid}
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        
        />
      </Box>
    </Box>
  );
};

export default Contacts;
