import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Icon, List, ListItemButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const AccordianItem = ({ icon: IconComponent, title, route }) => {
  return (
    // <Button
    //   style={{ backgroundColor: "transparent", color: "white", my: 0, py:2 , width:'100%'}}
    // >
    //     <Box sx={{ display: "flex", columnGap: 1 }}>
    //       <IconComponent
    //         size="small"
    //         sx={{ fontWeight: 600, fontSize: "25px" }}
    //       />
    //       <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
    //         {title}
    //       </Typography>
    //     </Box>
    // </Button>
    <Link to={route}>
      <Button
      type="button"
        variant="outlined"
        startIcon={<IconComponent />}
        sx={{ color: "white", mb:1 }}
      >
        {title}
      </Button>
    </Link>
  );
};

export default AccordianItem;
