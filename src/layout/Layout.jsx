import React from 'react'
import { Box } from '@mui/material'
import Sidebar from "../components/sidebar/Sidebar"
import Topbar from "../components/topbar/Topbar"

import { useTheme } from '@mui/system';

const Layout = ({children}) => {
  const theme = useTheme();
  return (
    <>
    <Box sx={{ height:'100vh',width:'100vw', display:'flex'}}>
      <Sidebar/>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Topbar/>
        <Box style={{backgroundColor:theme.palette.secondary.main , height:'100%',
            overflowY: 'auto', 
            flex: 1}} sx={{ p:3 }}>{children}</Box>
      </Box>
    </Box>
    </>
  )
}

export default Layout