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

const DisplayProjects = ({ projects, isLoading, error }) => {
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
        <Card
          sx={{
            maxWidth: 345,
            "&:hover": {
              transform: "scale(1.05)",
              transition: "transform 0.3s ease",
            },
          }}
          key={index}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt="project image"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontWeight: "500" }}
              >
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActionArea>
            <CardContent>
              <Typography variant="body2">Team</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  columnGap: 1,
                }}
              >
                <AvatarGroup max={4}>
                  {project.team?.map((member, index) => (
                    <Avatar
                      sx={{ width: 32, height: 32 }}
                      key={index}
                      alt={member.name}
                      src={`https://api.multiavatar.com/${member}.svg`}
                    />
                  ))}
                </AvatarGroup>
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
                    fontWeight: "500",
                  }}
                />
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Masonry>
  );
};

export default DisplayProjects;
