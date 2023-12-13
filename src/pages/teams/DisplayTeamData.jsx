import React, { useContext } from "react";

import {
  Avatar,
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
import UpdateTeam from "../../components/modal/UpdateTeam";
import { DarkModeContext } from "../../context/DarkModeProvider";

const DisplayTeamData = ({ teams, isLoading, error }) => {
  
  if (isLoading) return <IsLoading />;

  if (error) return <Error error={error} />;

  const { dashtheme, toggleTheme } = useContext(DarkModeContext);

  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell
                
                sx={{ fontWeight: "600"}}
              >
                Name
              </TableCell>
              <TableCell
                
                sx={{ fontWeight: "600"}}
              >
                Role
              </TableCell>
              <TableCell
                
                sx={{ fontWeight: "600"}}
              >
                Experience(yrs)
              </TableCell>
              <TableCell
                
                sx={{ fontWeight: "600"}}
              >
                Department
              </TableCell>
              <TableCell
                
                sx={{ fontWeight: "600"}}
              >
                Email
              </TableCell>
              <TableCell
                
                sx={{ fontWeight: "600"}}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={`App ${dashtheme}`} sx={{backgroundColor:'var(--bg-table)'}}>
            {teams?.map((team, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0  } }}
              >
                <TableCell sx={{color:'var(--text-table)'}}>{index+1}</TableCell>
                <TableCell component="th" scope="row">
                  <Avatar>{team.name.substring(0, 1)}</Avatar>
                </TableCell>
                <TableCell  sx={{color:'var(--text-table)'}}>{team.name}</TableCell>
                <TableCell  sx={{color:'var(--text-table)'}}>{team.role}</TableCell>
                <TableCell  sx={{color:'var(--text-table)'}}>{team.experience}</TableCell>
                <TableCell  sx={{color:'var(--text-table)'}}>{team.department}</TableCell>
                <TableCell  sx={{color:'var(--text-table)'}}>{team.email}</TableCell>
                <TableCell  sx={{display:'flex'}}>
                  <UpdateTeam/>
                  <DeleteTeammateButton name={team.name} id={team.id}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default DisplayTeamData;
