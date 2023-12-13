import React, { useContext, useState } from "react";
import { Box, createTheme } from "@mui/material";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useTheme } from "@mui/system";
import { DarkModeContext } from "../context/DarkModeProvider";

const Layout = ({ children }) => {
  const theme = useTheme();
  const [sidebarToggleValue, setSidebarToggleValue] = useState(false);
  const { dashtheme, toggleTheme } = useContext(DarkModeContext);

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
              backgroundColor: "var(--bg-navbar)",
              height: "100%",
              overflowY: "auto",
              flex: 1,
            }}
            sx={{ p: 2, fontFamily: theme.typography.fontFamily }}
            className={`App ${dashtheme}`}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
