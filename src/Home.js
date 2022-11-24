import React from 'react'
import Header from './Header'
import {Card, Grid,Container, Typography,CardMedia,CardContent} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainPost from './MainPost';
import Footer from './Footer';

const Mainpost = {
    title: 'MySchool',
    description:
      "Welcome to the best School website ever , This website helps the students to get the services in all one touch",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
   
  };
function Home(props) {
      
      const theme = createTheme();
      const at=()=>{
        props.att()
      }
      const lg=()=>{
        props.logininto()
      }
      const hm=()=>{
        props.hometo()
      }
      const cto=()=>{
         props.contactto()
      }
  return (
    <div>
     <Header abt={at} lgto={lg} hom={hm} ct={cto}/>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Container maxWidth="100%" >
    <MainPost post={Mainpost}/>
    </Container>
    <Container maxWidth='sm' style={{marginTop : '3%'}}>
   <Typography variant='h4' align='center' color='textPrimary'> Programms</Typography>
    </Container>
    <Container maxWidth='lg' style={{padding : '20px'}}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
               <CardMedia image='https://img.freepik.com/free-vector/science-word-orange-background-concept_23-2148548239.jpg?w=2000'
               title = 'science' style={{paddingTop : '56.25%'}}></CardMedia>
             <CardContent style={{   flexGrow:'1'}}>
                <Typography variant='h6'>
                    Science
                </Typography>
             </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
               <CardMedia image='https://nwc.edu/academics/photos/program-photos/computer-science.jpg'
               title = 'computer science' style={{paddingTop : '56.25%'}}></CardMedia>
             <CardContent style={{   flexGrow:'1'}}>
                <Typography variant='h6'>
                    Computer Science
                </Typography>
             </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
               <CardMedia image='https://img.jagranjosh.com/imported/images/E/Articles/maths2.jpg'
               title = 'Mathematics' style={{paddingTop : '56.25%'}}></CardMedia>
             <CardContent style={{   flexGrow:'1'}}>
                <Typography variant='h6'>
                    Mathematics
                </Typography>
             </CardContent>
            </Card>
            </Grid>
        </Grid>
        
    </Container>
    
    </ThemeProvider>
    <Footer/>
   </div>
  )
}

export default Home