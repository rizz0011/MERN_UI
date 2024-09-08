import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [data, setData] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    fetch(
      `http://localhost:8000/user/user-profile/${localStorage.getItem(
        "userID"
      )}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    )
      .then((res) =>
        res.json().then((data) => {
          console.log("res - ", data);
          setData(data.user);
        })
      )
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {data ? (
        <Card sx={{ boxShadow: 3 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item sm={8}>
                <Typography variant="h5" gutterBottom>
                  Hello, {data.name}!
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Email: {data.email}
                </Typography>
              </Grid>
              <Grid item sm={4} display="flex" justifyContent="flex-end">
                <Button variant="outlined" onClick={() => navigate('/post')}>
                  Check Your Post
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
        >
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
}
