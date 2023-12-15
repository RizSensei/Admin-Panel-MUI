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
              <Typography variant="h4" fontWeight="600" color="white">
                Manage your project in one touch
              </Typography>
              <Typography color="white">
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
              <img src="./images/dashboard.png" alt="Broken" height={300} width={300} style={{objectFit:'cover'}}/>
            </Box>
          </Box>
  )
}

export default Advertisement