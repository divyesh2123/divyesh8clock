import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function DisplayDataWithAxios() {
    const [data,setData]= useState([]);

    useEffect(()=>{

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(y=>{
            setData(y.data);
        })
    },[])
  return (
    <div>{
        data.map((v,index)=>{
                return (<div key={index}>{v.title}</div>)
        })

    }</div>
  )
}
