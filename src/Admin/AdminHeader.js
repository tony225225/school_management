import React from 'react'
import {Typography,CssBaseline,AppBar,Box,Button,Toolbar} from '@mui/material'
function AdminHeader() {
  return (
    <div>
         <>
        <CssBaseline enableColorScheme/>
        <Box sx={{flexGrow : 1}}>
            <AppBar position='relative'>
              <Toolbar >
                    <Typography variant='h4' sx={{flexGrow : 1}}>MySchool</Typography>
                    <Button color='inherit' variant='h1'>Home</Button>
                    <Button color='inherit' variant='h1'>About</Button>
                    <Button color='inherit' variant='h1'>Contact</Button>
                    <Button color='inherit' variant='h1'>LogOut</Button>
              </Toolbar>
            </AppBar>
        </Box>
        </>
    </div>
  )
}

export default AdminHeader