import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import Layout from "../../layout/Layout";
import { Box, Button, Paper } from "@mui/material";
import DisplayProjects from "./DisplayProjects";
import axios from "axios";
import SelectMapping from "../../components/mapping/SelectMapping";
import Search from "../../components/search/Search";
import { useQuery } from "react-query";

const Project = () => {
  const status = ["All", "Completed", "Planned", "In Progress"];
  const budget = ["<50K", "50K-100K", ">100K"];

  // const [projectStatus, setProjectStatus] = useState("");
  // const [projectBudget, setProjectBudget] = useState("");

  /** useReducer */
  const initialState = {
    projectStatus: "",
    projectBudget: "",
  };

  const projectReducer = (state, action) => {
    switch (action.type) {
      case "RESET_PROJECT":
        return { ...state, projectStatus: "", projectBudget: "" };

      case "SET_BUDGET":
        return { ...state, projectBudget: action.payload };

      case "SET_STATUS":
        return { ...state, projectStatus: action.payload };
    }
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const handleProjectStatusChange = useCallback((value) => {
    dispatch({type:'SET_STATUS', payload:value})
  }, []);
  const handleProjectBudgetChange = useCallback((value) => {
    dispatch({type:'SET_BUDGET', payload:value})
  }, []);

  const retrieveProjects = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await axios.get("http://localhost:3000/projects");
    return response.data;
  };

  const {
    data: projects,
    error,
    isLoading,
    refetch,
  } = useQuery("projectsData", retrieveProjects);

  const [items, setItems] = useState(projects);

  useEffect(() => {
    setItems(projects);
  }, [projects]);

  const handleSearch = useCallback(
    (searchTerm) => {
      const searchedResults = projects.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setItems(searchedResults);
    },
    [projects]
  );

  const filteredProjects = useMemo(() => {
    let filteredProjects = projects;

    if (state.projectStatus === "" && state.projectBudget === "") {
      return projects;
    }

    if (state.projectStatus === "All") {
      return projects;
    }

    if (state.projectStatus !== "") {
      filteredProjects = filteredProjects.filter(
        (project) => project.status === state.projectStatus
      );
    }
    if (state.projectBudget !== "") {
      filteredProjects = filteredProjects.filter(
        (project) => project.budget === state.projectBudget
      );
    }

    return filteredProjects;
  }, [projects, state.projectStatus, state.projectBudget]);

  const filterProjects = () => {
    setItems(filteredProjects);
  };

  const ResetProjects = useCallback(() => {
    dispatch({type:'RESET_PROJECT'})
    refetch();
  }, [refetch]);

  return (
    <Layout>
      <Box
        component={Paper}
        sx={{ display: "flex", justifyContent: "space-between", mb: 2, p: 2 }}
      >
        <Box sx={{ display: "flex", columnGap: 2 }}>
          <Search items={items} onSearch={handleSearch} />
        </Box>

        <Box sx={{ display: "flex", columnGap: 2 }}>
          <SelectMapping
            label="Status"
            content={status}
            onChange={handleProjectStatusChange}
          />
          <SelectMapping
            label="Budget"
            content={budget}
            onChange={handleProjectBudgetChange}
          />
          <Button variant="contained" size="small" onClick={filterProjects}>
            Filter
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "red" }}
            onClick={ResetProjects}
          >
            Reset
          </Button>
        </Box>
      </Box>
      <DisplayProjects projects={items} isLoading={isLoading} error={error} />
    </Layout>
  );
};

export default Project;
