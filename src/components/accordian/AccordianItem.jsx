import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Icon, List, ListItemButton, Stack } from "@mui/material";

const AccordianItem = ({icon:IconComponent, title, contentArray}) => {
  return (
    <Accordion style={{ backgroundColor: "transparent", color: "white", my:0 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}>
        <Box sx={{ display: "flex", alignItems:'center', columnGap: 1 }}>
          <IconComponent size="small" sx={{ fontWeight: 600, fontSize: "25px" }}/>
          <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
            {title}
          </Typography>
        </Box>
      </AccordionSummary>
      <List sx={{ ml: 5, fontSize: "15px" }}>
        {
            contentArray?.map((content,index) => (
                <ListItemButton  key={index}>{content}</ListItemButton>
            ))
        }
      </List>
    </Accordion>
  );
};

export default AccordianItem;
