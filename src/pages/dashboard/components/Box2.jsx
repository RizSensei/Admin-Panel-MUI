import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

const Box2 = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "white",
              p: 4,
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              columnGap: 2,
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "20px" }}>
                Total Clients
              </Typography>
              <Typography variant="h5" fontWeight={800}>
                68
              </Typography>
            </Box>
            <Box>
              <img src="./images/pie-chart.png" alt="" height={75} width={75} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "white",
              p: 4,
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              columnGap: 2,
            }}
          >
            <Box sx={{ display:"flex",flexDirection:"column",rowGap: 1.5, width:'100%' }}>
              <Typography sx={{ fontSize: "20px" }}>Target Clients</Typography>
              <LinearProgress
                variant="determinate"
                value={50}
                sx={{ width: "100%" }}
              />
              <Typography sx={{fontSize:'13px'}}>32 left from target</Typography>
            </Box>
            <Box></Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
        <Box
            sx={{
              backgroundColor: "white",
              p: 4,
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              columnGap: 2,
            }}
          >
            <Box>
            <Typography variant="h5" fontWeight={800}>
                20
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                Total Members
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>
                -2% than last month
              </Typography>
            </Box>
            <Box>
              <img src="./images/bar-graph.png" alt="" height={75} width={75} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
        <Box
            sx={{
              backgroundColor: "white",
              p: 4,
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              columnGap: 2,
            }}
          >
            <Box>
            <Typography variant="h5" fontWeight={800}>
                15
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                Total Projects
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>
                +2% than last month
              </Typography>
            </Box>
            <Box>
              <img src="./images/bar-graph.png" alt="" height={75} width={75} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Box2;
