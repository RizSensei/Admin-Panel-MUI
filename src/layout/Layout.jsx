import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useTheme } from "@mui/system";

const Layout = ({ children }) => {
  const theme = useTheme();

  const [sidebarToggleValue, setSidebarToggleValue] = useState(false);

  return (
    <>
    <ToastContainer/>
      <Box sx={{ height: "100vh", width: "100vw", display: "flex" }}>
        <Sidebar sidebarToggleValue={sidebarToggleValue} />
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <Topbar
            sidebarToggleValue={sidebarToggleValue}
            setSidebarToggleValue={setSidebarToggleValue}
          />
          <Box
            style={{
              backgroundColor: theme.palette.secondary.main,
              height: "100%",
              overflowY: "auto",
              flex: 1,
            }}
            sx={{ p: 2 }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
