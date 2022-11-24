import React from 'react'
import Header from './Header'
import {Typography,CssBaseline,Container,Grid, TextField ,Box, Button,TextareaAutosize} from '@mui/material'
function Contact() {
  return (
    <div>
        <Header/>
        <CssBaseline enableColorScheme/>
         <Container maxWidth='lg' style={{marginTop : '5%'}}>
            <Typography variant='h3' align='center'>Contact</Typography>
         </Container>
       <Container>
        <Box  sx={{marginTop : '8%'}}>
       <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <TextField 
            autoComplete='given-name'
            name='name'
            required fullWidth
            id='name'
            label='Name' autoFocus />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
            autoComplete='given-name'
            name='email'
            required fullWidth
            id='email'
            label='email' autoFocus />
        </Grid>
        <Grid item xs={12}>
        
            <TextareaAutosize 
             aria-label="maximum height"
             minRows={8}
            autoComplete='given-name'
            style={{ width: 800 }}
            name='message'
            placeholder='Message'
            required 
            fullWidth
            id='message'
            label='message' autoFocus >
            </TextareaAutosize>
        </Grid>
       </Grid>
        </Box>
        <Button variant='contained' sx={{ mt:3 ,mb:2}}>Submit</Button>
       </Container>
    </div>
  )
}

export default Contact