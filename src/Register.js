import React, { useState } from 'react'
import {Typography,CssBaseline,AppBar,Toolbar, 
  Box,Button,Container,TextField,Grid} from '@mui/material'
  import {collection,addDoc} from 'firebase/firestore'
  import { db } from './Config'
  
function Register(props) {
  const [first,setFirst]=useState('');
  const[last,setLast]=useState('')
  const[phone,setPhone] = useState('')
  const[gardian,setGardian] = useState('')
  const[course,setCourse] = useState('')
 
  const register=(e)=>{
    e.preventDefault()
    const profilereg = collection(db,'profile')
    addDoc(profilereg,{first,last,phone,gardian,course}).then(Response=>{
      console.log(Response)
     alert("updated successfully")
    }).catch(error=>{
      console.log(error)
    })
  }
  return (
    <div>
        <>
        <CssBaseline enableColorScheme/>
        <Box sx={{flexGrow : 1}}>
        <AppBar position='relative' >  
          <Toolbar>
          <Typography variant='h4'  sx={{ flexGrow: 1 }}>
                        MySchool
                    </Typography>
                    <Button color='inherit' variant='h1'  >Home</Button>
                    <Button color='inherit'  >About</Button>
                    <Button color='inherit' variant='h1'>{props.uid}</Button>  
                    <Button color='inherit' variant='h1' >Logout</Button>
          </Toolbar>
        </AppBar>
        </Box>
        <Container style={{marginTop : '2%'}}>
          <Typography variant='h3' align='center'>Profile</Typography>
        </Container>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
             Complete Profile
          </Typography>
          <Box  noValidate  sx={{ mt: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e)=>setFirst(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e)=>setLast(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="ph_number"
                  label="Phone Number"
                  name="Phone"
                  autoComplete="family-name"
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="course_name"
                  label="Course Studying"
                  name="Course"
                  autoComplete="family-name"
                  onChange={(e)=>setCourse(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="gardian_name"
                  label="Gardian_name"
                  name="Gardian"
                  autoComplete="family-name"
                  onChange={(e)=>setGardian(e.target.value)}
                />
              </Grid>
              </Grid>
              </Box>
          <Button variant='contained' sx={{ mt:3 ,mb:2}} onClick={register}>update</Button>
        </Box>
        </>
    </div>
  )
}

export default Register