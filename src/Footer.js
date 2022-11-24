import React from 'react'
import {Container,Typography,Box,Link} from '@mui/material'
function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="http://localhost:3000/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
function Footer() {
  return (
    <div>
<Box component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}>
<Container maxWidth="sm">
          <Typography variant="body1">
            MySchool
          </Typography>
          <Copyright />
        </Container>
</Box>
    </div>
  )
}

export default Footer