import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Advertisement = () => {
  return (
    <Box
            sx={{
              px: 5,
              py: 3,
              borderRadius: "5px",
              background: `linear-gradient(to bottom, #3c4147, #898d90)`,
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                rowGap: 2,
              }}
            >
              <Typography variant="h5" fontWeight="500" color="white">
                Manage your project in one touch
              </Typography>
              <Typography color="white" variant="body1">
                Let Fillow manage your project automatically with our best AI
                systems
              </Typography>
              <Box>
                <Button
                  variant="contained"
                  sx={{ bgColor: "white", borderRadius: "30px" }}
                >
                  Try Free Now
                </Button>
              </Box>
            </Box>
            <Box sx={{ width: "50%", display:'flex', alignItems:'center', justifyContent:'center' }}>
              <img src="./images/dashboard.png" alt="Broken" height={250} width={250} style={{objectFit:'cover'}}/>
            </Box>
          </Box>
  )
}

export default Advertisement