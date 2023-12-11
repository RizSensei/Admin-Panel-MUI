import React, { useContext } from "react";
import DisplayTeamData from "./DisplayTeamData";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import Layout from "../../layout/Layout";
import AddTeam from "../../components/modal/AddTeam";
import SelectMapping from "../../components/mapping/SelectMapping";
import Search from "../../components/search/Search";
import { DarkModeContext } from "../../context/DarkModeProvider";

const Team = () => {
  const departments = [
    "Engineering",
    "Design",
    "Management",
    "Quality Assurance",
  ];

  const roles = [
    "Developer",
    "Project Manager",
    "Frontend Developer",
    "UI/UX Designer",
    "Database Administrator",
    "Software Engineer",
    "QA Tester",
    "Full Stack Developer",
  ];
  const experience=[];

  const { dashtheme, toggleTheme } = useContext(DarkModeContext);
  return (
    <Layout>
      <Box
        component={Paper}
        sx={{ display: "flex", justifyContent: "space-between", mb: 1, p: 2, color:"red" }}
        className={`App ${dashtheme}`}
      >
        <Box sx={{ display: "flex", columnGap: 2 }}>
          <AddTeam />
          <Search />
        </Box>

        <Box sx={{ display: "flex", columnGap: 2 }}>
          <SelectMapping label="Role" content={roles} />
          <SelectMapping label="Department" content={departments} />
          <SelectMapping label="Experience" content={experience} />
          <Button variant="contained" size="small">
            Filter
          </Button>
        </Box>
      </Box>
      <DisplayTeamData />
    </Layout>
  );
};

export default Team;
