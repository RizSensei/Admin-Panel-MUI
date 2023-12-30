import React from "react";
import Layout from "../../layout/Layout";
import { Avatar, Box } from "@mui/material";
import PageTitle from "../../components/pageTitle/PageTitle";
import ExportExcel from "../../export/ExportExcel";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "PhotoUrl",
    headerName: "Avatar",
    sortable: false,
    filterable: false,
    width: 80,
    renderCell:params=><Avatar src={`https://api.multiavatar.com/${params.row.firstName}.svg`} />
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    width: 200,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    filterable: false,
    width: 150,
    renderCell: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "role",
    headerName: "Role",
    type:"singleSelect",
    valueOptions:['designer','programmer','analyst'],
    editable: true,
    filterable: true,
    width: 150,
  },
  {
    field: "active",
    headerName: "Active",
    type:'boolean',
    editable: true,
    filterable: true,
    width: 100,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14, email:'realrijan@gmail.com', role: "designer" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31, email:'realrijan@gmail.com', role: "programmer"  },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31, email:'realrijan@gmail.com', role: "designer"  },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11, email:'realrijan@gmail.com', role: "analyst"  },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 57, email:'realrijan@gmail.com', role: "analyst"  },
  { id: 6, lastName: "Melisandre", firstName: "Howdie", age: 150, email:'realrijan@gmail.com', role: "designer"  },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, email:'realrijan@gmail.com', role: "programmer"  },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, email:'realrijan@gmail.com', role: "programmer"  },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, email:'realrijan@gmail.com', role: "analyst"  },
];

const DataGridPage = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <PageTitle title="Data Grid" />
        <ExportExcel
        // excelData={items}
        // filename={"Client_Report"}
        />
      </Box>
      <Box>
        <DataGrid 
        rows={rows} 
        rowHeight="auto"
        getRowId={row => row.id}
        columns={columns}
        initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10, 15]}
          checkboxSelection
          disableRowSelectionOnClick
          />
      </Box>
    </Layout>
  );
};

export default DataGridPage;
