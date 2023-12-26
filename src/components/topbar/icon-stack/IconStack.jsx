import { Stack } from "@mui/material";
import React from "react";
import Icon from "../icon/Icon";

import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import StarIcon from "@mui/icons-material/Star";
import EventIcon from "@mui/icons-material/Event";

const IconStack = () => {
  return (
    <Stack direction="row" spacing={-2}>
      <Icon icon={StarIcon} badgeContent={1} color="info" />
      <Icon icon={NotificationsIcon} badgeContent={1} color="warning" />
      <Icon icon={EmailIcon} badgeContent={1} color="success" />
      <Icon icon={EventIcon} badgeContent={1} color="error" />
    </Stack>
  );
};

export default IconStack;
