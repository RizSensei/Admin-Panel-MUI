import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DashboardDataLayout = ({title, value, icon:IconComponent, link, upperCardColor, lowerCardColor}) => {
  return (
    <Box
      sx={{
        backgroundColor: upperCardColor,
        color: "white",
        borderRadius: "5px",
        columnGap: 2,
        boxShadow: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          px: 4,
          pt: 4,
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "18px" }}>{title}</Typography>
          <Typography variant="h6" fontWeight={500}>
            {value}
          </Typography>
        </Box>
        <Box>
          <IconComponent sx={{ height: "70px", width: "70px", color: "white" }} />
        </Box>
      </Box>
      <Link to={link} style={{ textDecoration: "none", color: "white" }}>
        <Box
          sx={{
            pt: 2,
            backgroundColor: lowerCardColor,
            display: "flex",
            justifyContent: "center",
            pb: 1,
          }}
        >
          <Typography variant="body2" sx={{ "&:hover": { scale: "1.1" } }}>
            More info
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default DashboardDataLayout;
