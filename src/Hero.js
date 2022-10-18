import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


function Hero() {
    return (
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              
            >
              Best platform to learn coding and business analytics courses
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
               Grow your career with best in class courses with expert mentors.
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              We also provide online sessions through which you can engage and learn more with these live 
              and highly interactive classes alongside your peers. 
            </Typography>  
            


            
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" align="center">View all our courses</Button>
              
            </Stack>
          </Container>
        </Box>
    )
}

export default Hero;