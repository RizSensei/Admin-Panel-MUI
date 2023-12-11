import React from "react";
import { useQuery } from "react-query";
import IsLoading from "../../components/useQuery/IsLoading";
import Error from "../../components/useQuery/Error";
import axios from "axios";
import "../../styles/gridMasonry.css";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import Masonry from "react-masonry-css";



const DisplayProjects = ({projects, isLoading, error}) => {

  if (isLoading) return <IsLoading />;

  if (error) return <Error error={error} />;

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {projects?.map((project, index) => (
        <Card sx={{ maxWidth: 345 }} key={index}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt="project image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Chip
                label={project.status}
                size="small"
                sx={{
                  color:
                    project.status === "In Progress"
                      ? "#15803d"
                      : project.status === "Completed"
                      ? "#b91c1c"
                      : project.status === "Planned"
                      ? "#6d28d9"
                      : "",
                  backgroundColor: "white",
                  fontWeight:'600'
                }}
              />
              <Typography variant="body2" color="text.secondary" sx={{mt:1}}>
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActionArea>
            <CardContent>
              <Typography>Team</Typography>
              <Box sx={{ display: "flex", columnGap: 1 }}>
                {project.team?.map((member, index) => (
                  <Chip
                    key={index}
                    label={member}
                    size="small"
                    sx={{
                      backgroundColor: "gray",
                      color: "white",
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Masonry>
  );
};

export default DisplayProjects;
