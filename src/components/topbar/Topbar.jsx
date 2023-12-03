import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import NightlightIcon from "@mui/icons-material/Nightlight";

import SearchAutoComplete from "./searchAutoComplete/SearchAutoComplete";
import IconStack from "./icon-stack/IconStack";
import ProfileMenu from "./profile-menu/ProfileMenu";

const Topbar = () => {
  return (
      <Box
        position="static"
        sx={{ bgcolor: "secondary.main", color: "black", px: 3, borderBottom:'1px solid gray'}}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 0.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button>
              <MenuIcon fontSize= "large" />
            </Button>
            <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
              Dashboard
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SearchAutoComplete />
            <Button>
              <NightlightIcon fontSize="small"/>
            </Button>
            <IconStack />
            <Button>
              <ProfileMenu/>
            </Button>
          </Box>
        </Box>
      </Box>
  );
};

export default Topbar;
