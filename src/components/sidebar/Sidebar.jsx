import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import SidebarButton from "../sidebarButton/SidebarButton";

import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";

const Sidebar = ({ sidebarToggleValue }) => {
  const sideBarMenu = [
    {
      title: "Dashboard",
      icon: HomeIcon,
      route: '/'
    },
    {
      title: "Teams",
      icon: GroupsIcon,
      route: '/team'
    },
    {
      title: "Projects",
      icon: FolderIcon,
      route: '/project'
    },
    {
      title: "Email",
      icon: EmailIcon,
      // route: '/email'
    },
  ];

  return (
    <Box
      sx={{
        width: sidebarToggleValue ? "70px" : "250px",
        height: "100%",
        bgcolor: "primary.main",
        transition: "width 0.3s ease-in-out",
        cursor: "pointer",
      }}
    >
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
      <Box sx={{ mt: 2, display: "flex", flexDirection: "column" }}>
        {sideBarMenu.map((item) => (
          <SidebarButton icon={item.icon} title={item.title} route={item.route} isTitleHidden={sidebarToggleValue} />
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
