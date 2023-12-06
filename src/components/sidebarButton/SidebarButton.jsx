import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SidebarButton = ({ icon: IconComponent, title, route, isTitleHidden }) => {

  return (
    <Link to={route}>
      <Button
      size="large"
      type="button"
        variant="outlined"
        startIcon={<IconComponent />}
        sx={{ color: "white", mb:1 }}
      >
        {!isTitleHidden && title}
      </Button>
    </Link>
  );
};

export default SidebarButton;
