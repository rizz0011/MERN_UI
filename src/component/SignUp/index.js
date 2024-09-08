import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:8000/user/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
      const resData = await res.json();
      if (resData.sucess === false) {
        alert("Oops something went wrong user not created!");
      } else {
        alert("User Created Successfully");
        navigate("/login");
      }
      console.log(resData);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #ddd",
          borderRadius: 2,
          padding: 4,
          boxShadow: 3,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Sign Up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={state?.name}
            onChange={handleChange}
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={state?.email}
            onChange={handleChange}
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            value={state?.password}
            onChange={handleChange}
            label="Password"
            id="password"
            autoComplete="new-password"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <Link
            href="/login"
            variant="body2"
            sx={{ mt: 2, display: "block", textAlign: "center" }}
          >
            Already have an account? Login
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
