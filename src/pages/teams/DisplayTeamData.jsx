import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Avatar,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import IsLoading from "../../components/useQuery/IsLoading";
import Error from "../../components/useQuery/Error";
import DeleteTeammateButton from "../../components/deleteTeammateButton/DeleteTeammateButton";

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

  if (isLoading) return <IsLoading />;

  if (error) return <Error error={error} />;

  return (
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
                Experience(yrs)
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
              <TableCell
                align="right"
                sx={{ fontWeight: "600", color: "gray" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teams?.map((team, index) => (
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
                <TableCell align="right">
                  <IconButton>
                    <EditIcon sx={{ color: "purple" }} />
                  </IconButton>
                  {/* <IconButton>
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton> */}
                  <DeleteTeammateButton id={team.id}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default DisplayTeamData;
