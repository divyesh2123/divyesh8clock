import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router';

export default function LoginInformation() {

    const [data,setData]= useState({
        "email": "",
        "password": ""
    });

    const nav= useNavigate();

    const handleInput= (e)=>{

        setData({...data,[e.target.name]: e.target.value})
    }
    const habdleSubmit= (e)=>{

        e.preventDefault();
        axios.post("http://localhost:4000/accounts/authenticate",data)
        .then(y=>{

            if(y.status == 200)
            {
                localStorage.setItem("myuserInfo",JSON.stringify(y.data));
                nav("/account");
            }
          
        })
    }
  return (
    <form onSubmit={habdleSubmit}>
        
        <input type='text' name="email" onChange={handleInput}/>
        <input type='text' name="password" onChange={handleInput}/>
        <input type='submit' value="save" />
    </form>
  )
}
