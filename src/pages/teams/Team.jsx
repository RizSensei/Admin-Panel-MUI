import React, { useCallback, useContext, useEffect, useMemo, useReducer, useState } from "react";
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
import { useQuery } from "react-query";
import axios from "axios";

const Team = () => {
  const departments = [
    "Engineering",
    "Design",
    "Management",
    "Quality Assurance",
  ];

  const roles = [
    "Frontend Developer",
    "UI/UX Designer",
    "Database Administrator",
    "Software Engineer",
    "QA Tester",
    "Backend Developer",
    "Graphic Designer"
  ];
  const experience=["1","2","3","4","5","6","7","8","9","10"];

  const { dashtheme, toggleTheme } = useContext(DarkModeContext);

  const retrieveTeams = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    const response = await axios.get("http://localhost:3000/teams");
    return response.data;
  };

  const { data: teams, error, isLoading, refetch } = useQuery("teamsData", retrieveTeams, {
    onSuccess: (data) => {
      setItems(data);
    },
  });

  const [items, setItems] = useState(teams);

  const initialState = {
    selectedRoles:'', selectedExperience:'', selectedDepartment:''
  }

  const teamReducer = (state,action) => {
    switch(action.type){
      case 'SET_ROLE':
        return {...state, selectedRoles: action.payload}

      case 'SET_EXPERIENCE':
        return {...state, selectedExperience: action.payload}

      case 'SET_DEPARTMENT':
        return {...state, selectedDepartment: action.payload}
    }
  }

  const [state, dispatch] = useReducer(teamReducer, initialState);

  const filteredTeams = useMemo(() => {
    let filterTeams = teams;

    if (state.selectedRoles === "" && state.selectedExperience === ""  && state.selectedDepartment === "") {
      setItems(teams);
    }

    if (state.selectedRoles !== "") {
      filterTeams = filterTeams.filter((team) => team.role === state.selectedRoles);
    }
    if (state.selectedExperience !== "") {
      filterTeams = filterTeams.filter((team) => team.experience === state.selectedExperience);
    }
    if (state.selectedDepartment !== "") {
      filterTeams = filterTeams.filter((team) => team.department === state.selectedDepartment);
    }

    return filterTeams;
  }, [state]);

  const filterTeams = () => {
    setItems(filteredTeams);
  };

  const handleRolesChange = useCallback((value) => {
    dispatch({type:'SET_ROLE', payload:value})
  }, [state.selectedRoles]);

  const handleExperienceChange = useCallback((value) => {
    dispatch({type:'SET_EXPERIENCE', payload:value})
  }, [state.selectedExperience]);

  const handleDepartmentChange = useCallback((value) => {
    dispatch({type:'SET_DEPARTMENT', payload:value})
  }, [state.selectedDepartment]);

  useEffect(() => {
    setItems(teams);
  }, [teams]);

  const handleSearch = useCallback((searchTerm) => {
    const searchedResults = teams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setItems(searchedResults);
  },[teams]);

  return (
    <Layout>
      <Box
        component={Paper}
        sx={{ display: "flex", justifyContent: "space-between", mb: 1, p: 2 }}
        className={`App ${dashtheme}`}
      >
        <Box sx={{ display: "flex", columnGap: 2 }}>
          <AddTeam />
          <Search items={items} onSearch={handleSearch}/>
        </Box>

        <Box sx={{ display: "flex", columnGap: 2 }}>
          <SelectMapping label="Role" content={roles} onChange={handleRolesChange}/>
          <SelectMapping label="Department" content={departments} onChange={handleDepartmentChange}/>
          <SelectMapping label="Experience" content={experience} onChange={handleExperienceChange}/>
          <Button variant="contained" size="small" onClick={filterTeams}>
            Filter
          </Button>
        </Box>
      </Box>
      <DisplayTeamData teams={items} isLoading={isLoading} error={error} />
    </Layout>
  );
};

export default Team;
