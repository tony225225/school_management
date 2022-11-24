import React from 'react'
import AdminHeader from './AdminHeader'
import MainPost from '../MainPost';
import { CssBaseline,Container, Typography,Grid,Card,CardMedia,CardContent} from '@mui/material'
const Mainpost = {
  title: 'MySchool - Welcome Admin',
  description:
    "Welcome to the best School website ever , This website helps the students to get the services in all one touch",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
 
};
function Adminhome(props) {
  const libra=()=>{
    props.libto()
  }
  return (
    <div>
       <AdminHeader/>
       <CssBaseline enableColorScheme/>
       <Container maxWidth="100%" >
      <MainPost post={Mainpost}/>
    </Container>
        <Container style={{MarginTop : '3%'}}>
          <Typography variant='h3'  align='center'>Welcome to Admin Panel</Typography>
        </Container>
        <Container maxWidth='lg' style={{padding : '20px'}}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
               <CardMedia image='https://3.bp.blogspot.com/-IWM0_Rp9GLc/W3wtaA1MQJI/AAAAAAAAHYY/gTuPl8DeEmYfaHOLcluA2mgsPrZp82NywCLcBGAs/s1600/Library.png'
               title = 'libaray' style={{paddingTop : '56.25%' ,cursor : 'pointer'}} onClick ={libra}              
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
    </div>
  )
}

export default Adminhome