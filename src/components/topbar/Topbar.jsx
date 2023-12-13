import {
  Box,
  Button,
  Switch,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import "../../App.css"
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchAutoComplete from "./searchAutoComplete/SearchAutoComplete";
import IconStack from "./icon-stack/IconStack";
import ProfileMenu from "./profile-menu/ProfileMenu";
import { DarkModeContext } from "../../context/DarkModeProvider";


const Topbar = ({ setSidebarToggleValue, sidebarToggleValue }) => {
  const performSidebarToggle = () => {
    setSidebarToggleValue(!sidebarToggleValue);
  };

  const { dashtheme, toggleTheme } = useContext(DarkModeContext);

  return (
    <Box
      position="static"
      sx={{
        bgcolor: "var(--bg-navbar)",
        color: "var(--text-primary)",
        px: 3,
        borderBottom: "1px solid gray",
      }}
      className={`App ${dashtheme}`}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 0.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button onClick={() => performSidebarToggle()}>
            {sidebarToggleValue ? (
              <ArrowForwardIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </Button>
          <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
            Dashboard
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchAutoComplete />
          <Switch onChange={() => toggleTheme()}/>
          <IconStack />
          <Button>
            <ProfileMenu />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
