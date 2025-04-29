import React, { useEffect, useState } from 'react'

export default function MyData() {
    const [data,setData]= useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(y=>y.json())
        .then(y=>{
            setData(y);
        })
    },[])

    console.log(data);
  return (
    <div>{
        data.map((v)=>{
            return (<div>{v.id}{v.title}</div>)
        })
    }</div>
  )
}
