import { IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import axios from "axios";

const DeleteTeammateButton = ({ id, name }) => {
  const client = useQueryClient();

  const mutation = useMutation(
    () => axios.delete(`http://localhost:3000/teams/${id}`),
    {
      onSuccess: () => {
        client.invalidateQueries(["teamsData"]);

        return toast.success(`${name} is removed from Team`);
      },
      onError: () => {
        return toast.error("Something went wrong!!!");
      },
    }
  );

  const deleteTeam = () => {
    mutation.mutate();
    return toast.info("Deleting in process");
  };


  return (
    <IconButton onClick={deleteTeam}>
      <DeleteIcon sx={{ color: "red", width: 18, height: 18  }} />
    </IconButton>
  );
};

export default DeleteTeammateButton;
