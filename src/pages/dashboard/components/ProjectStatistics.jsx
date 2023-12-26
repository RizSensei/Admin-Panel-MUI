import { Box, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useQuery } from "react-query";

const ProjectStatistics = () => {
  const {
    isLoading,
    error,
    data: Projects,
  } = useQuery(["projectsRepo"], () =>
    axios.get("http://localhost:3000/projects").then((res) => res.data)
  );

  const [status, setStatus] = useState({
    completed: 0,
    planned: 0,
    inProgress: 0,
  });
  
  const completed = Projects?.filter(
    (project) => project.status === "Completed"
  ).length;
  const planned = Projects?.filter(
    (project) => project.status === "Planned"
  ).length;
  const inProgress = Projects?.filter(
    (project) => project.status === "In Progress"
  ).length;

  useEffect(() => {
    setStatus({
      ...status,
      completed: completed,
      planned: planned,
      inProgress: inProgress,
    });
  }, []);

  const options = {
    chart: {
      type: "donut",
    },
    labels: [`Completed(${status.completed})`, `Planned(${status.planned})`, `In Progress(${status.inProgress})`],
    legend: {
      position: "bottom",
      fontSize:'13px'
    },
    colors: ["#ef4444", "#a855f7", "#10b981"],
    plotOptions:{
      pie:{
        donut:{
          size:'60%'
        }
      }
    }
  };

  const series = [status.completed, status.planned, status.inProgress];

  return (
    <Box component={Paper} sx={{ p: 2, boxShadow:2 }}>
      <Typography variant="h5" sx={{ fontWeight: "500", mb:4 }}>
        Project Statistics
      </Typography>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={300}
      />
    </Box>
  );
};

export default ProjectStatistics;
