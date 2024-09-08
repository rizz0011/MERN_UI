import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate(); 

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h6" gutterBottom>
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Button variant="contained" onClick={handleGoHome} sx={{ mt: 3 }}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;
