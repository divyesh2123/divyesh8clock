import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, TextField } from '@mui/material';
export default function MyForm(props) 
{
  const [data,setData] = useState({
    firstName : "",
    lastName : ""
  })
  const handleChange = (e)=>{
    setData({...data,[e.target.name]: e.target.value});
  }

  const handleSave= ()=>{
     let p = [...props.data];

     p.push({...data,id: p.length+1});
     props.setData(p)
     props.handleClose();

  }
  return (
    <Dialog
    open={props.open}
    onClose={props.handleClose}
    
  >
    <DialogTitle>Employee</DialogTitle>
    <DialogContent>
      
      <TextField
        autoFocus
        required
        margin="dense"
        id="firstName"
        name="firstName"
        label="first Name"
        type="text"
        fullWidth
        variant="standard"
        onChange={handleChange}
      />

<TextField
        autoFocus
        required
        margin="dense"
        id="lastName"
        name="lastName"
        label="last Name"
        type="text"
        fullWidth
        variant="standard"
        onChange={handleChange}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={props.handleClose}>Cancel</Button>
      <Button type="button" onClick={handleSave}>Subscribe</Button>
    </DialogActions>
  </Dialog>
  )
}
