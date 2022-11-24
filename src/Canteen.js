import React, { useState,useEffect } from 'react'
import {Typography,CssBaseline,AppBar,Toolbar,Box,Button,Container,
        Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,
      Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, Tab} from '@mui/material'
import MainPost from './MainPost'
import AddIcon from '@mui/icons-material/Add';
import { db } from './Config';
import { collection,getDocs } from 'firebase/firestore'; 
const Mainpost = {
    title: 'MySchool - Canteen',
    description:
      "Welcome to the school canteen you check what all foods available in the cantee. Eat well be Healthy",
    image: 'https://4.imimg.com/data4/MX/SH/ANDROID-45759449/product-500x500.jpeg',
    imageText: 'main image description',
   
  };
function Canteen(props) {
 
 
 const [food,setFood] = useState([])
 const[open,setOpen]=useState(false)
 
 useEffect(() => {
  list()
}, [])

useEffect(() => {
  console.log(food)
  
}, [food])
const list=()=>{
 
  const canref = collection(db, 'canteen')
  getDocs(canref).then(Response=>{
    const can = Response.docs.map(dc=>({data : dc.data() , id : dc.id}))
    setFood(can)
    
  }).catch(error=>console.log(error.message))

}
const handleopen=()=>{
  setOpen(true)
}
const confirm=()=>{
  setOpen(false)
  alert("success")
}
const handleclose=()=>{
  setOpen(false)
}
  return (
    <div>
        <>
        <CssBaseline enableColorScheme/>
        <Box sc={{flexGrow : 1}}>
            <AppBar position='relative'>
                <Toolbar>
                    <Typography variant='h4' sx={{flexGrow : 1}}>MySchool</Typography>
                    <Button variant='h1' color='inherit'>Home</Button>
                    <Button variant='h1' color='inherit'>About</Button>
                    <Button variant='h1' color='inherit'>{props.uid}</Button>
                    <Button variant='h1' color='inherit'>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
        <Container maxWidth="100%" >
    <MainPost post={Mainpost}/>
    </Container>
       <Container maxWidth='lg' style={{Top : '3&'}}>
        <Typography variant='h4' align='center'>Canteen</Typography>
       <TableContainer component={Paper}>
       <Table sx={{ minwidth :650}} arial-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor : 'gray',fontSize : '12px' }}>
            <TableCell>Day</TableCell>
            <TableCell>breakfast</TableCell>
            <TableCell>lunch</TableCell>
            <TableCell>snakc</TableCell>
            <TableCell>Drinks</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            food.map(rw=>(
              <TableRow key={rw.id} sx={{'&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell  component="th" scope="row" > {rw.data.day}</TableCell>
              <TableCell  > {rw.data.breakfast}</TableCell>
              <TableCell  > {rw.data.lunch}</TableCell>
              <TableCell  > {rw.data.snacks}</TableCell>
              <TableCell  > {rw.data.Drinks}</TableCell>
              <TableCell align='right'><AddIcon cursor ='pointer' Button onClick={handleopen} /></TableCell>   
              </TableRow>
            ))
          }
          <Dialog open={open} onClose={handleclose}>
            <DialogTitle>order</DialogTitle>
            <DialogContent>
              <DialogContentText>
                You can check what all food availabe and books
              </DialogContentText>
            <DialogActions>
              <Button onClick={confirm}>order</Button>
              <Button onClick={handleclose}>Cancel</Button>
            </DialogActions>
            </DialogContent>
          </Dialog>
        </TableBody>
       </Table>
       </TableContainer>
       </Container>
      
        </>
    </div>
  )
}

export default Canteen