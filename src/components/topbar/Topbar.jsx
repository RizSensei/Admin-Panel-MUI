import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Switch, Typography } from "@mui/material";
import React, { useContext } from "react";
import "../../App.css";
import { DarkModeContext } from "../../context/DarkModeProvider";
import { SidebarContext } from "../../context/SidebarContext";
import IconStack from "./icon-stack/IconStack";
import ProfileMenu from "./profile-menu/ProfileMenu";
import SearchAutoComplete from "./searchAutoComplete/SearchAutoComplete";
import { Link } from "react-router-dom";

const Topbar = () => {
  const { dashtheme, toggleTheme } = useContext(DarkModeContext);
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

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
          <Button onClick={() => toggleSidebar()}>
            {sidebarToggle ? (
              <ArrowForwardIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </Button>
          <Typography sx={{ fontSize: "20px" }}>
            <Link to="/"  style={{ textDecoration: 'none', color:'inherit' }}>Home</Link>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchAutoComplete />
          <Switch onChange={() => toggleTheme()} />
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
