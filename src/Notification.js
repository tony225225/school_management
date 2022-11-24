import React from 'react'
import {Alert, Snackbar} from '@mui/material'
function Notification() {
   
  return (
    <div>
     <Snackbar>
        <Alert severity="success">
        This is a success alert — check it out!
        </Alert>
        </Snackbar>   
        
    </div>
  )
}

export default Notification