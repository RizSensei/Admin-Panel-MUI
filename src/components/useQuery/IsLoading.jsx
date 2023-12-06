import React from 'react'
import Layout from '../../layout/Layout';
import { Box } from '@mui/material';
import CircularProgress from "@mui/material/CircularProgress";

const IsLoading = () => {
    return (
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex:1
          }}
        >
          <CircularProgress />
        </Box>
    );
}

export default IsLoading