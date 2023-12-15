import { Box } from "@mui/material";
import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
// import { PageTitleContext } from "../context/PageTitleContext";
import { useTheme } from "@mui/system";
import { DarkModeContext } from "../context/DarkModeProvider";
import LoginAdmin from "../pages/login/LoginAdmin";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/adminSlice";

const Layout = ({ children }) => {
  const theme = useTheme();
  const { dashtheme, toggleTheme } = useContext(DarkModeContext);
  const user = useSelector(selectUser);
  // const { pageTitle } = useContext(PageTitleContext);

  return (
    <>
      <ToastContainer />
      <Box sx={{ height: "100vh", width: "100vw", display: "flex" }}>
        {user?.isAuthenticated ? (
          <>
            <Sidebar />
            <Box
              sx={{ width: "100%", display: "flex", flexDirection: "column" }}
            >
              <Topbar />
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
          </>
        ) : (
          <LoginAdmin />
        )}
      </Box>
    </>
  );
};

export default Layout;
