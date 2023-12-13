import { Badge, Box, Button, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeProvider";

const Icon = ({ icon: IconComponent, badgeContent, color }) => {
  const { dashtheme, toggleTheme } = useContext(DarkModeContext);
  return (
    <Button size="small">
      <Badge badgeContent={badgeContent} color={color}>
        <IconComponent fontSize="small" sx={{ color:'var(--text-primary)'}}/>
      </Badge>
    </Button>
  );
};

export default Icon;
