import React from 'react'
import {Typography,CssBaseline,AppBar,Toolbar,
    Box, Button,Container,Grid,CardContent,Card,CardMedia} from '@mui/material'
import MainPost from './MainPost'
import { getAuth, signOut } from "firebase/auth";
import app from './Config';
import Footer from './Footer';
const Mainpost = {
    title: 'MySchool',
    description:
      "Welcome to the best School website ever , This website helps the students to get the services in all one touch",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
   
  };
function Banner(props) {
    
    const auth = getAuth(app);
    const lib=()=>{
        props.lb()
    }
    const pro=()=>{
        props.profile()
    }
    const bs=()=>{
      props.rt()
    }
    const can=()=>{
      props.canto()
    }
    const out=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            
            props.signout()
          }).catch((error) => {
            // An error happened.
            alert("oops!")
          });
    }
    console.log(props.uid)
  return (
    <div>
        <>
        <CssBaseline enableColorScheme/>
         <Box sx={{flexGrow : 1}}>
          <AppBar position='relative'>
            <Toolbar>
                <Typography variant='h4' sx={{flexGrow : 1}}>MySchool</Typography>
                <Button color='inherit' variant='h1'>Home</Button>
                <Button color='inherit' variant='h1'>About</Button>
                <Button color='inherit' variant='h1' onClick={pro}>{props.uid}</Button>
                <Button color='inherit' variant='h1' onClick={out}>Logout</Button>
            </Toolbar>
          </AppBar>
         </Box>
         <Container maxWidth="100%" >
    <MainPost post={Mainpost}/>
    </Container>
    <Container maxWidth='sm' style={{marginTop : '3%'}}>
   <Typography variant='h4' align='center' color='textPrimary'> services</Typography>
    </Container>
    <Container maxWidth='lg' style={{padding : '20px'}}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
               <CardMedia image='https://3.bp.blogspot.com/-IWM0_Rp9GLc/W3wtaA1MQJI/AAAAAAAAHYY/gTuPl8DeEmYfaHOLcluA2mgsPrZp82NywCLcBGAs/s1600/Library.png'
               title = 'libaray' style={{paddingTop : '56.25%' ,cursor : 'pointer'}}
               onClick={lib} 
               ></CardMedia>
             <CardContent style={{   flexGrow:'1'}}>
                <Typography variant='h6'>
                    Libary
                </Typography>
             </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
               <CardMedia image='https://4.imimg.com/data4/MX/SH/ANDROID-45759449/product-500x500.jpeg'
               title = 'canteen' style={{paddingTop : '56.25%' ,cursor : 'pointer'}}
                onClick={can}
               ></CardMedia>
             <CardContent style={{   flexGrow:'1'}}>
                <Typography variant='h6'>
                    Canteen
                </Typography>
             </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
               <CardMedia image='https://etimg.etb2bimg.com/thumb/msid-74870927,width-1200,resizemode-4/.jpg'
               title = 'Bus' style={{paddingTop : '56.25%' ,cursor : 'pointer'}}
               onClick={bs} 
               ></CardMedia>
             <CardContent style={{   flexGrow:'1'}}>
                <Typography variant='h6'>
                    Bus service
                </Typography>
             </CardContent>
            </Card>
            </Grid>
            </Grid>
            </Container>
         <Footer/>
        </>   
    </div>
  )
}

export default Banner