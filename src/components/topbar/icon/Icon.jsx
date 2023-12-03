import { Badge, Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";

const Icon = ({ icon: IconComponent, badgeContent, color }) => {
  return (
    <Button size="small">
      <Badge badgeContent={badgeContent} color={color}>
        <IconComponent color="action" fontSize="small"/>
      </Badge>
    </Button>
  );
};

export default Icon;
