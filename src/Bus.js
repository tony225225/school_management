import React from 'react'
import {CssBaseline,AppBar,Toolbar,Box,Typography,Button,Container,
 Grid,Card,CardMedia,CardContent} from '@mui/material'
import MainPost from './MainPost'

const Mainpost = {
    title: 'MySchool - Bus services',
    description:
      "welcome to bus service,you can check to which all routes busses are available",
    image: 'https://etimg.etb2bimg.com/thumb/msid-74870927,width-1200,resizemode-4/.jpg',
    imageText: 'main image description',
   
  };
function Bus(props) {
   const service=()=>{
   props.serviceto()
   }
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
                <Button color='inherit' variant='h1'>{props.uid}</Button>              
                <Button color='inherit' variant='h1'>Logout</Button>
            </Toolbar>
          </AppBar>
         </Box>
         <Container maxWidth="100%" >
    <MainPost post={Mainpost}/>
    </Container>
    <Container maxWidth='lg' style={{padding : '20px'}}>
    <Grid container spacing={4}>
    <Grid item xs={12} sm={6} md={4}>
            <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
               <CardMedia image='https://i.ytimg.com/vi/DDH4UFBECVQ/maxresdefault.jpg'
               title = 'Kochi' style={{paddingTop : '56.25%' ,cursor : 'pointer'}}
               onClick={service}
               ></CardMedia>
             <CardContent style={{   flexGrow:'1'}}>
                <Typography variant='h6'>
                    To Kochi
                </Typography>
             </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
               <CardMedia image='https://www.sathyamonline.com/wp-content/uploads/2021/02/thodupuzha-town.jpg'
               title = 'Thodupuzha' style={{paddingTop : '56.25%' ,cursor : 'pointer'}}
               onClick={service}
               ></CardMedia>
             <CardContent style={{   flexGrow:'1'}}>
                <Typography variant='h6'>
                    To Thodupuzha
                </Typography>
             </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
               <CardMedia image='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Muvattupuzha_Town_DSC02679.JPG/300px-Muvattupuzha_Town_DSC02679.JPG'
               title = 'Muvattupuzha' style={{paddingTop : '56.25%' ,cursor : 'pointer'}} onClick={service}
                ></CardMedia>
             <CardContent style={{   flexGrow:'1'}}>
                <Typography variant='h6'>
                    To Muvattupuzha
                </Typography>
             </CardContent>
            </Card>
            </Grid>
    </Grid>
    </Container>

        </>
    </div>
  )
}

export default Bus