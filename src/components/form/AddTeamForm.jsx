import { Button, InputAdornment, TextField } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTeamForm = () => {
  const client = useQueryClient();

  const mutation = useMutation((newTeammate) =>
    axios.post("http://localhost:3000/teams", newTeammate),
    {
      onSuccess: () => {
        client.invalidateQueries(["teamsData"]);
        return toast.success("Successfully added into Team");
      },
      onError: () => {
        return toast.error("Something went wrong!");
      }
    }
  );
  // if (mutation.isLoading) {
  //   return toast.info("Adding in process");
  // }
  // if (mutation.isError) {
  //   return toast.error("Something went wrong!");
  // }
  // if (mutation.isSuccess) {
  //   client.invalidateQueries(["teamsData"]);
  //   return toast.success("Successfully added into Team");
  // }

  
  return (
    <Formik
      initialValues={{
        name: "",
        role: "",
        experience: "",
        department: "",
        email: "",
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
            sx={{ my: 2 }}
          />
          <TextField
            size="small"
            label="Role"
            required
            fullWidth
            name="role"
            value={values.role}
            onChange={handleChange}
            sx={{ my: 2 }}
          />
          <TextField
            size="small"
            label="Experience"
            required
            fullWidth
            name="experience"
            value={values.experience}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">years</InputAdornment>
              ),
            }}
            sx={{ my: 2 }}
          />
          <TextField
            size="small"
            label="Department"
            required
            fullWidth
            name="department"
            value={values.department}
            onChange={handleChange}
            sx={{ my: 2 }}
          />
          <TextField
            size="small"
            label="Email"
            type="email"
            required
            fullWidth
            name="email"
            value={values.email}
            onChange={handleChange}
            sx={{ my: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "black", borderRadius: "0%" }}
          >
            Add to team
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default AddTeamForm;
