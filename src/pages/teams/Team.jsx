import React from "react";
import DisplayTeamData from "./DisplayTeamData";
import {
    Box,
    FormControl,
    MenuItem,
    Paper,
    Select,
  } from "@mui/material";
  import SearchAutoComplete from "../../components/topbar/searchAutoComplete/SearchAutoComplete";
import Layout from "../../layout/Layout";
import AddTeam from "../../components/modal/AddTeam";

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
  return (
    <Layout>
      <Box
        component={Paper}
        sx={{ display: "flex", justifyContent: "space-between", mb: 1, p: 2 }}
      >
        <Box sx={{display:'flex', columnGap:2}}>
         <AddTeam/>
          <SearchAutoComplete /> 
        </Box>
        
        
        <Box sx={{ display: "flex", columnGap: 2 }}>
          <FormControl sx={{ minWidth: { xs: 250 } }}>
            <Select size="small" label="Role">
              {roles?.map((role, index) => (
                <MenuItem value={index} key={index}>{role}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: { xs: 250 } }}>
            <Select size="small" label="Department">
              {departments?.map((department, index) => (
                <MenuItem value={index} key={index}>{department}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <DisplayTeamData/>
    </Layout>
  );
};

export default Team;
