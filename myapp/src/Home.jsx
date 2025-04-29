import React, { useState } from 'react'

export default function Home() {

        const [count,setcount]= useState(0);

    const inc = ()=>{
       setcount(count+1)
    }

    const dec = ()=>{
        setcount(count-1)
    }
  return (
    <div>{count}
    
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}
