import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Course Enrollment
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Course"
            name="Course"
            label="Course"
            fullWidth
            autoComplete="Course"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Phone Number"
            name="Phone Number"
            label="Phone Number"
            fullWidth
            autoComplete="Phone Number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="Email"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="I agree to accept terms and conditions"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}