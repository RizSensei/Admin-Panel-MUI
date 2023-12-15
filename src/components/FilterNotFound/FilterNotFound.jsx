import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const FilterNotFound = () => {
  return (
    <Box sx={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center', py:9}}>
        <img src="../images/Not Found.jpg" alt="Not Found" height={400}/>
    </Box>
    
  )
}

export default FilterNotFound