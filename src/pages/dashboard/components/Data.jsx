import EmailIcon from "@mui/icons-material/Email";
import FolderIcon from "@mui/icons-material/Folder";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Grid } from "@mui/material";
import React from "react";
import DashboardDataLayout from "../../../components/dashboardDataLayout/DashboardDataLayout";

const Data = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <DashboardDataLayout title="Total Clients" value={68} link="/clients" upperCardColor="#17a2b8" lowerCardColor="#1591a5" icon={PersonIcon}/>
        </Grid>
        <Grid item xs={6}>
          <DashboardDataLayout title="Total Emails" value={68} link="/email" upperCardColor="rgb(255,193,7)" lowerCardColor="rgb(229,173,6)" icon={EmailIcon}/>
        </Grid>
        <Grid item xs={6}>
          <DashboardDataLayout title="Total Members" value={68} link="/team" upperCardColor="#28a745" lowerCardColor="#24963e" icon={GroupsIcon}/>
        </Grid>
        <Grid item xs={6}>
          <DashboardDataLayout title="Total Projects" value={68} link="/projects" upperCardColor="#dc3545" lowerCardColor="#c6303e" icon={FolderIcon}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Data;
