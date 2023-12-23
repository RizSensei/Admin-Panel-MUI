import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import SidebarButton from "../sidebarButton/SidebarButton";

import EmailIcon from "@mui/icons-material/Email";
import FolderIcon from "@mui/icons-material/Folder";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from '@mui/icons-material/Person';
import { SidebarContext } from "../../context/SidebarContext";
import theme from "../../theme/theme";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const {sidebarToggle, toggleSidebar} = useContext(SidebarContext)
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
      route: '/projects'
    },
    {
      title: "Clients",
      icon: PersonIcon,
      route: '/clients'
    },
    {
      title: "Emails",
      icon: EmailIcon,
      route: '/email'
    },
  ];

  return (
    <Box
      sx={{
        width: sidebarToggle ? "70px" : "250px",
        height: "100%",
        bgcolor: "primary.main",
        transition: "width 0.3s ease-in-out",
        cursor: "pointer",
      }}
    >
      <Link to = "/" style={{ textDecoration: 'none' }}>
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
        {
          !sidebarToggle && <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: theme.typography.fontFamily
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
        }
        
      </Box>
      </Link>
     
      <Box sx={{ mt: 3 }}>
        {sideBarMenu.map((item,index) => (
          <SidebarButton key={index} icon={item.icon} title={item.title} route={item.route} isTitleHidden={sidebarToggle}/>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
