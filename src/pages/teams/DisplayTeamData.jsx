import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Layout from "../../layout/Layout";

import CircularProgress from "@mui/material/CircularProgress";
import {
  Avatar,
  Box,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SearchAutoComplete from "../../components/topbar/searchAutoComplete/SearchAutoComplete";

const retrieveTeams = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await axios.get("http://localhost:3000/teams");
  return response.data;
};

const DisplayTeamData = () => {
  const {
    data: teams,
    error,
    isLoading,
  } = useQuery("teamsData", retrieveTeams);

  if (isLoading)
    return (
      <Layout>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </Layout>
    );
  if (error) return <Layout>An error occurred: {error.message}</Layout>;

  return (
    <Layout>
      <Box
        component={Paper}
        sx={{ display: "flex", justifyContent: "space-between", mb: 1, p: 2 }}
      >
        <SearchAutoComplete />
        <Box sx={{ display: "flex", columnGap: 2 }}>
          <FormControl sx={{ minWidth: { xs: 250 } }}>
            <Select size="small" label="Role">
              <MenuItem value={0}>Sort by Default</MenuItem>
              <MenuItem value={1}>Sort by popularity</MenuItem>
              <MenuItem value={2}>Sort by average rating</MenuItem>
              <MenuItem value={3}>Sort by newness</MenuItem>
              <MenuItem value={4}>Sort by price: low to high</MenuItem>
              <MenuItem value={5}>Sort by price: high to low</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: { xs: 250 } }}>
            <Select size="small" label="Department">
              <MenuItem value={0}>Sort by Default</MenuItem>
              <MenuItem value={1}>Sort by popularity</MenuItem>
              <MenuItem value={2}>Sort by average rating</MenuItem>
              <MenuItem value={3}>Sort by newness</MenuItem>
              <MenuItem value={4}>Sort by price: low to high</MenuItem>
              <MenuItem value={5}>Sort by price: high to low</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: "600", color: "gray" }}
              >
                Name
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: "600", color: "gray" }}
              >
                Role
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: "600", color: "gray" }}
              >
                Experience
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: "600", color: "gray" }}
              >
                Department
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: "600", color: "gray" }}
              >
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teams.map((team, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar>{team.name.substring(0, 1)}</Avatar>
                </TableCell>
                <TableCell align="right">{team.name}</TableCell>
                <TableCell align="right">{team.role}</TableCell>
                <TableCell align="right">{team.experience}</TableCell>
                <TableCell align="right">{team.department}</TableCell>
                <TableCell align="right">{team.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default DisplayTeamData;
