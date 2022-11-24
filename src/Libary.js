import React, { useState , useEffect} from 'react'
import {Typography,CssBaseline,Box,Button,AppBar,Toolbar,Container,
        Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,
        Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,TextField} from '@mui/material'
import MainPost from './MainPost'
import { db } from './Config';
import {collection,getDocs} from 'firebase/firestore'
import AddIcon from '@mui/icons-material/Add';
const Mainpost = {
    title: 'MySchool - Library',
    description:
      "welcome to school library , you can find different books to read",
    image: 'https://3.bp.blogspot.com/-IWM0_Rp9GLc/W3wtaA1MQJI/AAAAAAAAHYY/gTuPl8DeEmYfaHOLcluA2mgsPrZp82NywCLcBGAs/s1600/Library.png',
    imageText: 'main image description',
   
  };
function Libary() {
  const [books,setBook]=useState([]);
  //const[bname,setBname]=useState('');
  const [open,setOpen] = useState(false)
  //const [email,setEmail] = useState('');
  useEffect(() => {
    getbook()
  }, [])

  useEffect(() => {
    console.log(books)
    
  }, [books])
  const getbook=()=>{
    const bookref= collection(db,'library')
    getDocs(bookref).then(Response=>{
        const book = Response.docs.map(dc=>({data : dc.data() , id : dc.id}))
        setBook(book)
    }).catch(error=>console.log(error.message))
  }
  const handleopen=()=>{
    setOpen(true)
  }
  const handleclose=()=>{
    setOpen(false)
  }
  const confirm=()=>{
    setOpen(false) 
    alert("Booked successfully")
  }
  return (
    <div>
        <>
        <CssBaseline enableColorScheme/>
        <Box sx={{flexGrow : 1}}>
            <AppBar position='relative'>
                <Toolbar>
                    <Typography variant='h4' sx={{flexGrow:1}}>MySchool</Typography>
                    <Button color='inherit' variant='h1'>Home</Button>
                    <Button color='inherit' variant='h1'>About</Button>
                    <Button color='inherit' variant='h1'>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
        <Container maxWidth="100%" >
    <MainPost post={Mainpost}/>
    </Container>
     <Container maxWidth='lg' style={{marginTop : '3%'}}>
        <Typography variant='h4' align='center'>List of Books</Typography>
       <TableContainer component={Paper}>
        <Table sx={{ minwidth :650}} arial-label="simple table">
            <TableHead>
                <TableRow  style={{backgroundColor : 'gray',fontSize : '12px' }}>
                    <TableCell  style={{fontSize :'18px'}}>Book Name</TableCell>
                    <TableCell style={{fontSize :'18px'}}>Author</TableCell>
                    <TableCell style={{fontSize :'18px'}}>Date </TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    books.map(item=>(
                        <TableRow key={item.id} sx={{'&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell component="th" scope="row" >{item.data.bname}</TableCell>
                            <TableCell >{item.data.author}</TableCell>
                            <TableCell >{item.data.Date}</TableCell>
                           
                         <TableCell align='right'><AddIcon cursor ='pointer' Button onClick={handleopen}/></TableCell>   
                         </TableRow>
                    ))
                }
                <Dialog open={open} onClose={handleclose}>
                <DialogTitle>Book</DialogTitle>
                <DialogContent>
                   <DialogContentText>
                   In order for booking the book , please provide your email and course and expected return date
                   </DialogContentText>
                   <TextField
                   required
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus required
            margin="dense"
            id="c_name"
            label="Course_name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus required
            margin="dense"
            id="dt_return"
           // label="expected Return date"
            type="Date"
            fullWidth
            variant="standard"
          />
                </DialogContent>
             <DialogActions>
                <Button onClick={handleclose}>Cancel</Button>
                <Button onClick={confirm}>Confirm</Button>
             </DialogActions>
                </Dialog>
            </TableBody>
        </Table>
       </TableContainer>
     </Container>
        </>
    </div>
  )
}

export default Libary