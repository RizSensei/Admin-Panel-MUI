import { Box, Button, CardMedia, Stack, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import SelectMapping from "../mapping/SelectMapping";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const status = ["watching", "completed", "planned", "paused"];
const score = ["1", "2", "3", "4", "5"];

const AddAnimeForm = ({setOpen}) => {
    const client = useQueryClient();

    const mutation = useMutation((newAnime) =>
      axios.post("http://localhost:3000/animes", newAnime),
      {
        onSuccess: () => {
          client.invalidateQueries(["animesData"]);
          setOpen(false);
          return toast.success("Successfully added into AnimeList");
        },
        onError: () => {
          return toast.error("Something went wrong!");
        }
      }
    );

  return (
    <Formik
      initialValues={{
        name: "",
        studio: "",
        genre: "",
        imageUrl: "",
        score: "",
        status: "",
      }}
      onSubmit={(values) => {
        mutation.mutate(values);
        return toast.info("Adding in process");
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            size="small"
            label="Name"
            required
            fullWidth
            name="name"
            value={values.name}
            onChange={handleChange}
            sx={{ my: 1 }}
          />
          <TextField
            size="small"
            label="Genre"
            required
            fullWidth
            name="genre"
            value={values.genre}
            onChange={handleChange}
            sx={{ my: 1 }}
          />
          <TextField
            size="small"
            label="Studio"
            required
            fullWidth
            name="studio"
            value={values.studio}
            onChange={handleChange}
            sx={{ my: 1 }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{ height: "200px", width: "150px", border: "2px solid gray" }}
            >
              <CardMedia
                component="img"
                height="205"
                image={values.imageUrl}
                alt={values.name}
                sx={{ objectFit: "fit" }}
              />
            </Box>
            <Stack spacing={2}>
              <TextField
                size="small"
                label="ImageUrl"
                required
                name="imageUrl"
                value={values.imageUrl}
                onChange={handleChange}
              />
              <SelectMapping
                label="Status"
                content={status}
                onChange={handleChange}
              />
              <SelectMapping
                label="Score"
                content={score}
                onChange={handleChange}
              />
            </Stack>
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "black", borderRadius: "0%", mt: 2 }}
          >
            Add to AnimeList
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default AddAnimeForm;
