import React from "react";
import Layout from "../../layout/Layout";
import { Grid } from "@mui/material";
import Advertisement from "./components/Advertisement";
import Data from "./components/Data";
import ProjectStatistics from "./components/ProjectStatistics";
import Masonry from "react-masonry-css";
import ActivityLog from "./components/ActivityLog";
import PageTitle from "../../components/pageTitle/PageTitle";
import CalendarComp from "./components/CalendarComp";

const Dashboard = () => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Layout>
      <PageTitle title="Dashboard"/>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
          <Grid item xs={6}>
            <Advertisement />
          </Grid>
          <Grid item xs={6}>
            <Data />
          </Grid>
          <Grid item xs={6}>
            <ProjectStatistics/>
          </Grid>
          <Grid item xs={6}>
            <ActivityLog/>
          </Grid>
          <Grid item xs={6}>
            <CalendarComp/>
          </Grid>
      </Masonry>
    </Layout>
  );
};

export default Dashboard;
