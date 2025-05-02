import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';

export default function Product() {
    const [data,setData]= useState([]);

    useEffect(()=>{

        fetch("https://dummyjson.com/products").then(y=>y.json())
        .then(y=>{
            setData(y.products);
        })

    })
  return (
    <div>{
            data.map((v,index)=>{
               return(<ProductItem item={v} i={index}/>)
            })
    }</div>
  )
}
