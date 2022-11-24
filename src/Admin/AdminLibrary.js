import React ,{useState,useEffect}from 'react'
import AdminHeader from './AdminHeader'
import MainPost from '../MainPost';
import {Typography,CssBaseline,Container, Table, TableContainer,Paper, TableHead, TableRow, TableCell, TableBody} from '@mui/material'
import { db } from '../Config';
import { collection,getDocs , doc,deleteDoc} from 'firebase/firestore';

import DeleteIcon from '@mui/icons-material/Delete';

const Mainpost = {
    title: 'MySchool - Welcome AdminLibrary',
    description:
      "Welcome to the best School website ever , This website helps the students to get the services in all one touch",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
   
  };

function AdminLibrary() {
    const [books,setBook]=useState([]);
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
            console.log(books.data.bname)
            
        }).catch(error=>console.log(error.message))
      }
      
      const del=()=>{
        const delref=doc(db,'library',{id})
        deleteDoc(delref).then((Response)=>{
         console.log(Response)
        }).catch(error=>console.log(error.message))
      }
  return (
    <div>
        <AdminHeader/>
        <CssBaseline enableColorScheme/>
        <Container maxWidth="100%">
            <MainPost post={Mainpost}/>
        </Container>
        <Container style={{marginTop : '3%'}}>
            <Typography variant='h4' align='center'>welcome library admin</Typography>
        </Container>
    <Container maxWidth='lg' style={{marginTop : '3%'}}>
        <Typography variant='h6' align='center'>List of Books</Typography>
        <TableContainer component={Paper}>
        <Table sx={{ minwidth :650}} arial-label="simple table">
           <TableHead>
            <TableRow style={{backgroundColor : 'gray',fontSize : '12px' }}>
                <TableCell>Book Name</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Date</TableCell>
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
                         <TableCell><DeleteIcon cursor ='pointer' button onClick={del}/></TableCell> 
                         </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        </TableContainer>
    </Container>
    </div>
  )
}

export default AdminLibrary