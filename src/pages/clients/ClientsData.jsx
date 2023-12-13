import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import IsLoading from "../../components/useQuery/IsLoading";
import Error from "../../components/useQuery/Error";
import { DarkModeContext } from "../../context/DarkModeProvider";

const ClientsData = ({ clients, isLoading, error }) => {

  if (isLoading) return <IsLoading />;
  if (error) return <Error error={error} />;

  const { dashtheme, toggleTheme } = useContext(DarkModeContext);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "600" }}>S.No</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Industry</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Status</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Notes</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>ContactPerson</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Email</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Phone</TableCell>
          </TableRow>
        </TableHead>

        <TableBody className={`App ${dashtheme}`} sx={{backgroundColor:'var(--bg-table)'}}>
          {clients?.map((client, index) => (
            <TableRow key={index}>
              <TableCell sx={{color:'var(--text-table)'}}>{index + 1}</TableCell>
              <TableCell sx={{color:'var(--text-table)'}}>{client.name}</TableCell>
              <TableCell sx={{color:'var(--text-table)'}}>{client.industry}</TableCell>
              <TableCell>
                <Typography
                  variant="body2"
                  sx={{
                    color:
                      client.status == "Prospective"
                        ? "#1e40af"
                        : client.status == "Lead"
                        ? "#065f46"
                        : "",
                    backgroundColor:
                      client.status == "Prospective"
                        ? "#60a5fa"
                        : client.status == "Lead"
                        ? "#34d399"
                        : "",
                        borderRadius:'10px',
                        padding:'2px',
                        textAlign:'center'
                  }}
                >
                  {" "}
                  {client.status}
                </Typography>
              </TableCell>
              <TableCell sx={{color:'var(--text-table)'}}>{client.notes}</TableCell>
              <TableCell sx={{color:'var(--text-table)'}}>{client.contactPerson}</TableCell>

              <TableCell sx={{color:'var(--text-table)'}}>{client.email}</TableCell>
              <TableCell sx={{color:'var(--text-table)'}}>{client.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClientsData;
