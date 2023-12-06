import React from "react";
import Layout from '../../layout/Layout';
import { Box } from '@mui/material';

const Error = ({error}) => {
    return (
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          An error occurred: {error.message}
        </Box>
    );
};

export default Error;
