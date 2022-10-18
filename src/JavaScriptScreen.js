import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CheckoutScreen from './CheckoutScreen';



 function JavaScriptScreen() {
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
          More details about the course
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'In this course we teach you from the very basics of javascript, html, css and react. You dont need any prerequisite in order to join the course. It would be a two month course and at the end of the course you must be able to devlop your own website.'}<br></br>
          
        </Typography>
        <Button variant="contained" color="success">
             REGISTER HERE FOR THE COURSE
        </Button>
        
      </Container>
      
    </Box>
  );
}

export default  JavaScriptScreen;