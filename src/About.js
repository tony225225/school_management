import React from 'react'
import { Typography , AppBar,Card,CardContent,Grid,
  CssBaseline,Container, Toolbar,CardMedia,Link} from '@mui/material/';
function About() {
  
  return (
    <div>
     <>
         <CssBaseline enableColorScheme />
         <AppBar position='relative'>
          <Toolbar >
            <Typography variant='h5' >About</Typography>
          </Toolbar>
         </AppBar>
         <main>
          <Container maxWidth='sm' style={{ marginTop : '50px' }}>
            <Typography variant='h3' align='center' color="textPrimary" gutterBottom>
                  About the School
            </Typography>
            <Typography variant='h5' align='center' colour='textSecondary' paragraph>
              Hi Everyone, Here we can see different events that happened in our school...Sharing some memories..
            </Typography>

          </Container>
          <Container maxWidth='md' style={{padding : '20px'}}>
            <Grid container spacing={4} >
              <Grid item xs={12} sm={6} md={4}>
                <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
                  <CardMedia image='https://www.learnesl.net/wp-content/uploads/2018/08/How-to-Celebrate-Teachers-Day-at-School.jpg'
                    title ='Teachers Day' 
                    style={{paddingTop : '56.25%'}}
                    >

                  </CardMedia>
                  <CardContent style={{   flexGrow:'1'}}>
                    <Typography gutterBottom variant='h5'>
                      Teachers day
                    </Typography>
                    <Typography>
                      This is the day we celebrate our teachers day
                    </Typography>
                  </CardContent>
                </Card>
                
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
                  <CardMedia image='https://3.imimg.com/data3/VH/NN/MY-3781414/annualday-function-250x250.jpg'
                    title ='Annual Day' 
                    style={{paddingTop : '56.25%'}}
                    >

                  </CardMedia>
                  <CardContent style={{   flexGrow:'1'}}>
                    <Typography gutterBottom variant='h5'>
                      Annual Day
                    </Typography>
                    <Typography>
                      This is the day we celebrate our Annual  day
                    </Typography>
                  </CardContent>
                </Card>
                
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
                  <CardMedia image='https://karpagamtech.ac.in/kit/wp-content/uploads/2021/02/IMG_20210216_154345-1024x769.jpg'
                    title ='Freshers Day' 
                    style={{paddingTop : '56.25%'}}
                    >

                  </CardMedia>
                  <CardContent style={{   flexGrow:'1'}}>
                    <Typography gutterBottom variant='h5'>
                      Freshers Day
                    </Typography>
                    <Typography>
                      This is the day we celebrate our Freshers  day
                    </Typography>
                  </CardContent>
                </Card>
                
              </Grid>
            </Grid>
            
            <Grid container spacing={4} >
              <Grid item xs={12} sm={6} md={4}>
                <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
                  <CardMedia image='https://www.oneindia.com/img/2013/09/11-onam-celebration-601.jpg'
                    title ='onam celebration' 
                    style={{paddingTop : '56.25%'}}
                    >

                  </CardMedia>
                  <CardContent style={{   flexGrow:'1'}}>
                    <Typography gutterBottom variant='h5'>
                      Onam Celebration
                    </Typography>
                    <Typography>
                      This is the day we celebrate our wonderfull onam
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             
              <Grid item xs={12} sm={6} md={4}>
                <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
                  <CardMedia image='https://aisat.ac.in/wp-content/uploads/2017/12/IMG_3281.jpg'
                    title ='Christmas Celebration' 
                    style={{paddingTop : '56.25%'}}
                    >

                  </CardMedia>
                  <CardContent style={{   flexGrow:'1'}}>
                    <Typography gutterBottom variant='h5'>
                      Christmas Celebration
                    </Typography>
                    <Typography>
                      This is the day we celebrate our  Christmas 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card style={{height : '100%', display : 'flex', flexDirection : 'column'}}>
                  <CardMedia image='https://aitckm.in/wp-content/uploads/2016/08/13266015_1187375681287194_7023723582318937202_n.jpg'
                    title ='Ethnic day' 
                    style={{paddingTop : '56.25%'}}
                    >

                  </CardMedia>
                  <CardContent style={{   flexGrow:'1'}}>
                    <Typography gutterBottom variant='h5'>
                      Ethinc Day
                    </Typography>
                    <Typography>
                      This is the day we celebrate our Ethnic Celebration 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
         </main>
        <Typography variant='body2' color="text.seconadry" align='center'>
          {'copyright ©'}
          <Link  color={"inherit"} href="http://localhost:3000/" >
            My School
          </Link>{' '}
          {new Date().getFullYear()}

        </Typography>
     </>   
    </div>
  )
}

export default About