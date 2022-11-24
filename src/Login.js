import React, { useState } from 'react'
import {Avatar,Button,CssBaseline,TextField,Grid,Box,Typography,Container } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import Header from './Header';
import app from './Config';
import Notification from './Notification';

function Login(props) {

    const theme= createTheme();
    const auth = getAuth(app);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
   
    const hm=()=>{
        props.hometo()
    }
    const at=()=>{
        props.att()
      }

      const signup=()=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  console.log(user)
  
    props.homeinto()
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    // ..
  });
      }
      const Login=()=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    console.log(user.uid);
    console.log(user)
    if (user.email == 'admin@gmail.com') {
      props.ad()
    } else {
      props.lg(user.email)
    }
 //   props.lg(user.email)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    alert(errorMessage);
  });
      }
      
  return (
    <div>

        <Header hom={hm}  abt={at}/>
        <Notification/>
     <ThemeProvider theme={theme}>
        <Container maxWidth='xs' style={{marginTop : '10%'}}>
         <CssBaseline/>
         <Box sx={{
            marginTop : "8",
            display : 'felx',
            flexDirection : 'column',
            alignItems : 'center'
         }}>
        <Avatar sx={{ m:'1',bgcolor:'secondary.main'}}>
        <LockOutlinedIcon/>
        </Avatar>
         <Typography variant='h5'>Login</Typography>
         <Box   noValidate sx={{ mt: 1 }}>
            <TextField margin='normal'
              required fullWidth id='email' label="enter email"
              name='email' autoComplete=' email' autoFocus  onChange={(e)=>setEmail(e.target.value)} />
            <TextField margin='normal' type={"password"}
              required fullWidth id='password' label="enter password"
              name='password' autoComplete=' password' autoFocus onChange={(e)=>setPassword(e.target.value)}/>
              <Button
              onClick={Login}
             
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
           
            <Button
              onClick={signup}
             
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Signup
            </Button>
             <Grid container>           
             </Grid>
           </Box> 
          </Box>
        </Container>
     </ThemeProvider>
    
    </div>
  )
}

export default Login