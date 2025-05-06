import React, { useEffect, useState } from 'react'
import abx from './axiosbase/intesepter'
export default function Account() {

    const [data,setData]= useState([]);

    useEffect(()=>
    {
      //  const d= JSON.parse(localStorage.getItem("myuserInfo"));
    abx.get("accounts")
        .then(y=>{
            console.log(y.data);
            setData(y.data)
        })

    },[])
  return (
    <div>Account</div>
  )
}
