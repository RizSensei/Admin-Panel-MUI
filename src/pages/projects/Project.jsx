import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import { Box, FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material'
import SearchAutoComplete from '../../components/topbar/searchAutoComplete/SearchAutoComplete'
import DisplayProjects from './DisplayProjects'
import axios from 'axios'

const Project = () => {
    const status = ["All","Completed","Planned","In Progress"];

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
          <FormControl sx={{ minWidth: { xs: 250 } }}>
          <InputLabel>Status</InputLabel>
            <Select size="small" label="Status" onChange={(e) => handleProjectStatusChange(e.target.value)}>
              {status?.map((status, index) => (
                <MenuItem value={status} key={index} selected={status === "All"}>{status}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <FormControl sx={{ minWidth: { xs: 250 } }}>
            <Select size="small" label="Department">
              {departments?.map((department, index) => (
                <MenuItem value={index} key={index}>{department}</MenuItem>
              ))}
            </Select>
          </FormControl> */}
        </Box>
      </Box>
      <DisplayProjects retrieveProjects={retrieveProjects}/>
    </Layout>
    
  )
}

export default Project