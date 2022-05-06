import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";


export default function Signup() {
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    age:"",
    gender:"",
    address:"",
    city: ""
  });


  const onHandleChange = (e) => {
    setRegisterDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { name, email, password, cpassword,age,gender,address,city} = registerDetails;

  const navigate = useNavigate();
  
  const handleSubmit = async(event) => {
    event.preventDefault();

    const { name, email, password, cpassword,age,gender,address,city} = registerDetails;
    console.log(registerDetails);
    const res = await fetch("/signup",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name,email,password,age,gender,address,city
        })
    })
     const result = await res.json();

  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  onChange={onHandleChange}
                  value={name}
                  id="Name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={onHandleChange}
                  value={email}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
             
              <Grid item xs={12}  sm={6}>
                <TextField
                  required
                  fullWidth
                  name="age"
                  label="Age"
                  onChange={onHandleChange}
                  value={age}
                  type="number"
                  id="age"
                  autoComplete="age"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="gender"
                  label="Gender"
                  onChange={onHandleChange}
                  value={gender}
                  type="text"
                  id="gender"
                  autoComplete="gender"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  onChange={onHandleChange}
                  value={address}
                  type="text"
                  id="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="city"
                  label="City"
                  onChange={onHandleChange}
                  value={city}
                  type="text"
                  id="city"
                  autoComplete="city"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  onChange={onHandleChange}
                  value={password}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="cpassword"
                  label="Confirm Password"
                  onChange={onHandleChange}
                  value={cpassword}
                  type="password"
                  id="cpassword"
                  autoComplete="confirm-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}
