import React, { useContext } from "react";
import IsLoading from "../../components/useQuery/IsLoading";
import Error from "../../components/useQuery/Error";
import { DarkModeContext } from "../../context/DarkModeProvider";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import theme from "../../theme/theme";

const DisplayAnime = ({ animes, isLoading, error, setItems }) => {
  if (isLoading) return <IsLoading />;

  if (error) return <Error error={error} />;

  const { dashtheme, toggleTheme } = useContext(DarkModeContext);
  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mt: 2, rowGap: 1 }}>
      {animes.map((anime) => (
        <Grid xs={1} sm={2} md={1.5} key={anime.id}>
          <Card sx={{ maxWidth: 145, position: "relative" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="205"
                image={anime.imageUrl}
                alt={anime.name}
                sx={{ objectFit: "fill" }}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  opacity: "90%",
                }}
              >
                <Typography
                  component="div"
                  sx={{
                    fontSize: "11px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {anime.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DisplayAnime;
