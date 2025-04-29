import React, { useState } from 'react'

export default function BasicForm() 
{
    const [data,setData]= useState({
        firstName : "",
        lastName : "",
        isActive: false
    });

    const handleForm= (e)=>{
        e.preventDefault();

        console.log(data);
    }
    const handleInput = (e)=>{
        if(e.target.type== "checkbox")
        {
            setData({...data,[e.target.name]: e.target.checked})
        }
        else
        {
        setData({...data,[e.target.name]: e.target.value})
        }
    }
    
  return (
    <form onSubmit={handleForm}>
            <input type='text' name="firstName" onChange={handleInput} value={data.firstName}/>
            <input type='text' name="lastName" onChange={handleInput}  value={data.lastName}/>
            <input type='checkbox' name="isActive" onChange={handleInput}  checked={data.isActive}/>
            <input type='submit' value="Save"/>
    </form>
  )
}
