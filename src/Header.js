import React from 'react'
import {Typography,AppBar,CssBaseline,Toolbar,Button,Box} from '@mui/material'

function Header (props) {
 
const about=()=>{
    props.abt()
}
const login=()=>{
    props.lgto()
}
const home=()=>{
    props.hom()
}
const contact=()=>{
    props.ct()
}
return(
    <div>
           <>
             <CssBaseline enableColorScheme/>
             <Box sx={{ flexGrow : 1}}>
             <AppBar position='relative'>
                <Toolbar >
                    <Typography variant='h4'  sx={{ flexGrow: 1 }}>
                        MySchool
                    </Typography>
                    <Button color='inherit' variant='h1' onClick={home} >Home</Button>
                    <Button color='inherit' onClick={about} >About</Button>
                    <Button color='inherit' onClick={contact} >Contact</Button>
                    <Button color='inherit' onClick={login}  >Login</Button>

                </Toolbar>
             </AppBar>
             </Box>
            </>
    </div>
)
}
export default Header