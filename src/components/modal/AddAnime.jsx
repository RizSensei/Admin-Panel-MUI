import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react'
import AddAnimeForm from '../form/AddAnimeForm';

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

const AddAnime = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
    <Button
      variant="contained" onClick={handleOpen} size="small"
      sx={{backgroundColor:'#2563eb'}}
    >
      + Add Anime
    </Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <AddAnimeForm setOpen={setOpen}/>
      </Box>
    </Modal>
  </div>
  )
}

export default AddAnime