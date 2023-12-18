import { Card, CardActionArea, CardContent, Chip, Typography } from "@mui/material";
import React from "react";
import Masonry from "react-masonry-css";
import Error from "../../components/useQuery/Error";
import IsLoading from "../../components/useQuery/IsLoading";

const DisplayEmailData = ({ emails, isLoading, error }) => {
  if (isLoading) return <IsLoading />;
  console.log(emails)

  if (error) return <Error error={error} />;

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return  (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {emails?.map((email, index) => (
        <Card sx={{ maxWidth: 345, '&:hover': { transform: 'scale(1.05)',transition: 'transform 0.3s ease' }}} key={email.id}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'500'}}>
                {email.subject}
              </Typography>
              <Chip
                label={email.type}
                size="small"
                sx={{
                  color:
                    email.type === "primary"
                      ? "#15803d"
                      : email.type === "promotion"
                      ? "#b91c1c"
                      : email.type === "socials"
                      ? "#6d28d9"
                      : "",
                  backgroundColor: "white",
                  fontWeight:'600'
                }}
              />
              <Typography variant="body2" color="text.secondary" sx={{mt:1}}>
                {email.content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActionArea>
            <CardContent>
              <Typography>{email.sender}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Masonry>
  );
};

export default DisplayEmailData;
