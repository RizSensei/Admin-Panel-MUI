import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import AccordianItem from "../accordian/AccordianItem";

import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from '@mui/icons-material/Groups';
import FolderIcon from '@mui/icons-material/Folder';
import EmailIcon from "@mui/icons-material/Email";

const Sidebar = () => {
  return (
    <Box sx={{ width: "250px", height: "100%", bgcolor: "primary.main" }}>
      <Box
        sx={{
          display: "flex",
          columnGap: 0.5,
          py: 1,
        }}
      >
        <Button>
          <Avatar sx={{ width: 44, height: 44 }}>.f</Avatar>
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ color: "white", fontWeight: "600" }}>
            .fillow
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "600", fontSize: "10px" }}
          >
            Rizen Admin Dashboard
          </Typography>
        </Box>
      </Box>
      <Box sx={{mt:2}}>
        <AccordianItem icon={HomeIcon} title="Dashboard" route="/"/>
        <AccordianItem icon={GroupsIcon} title="Teams" route="/team"/>
        <AccordianItem icon={FolderIcon} title="Projects" />
        <AccordianItem icon={EmailIcon} title="Email"/>
      </Box>
    </Box>
  );
};

export default Sidebar;