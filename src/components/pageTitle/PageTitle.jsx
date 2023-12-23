import { Box, Typography } from "@mui/material";
import React from "react";

const PageTitle = ({title}) => {
  return (
    <>
      <Box sx={{ backgroundColor:'white', color:'#343a40', py:1, px:3, mb:2, borderRadius:'10px', width:'300px'}}>
        <Typography variant="h6">{title}</Typography>
      </Box>
    </>
  );
};

export default PageTitle;
