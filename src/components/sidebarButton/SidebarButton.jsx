import { Button, Typography } from "@mui/material";
import React, { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { PageTitleContext } from "../../context/PageTitleContext";

const SidebarButton = ({ icon: IconComponent, title, route, isTitleHidden }) => {
  const navigate = useNavigate();
  // const { setPageTitle } = useContext(PageTitleContext);

  const handleClick = useCallback(() => {
    // document.title = title;
    // setPageTitle(document.title)
    navigate(route);
  }, [title, route, navigate]);

  return (
    <Button
      onClick={handleClick}
      type="button"
      variant="outlined"
      startIcon={<IconComponent sx={{ fontWeight: '600', color: 'gray' }} />}
      sx={{
        color: "white",
        py: 2,
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        "&:hover": { backgroundColor: "#334155" },
      }}
    >
      <Typography sx={{ fontWeight: '500', textTransform: 'none' }}>
        {!isTitleHidden && title}
      </Typography>
    </Button>
  );
};


export default SidebarButton;
