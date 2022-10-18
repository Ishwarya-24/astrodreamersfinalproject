
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



 function FeatureScreen() {
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
          DATA OFFERINGS
        </Typography><br></br><br></br>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Online courses- Engage and Learn with these live and highly interactive classes.'}<br></br><br></br>
          {'Expert Mentors- Have one to one sessions with our experts to leverage your skills.'}<br></br><br></br>
          {'Community- Share your knowledge with other peers and learn.'}<br></br><br></br>
          
        </Typography>
        
      </Container>
      
    </Box>
  );
}

export default FeatureScreen;

