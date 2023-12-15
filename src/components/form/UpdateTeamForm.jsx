import { Button, InputAdornment, TextField } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const UpdateTeamForm = ({ id, teams, setOpen }) => {

  const member = teams.find((team) => team.id == id);

  const client = useQueryClient();

  const mutation = useMutation(
    (updatedTeamsData) =>
      axios.put(`http://localhost:3000/teams/${id}`, updatedTeamsData),
    {
      onSuccess: () => {
        client.invalidateQueries(["teamsData"]);
        setOpen(false);
        return toast.success("Successfully Updated");
      },
      onError: () => {
        return toast.error("Something went wrong!");
      },
    }
  );
  return (
    <Formik
      initialValues={{
        name: member.name,
        role: member.role,
        experience: member.experience,
        department: member.department,
        email: member.email,
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
            Update
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default UpdateTeamForm;
