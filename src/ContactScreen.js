import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



 function ContactScreen() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Contact us through our email and contact number
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'easylearning@gmail.com'}<br></br>
          {'0456889759 / 0564567788'}
        </Typography>
        
      </Container>
      
    </Box>
  );
}

export default ContactScreen;

