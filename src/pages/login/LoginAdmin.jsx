import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../redux/features/adminSlice";

const LoginAdmin = () => {
  const retrieveUsers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await axios.get("http://localhost:3000/users");
    return response.data;
  };

  const {
    data: users,
    error,
    isLoading,
    refetch,
  } = useQuery("projectsData", retrieveUsers);

  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container component="main" sx={{ height: "100vh", width: "100vw" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{backgroundColor:'#f3f0f9'}}>
          <Box
            component={Paper}
            sx={{
              my: 8,
              mx: 10,
              py:5,
              px:4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", columnGap:1, mb:2 }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  backgroundColor: "purple",
                  fontWeight: "600",
                  fontSize: "50px",
                }}
              >
                f
              </Avatar>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: "600" }}>
                  .fillow
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "10px" }}>
                  Rizen Admin Dashboard
                </Typography>
              </Box>
            </Box>

            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              onSubmit={(values) => {
                let existing_user = users?.find(
                  (user) =>
                    values.username === user.username &&
                    values.password === user.password
                );

                if (existing_user) {
                  dispatch(
                    login({
                      username: values.username,
                      password: values.password,
                    })
                  );
                  toast.success("Welcome to .fillow");
                } else {
                  toast.error("Invalid Credentials");
                }
              }}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    autoComplete="username"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                  size="large"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor:'purple' }}
                  >
                    Login
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginAdmin;
