import React from "react";
import Layout from "../../layout/Layout";
import { Box, Button, Grid, Typography } from "@mui/material";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import ProjectStatistics from "./components/ProjectStatistics";

const Dashboard = () => {
  return (
    <Layout>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Box1/>
        </Grid>
        <Grid item xs={6}>
          <Box2/>
        </Grid>
        <Grid item xs={6}>
          {/* <ProjectStatistics/> */}
        </Grid>
        <Grid item xs={6}>
          <Box>4</Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
