import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import FolderIcon from "@mui/icons-material/Folder";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import theme from "../../../theme/theme";
import { Link } from "react-router-dom";

const Data = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "#17a2b8",
              color: "white",
              borderRadius: "5px",
              columnGap: 2,
              boxShadow: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center",justifyContent:'space-around', px: 4, pt: 4 }}>
              <Box>
                <Typography sx={{ fontSize: "20px" }}>Total Clients</Typography>
                <Typography variant="h5" fontWeight={500}>
                  68
                </Typography>
              </Box>
              <Box>
                <PersonIcon
                  sx={{ height: "75px", width: "75px", color: "white" }}
                />
              </Box>
            </Box>
            <Link
              to="/clients"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box
                sx={{
                  pt: 2,
                  backgroundColor: "#1591a5",
                  display: "flex",
                  justifyContent: "center",
                  pb: 1,
                }}
              >
                <Typography sx={{ "&:hover": { scale: "1.1" } }}>
                  More info
                </Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "rgb(255,193,7)",
              color: "white",
              borderRadius: "5px",
              columnGap: 2,
              boxShadow: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center",justifyContent:'space-around', px: 4, pt: 4 }}>
              <Box>
                <Typography sx={{ fontSize: "20px" }}>Total Emails</Typography>
                <Typography variant="h5" fontWeight={500}>
                  68
                </Typography>
              </Box>
              <Box>
                <EmailIcon
                  sx={{ height: "75px", width: "75px", color: "white" }}
                />
              </Box>
            </Box>
            <Link
              to="/email"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box
                sx={{
                  pt: 2,
                  backgroundColor: "rgb(229,173,6)",
                  display: "flex",
                  justifyContent: "center",
                  pb: 1,
                }}
              >
                <Typography sx={{ "&:hover": { scale: "1.1" } }}>
                  More info
                </Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "5px",
              columnGap: 2,
              boxShadow: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent:'space-around',
                px: 4, pt:4
              }}
            >
              <Box>
                <Typography variant="h5" fontWeight={500}>
                  20
                </Typography>
                <Typography sx={{ fontSize: "20px" }}>Total Members</Typography>
              </Box>
              <Box>
                <GroupsIcon
                  sx={{ height: "75px", width: "75px", color: "white" }}
                />
              </Box>
            </Box>
            <Link to="/team" style={{textDecoration:'none', color:'white'}}>
              <Box sx={{ pt: 2, backgroundColor:'#24963e', display:'flex', justifyContent:'center', pb:1 }}>
                <Typography sx={{'&:hover':{scale: '1.1'}}}>More info</Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "#dc3545",
              color: "white",
              borderRadius: "5px",
              columnGap: 2,
              boxShadow: 2,
            }}
          >
            <Box sx={{ display: "flex",
              alignItems: "center", justifyContent:'space-around',px:4,pt:4}}>
              <Box>
              <Typography variant="h5" fontWeight={500}>
                15
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>Total Projects</Typography>
            </Box>
            <Box>
              <FolderIcon
                sx={{ height: "75px", width: "75px", color: "white" }}
              />
            </Box>
            </Box>
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box
                sx={{
                  pt: 2,
                  backgroundColor: "#c6303e",
                  display: "flex",
                  justifyContent: "center",
                  pb: 1,
                }}
              >
                <Typography sx={{ "&:hover": { scale: "1.1" } }}>
                  More info
                </Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Data;
