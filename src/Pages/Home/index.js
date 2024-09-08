import React from "react";
import Profile from "../Profile";
import { Grid, Container, Typography, Paper } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Welcome to the Home Page!
            </Typography>
            <Typography variant="body1">
              You are now logged in.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Profile />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
