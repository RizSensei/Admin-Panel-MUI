import { Box, IconButton, Modal } from "@mui/material";
import React, { useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import UpdateTeamForm from "../form/UpdateTeamForm";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

const UpdateTeam = ({id, teams}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
      <IconButton onClick={handleOpen}>
        <EditIcon sx={{ color: "purple", width: 18, height: 18 }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UpdateTeamForm id={id} teams={teams} setOpen={setOpen}/>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateTeam;
