import { Button, Typography } from "@mui/material";
import React, { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { PageTitleContext } from "../../context/PageTitleContext";

const SidebarButton = ({
  icon: IconComponent,
  title,
  route,
  isTitleHidden,
}) => {
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
      startIcon={<IconComponent sx={{ fontWeight: "500", color: "gray" }} />}
      sx={{
        color: "white",
        py: 1.5,
        pl: 3,
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        "&:hover": { backgroundColor: "#334155" },
        
      }}
    >
      <Typography sx={{ fontWeight: "400", textTransform: "none", fontSize:'14px'}}>
        {!isTitleHidden && title}
      </Typography>
    </Button>
  );
};

export default SidebarButton;
