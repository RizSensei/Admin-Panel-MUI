import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material'
import SearchAutoComplete from '../../components/topbar/searchAutoComplete/SearchAutoComplete'
import DisplayProjects from './DisplayProjects'
import axios from 'axios'
import SelectMapping from '../../components/mapping/SelectMapping'

const Project = () => {
    const status = ["All","Completed","Planned","In Progress"];
    const budget = ["<50K","50K-100K",">100K"];

    const [ projectStatus, setProjectStatus ] = useState("");
    const handleProjectStatusChange = (value) => {
        setProjectStatus(value);
    }

    const retrieveProjects = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      
        const response = await axios.get("http://localhost:3000/projects");
        // const allProjects =  response.data;

        // const filteredProjects = (projectStatus === "All") ? allProjects : allProjects.filter(project => project.status.toLowerCase() === projectStatus.toLowerCase() );

        // return filteredProjects;
        return response.data;
      };

  return (
    <Layout>
        <Box
        component={Paper}
        sx={{ display: "flex", justifyContent: "space-between", mb: 2, p: 2 }}
      >
        <Box sx={{display:'flex', columnGap:2}}>
         {/* <AddTeam/> */}
          <SearchAutoComplete /> 
        </Box>
        
        
        <Box sx={{ display: "flex", columnGap: 2 }}>
          <SelectMapping label="Status" content={status} />
          <SelectMapping label="Budget" content={budget} />
          <Button variant="contained" size="small">
            Filter
          </Button>
        </Box>
      </Box>
      <DisplayProjects retrieveProjects={retrieveProjects}/>
    </Layout>
    
  )
}

export default Project