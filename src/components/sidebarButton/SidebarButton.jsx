import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SidebarButton = ({ icon: IconComponent, title, route, isTitleHidden }) => {

  return (
    <Link to={route}>
      <Button
      // size="large"
      type="button"
        variant="outlined"
        startIcon={<IconComponent  sx={{fontWeight:'600', color:'gray'}}/>}
        sx={{ color: "white", mb:2, width:'100%', display:'flex', justifyContent:'flex-start' }}
      >
        <Typography sx={{fontWeight:'500', textTransform: 'none'}}>
          {!isTitleHidden && title}
        </Typography>
      </Button>
    </Link>
  );
};

export default SidebarButton;
