import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import Masonry from "react-masonry-css";
import Error from "../../components/useQuery/Error";
import IsLoading from "../../components/useQuery/IsLoading";
import "../../styles/gridMasonry.css";



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
        <Card sx={{ maxWidth: 345, '&:hover': { transform: 'scale(1.05)',transition: 'transform 0.3s ease' }}} key={index}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt="project image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'500'}}>
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
                  fontWeight:'500'
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
                <AvatarGroup max={4}>
                  {project.team?.map((member, index) => (
                  <Avatar key={index} size="small">{member.substring(0, 1)}</Avatar>
                ))}
                </AvatarGroup>
                
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Masonry>
  );
};

export default DisplayProjects;
