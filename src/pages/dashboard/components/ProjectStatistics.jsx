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
  // console.log(Projects)

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
    labels: [`Completed`, `Planned`, `In Progress`],
    dataLabels:{
        enabled:false
    },
    legend: {
      position: "right",
      display:'flex'
    },
    innerRadius:'20%',
    colors: ["#ef4444", "#a855f7", "#10b981"],
  };

  const series = [status.completed, status.planned, status.inProgress];

  return (
    <Box component={Paper} sx={{ p: 2, backgroundColor:'#e2e8f0', boxShadow:2 }}>
      <Typography variant="h5" sx={{ fontWeight: "600" }}>
        Project Statistics
      </Typography>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={200}
      />
    </Box>
  );
};

export default ProjectStatistics;
