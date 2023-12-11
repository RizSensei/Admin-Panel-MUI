import React from "react";
import Layout from "../../layout/Layout";
import { Box, Button, Grid, Typography } from "@mui/material";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import ProjectStatistics from "./components/ProjectStatistics";
import Masonry from "react-masonry-css";

const Dashboard = () => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Layout>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
          <Grid item xs={6}>
            <Box1 />
          </Grid>
          <Grid item xs={6}>
            <Box2 />
          </Grid>
          <Grid item xs={6}>
            {/* <ProjectStatistics/> */}
          </Grid>
          <Grid item xs={6}>
            <Box>4</Box>
          </Grid>
        {/* </Grid> */}
      </Masonry>
    </Layout>
  );
};

export default Dashboard;
