import React from 'react'
import {Typography,CssBaseline,AppBar,Toolbar,Box,
    Button,Container,Grid,TextField} from '@mui/material'

function Busservice() {
  return (
    <div>
        <>
        <CssBaseline enableColorScheme/>
        <Box sx={{flexGrow :1}}>
        <AppBar position='relative'>
            <Toolbar>
                <Typography variant='h4' sx={{flexGrow : 1}}>MySchool</Typography>
                <Button color='inherit' variant='h1'>Home</Button>
                <Button color='inherit' variant='h1'>About</Button>
                <Button color='inherit' variant='h1'>Logout</Button>
            </Toolbar>
        </AppBar>
        </Box>
        <Container maxWidth='lg' style={{marginTop : '3%'}}>
        <Typography variant="h5" align='center' gutterBottom>
        Book Bus
      </Typography>
      <Grid container spacing={4}>
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
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
           </Grid>
      <Button variant='contained' sx={{ mt:3 ,mb:2}} >Submit</Button>
        </Container>
        </>
    </div>
  )
}

export default Busservice