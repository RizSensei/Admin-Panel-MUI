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
import FilterNotFound from "../../components/FilterNotFound/FilterNotFound";
import Pagination from "../../components/pagination/Pagination";

const DisplayTeamData = ({ teams, isLoading, error, setItems }) => {
  if (isLoading) return <IsLoading />;

  if (error) return <Error error={error} />;

  const { dashtheme, toggleTheme } = useContext(DarkModeContext);

  return (
    <TableContainer component={Paper}>
      {teams.length === 0 ? (
        <FilterNotFound />
      ) : (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "13px" }}>S.No</TableCell>
              <TableCell sx={{ fontSize: "13px" }}>Avatar</TableCell>
              <TableCell sx={{ fontWeight: "500", fontSize: "13px" }}>
                Name
              </TableCell>
              <TableCell sx={{ fontWeight: "500", fontSize: "13px" }}>
                Role
              </TableCell>
              <TableCell sx={{ fontWeight: "500", fontSize: "13px" }}>
                Experience(yrs)
              </TableCell>
              <TableCell sx={{ fontWeight: "500", fontSize: "13px" }}>
                Department
              </TableCell>
              <TableCell sx={{ fontWeight: "500", fontSize: "13px" }}>
                Email
              </TableCell>
              <TableCell sx={{ fontWeight: "500", fontSize: "13px" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            className={`App ${dashtheme}`}
            sx={{ backgroundColor: "var(--bg-table)" }}
          >
            {teams?.map((team, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#e2e8f0" },
                }}
              >
                <TableCell
                  sx={{ color: "var(--text-table)", fontSize: "13px" }}
                >
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Avatar
                    sx={{ width: 32, height: 32 }}
                    alt={team.name}
                    src={`https://api.multiavatar.com/${team.name}.svg`}
                  />
                </TableCell>
                <TableCell
                  sx={{ color: "var(--text-table)", fontSize: "13px" }}
                >
                  {team.name}
                </TableCell>
                <TableCell
                  sx={{ color: "var(--text-table)", fontSize: "13px" }}
                >
                  {team.role}
                </TableCell>
                <TableCell
                  sx={{ color: "var(--text-table)", fontSize: "13px" }}
                >
                  {team.experience}
                </TableCell>
                <TableCell
                  sx={{ color: "var(--text-table)", fontSize: "13px" }}
                >
                  {team.department}
                </TableCell>
                <TableCell
                  sx={{ color: "var(--text-table)", fontSize: "13px" }}
                >
                  {team.email}
                </TableCell>
                <TableCell sx={{ display: "flex" }}>
                  <UpdateTeam id={team.id} teams={teams} />
                  <DeleteTeammateButton name={team.name} id={team.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {/* <Pagination list={teams} setItems={setItems}/> */}
    </TableContainer>
  );
};

export default DisplayTeamData;
