import React, { useState } from "react";
import MyDisplayGrid from "./MyDisplayGrid";
import { Button } from "@mui/material";
import MyForm from "./MyForm";

export default function MyParent() {
  const [open, setOpen] = useState(false);
  const [data,setData]= useState([]);

  const handleClickOpen = ()=>{
    setOpen(true)
  }

  const handleDelete = (index)=>
  {
    let d= [...data];
    d.splice(index-1,1);

setData(d);
  }

  const handleClose = ()=>{
    setOpen(false)
  } 
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <MyForm
      open = {open}
      data={data}
      setData={setData}
      handleClose = {handleClose}
      />
      <MyDisplayGrid   data={data} handleDelete={handleDelete} />
    </div>
  );
}
