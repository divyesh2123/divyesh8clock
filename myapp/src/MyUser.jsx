import React, { useState } from 'react'
import User1 from './User1'
import User2 from './User2'
import User3 from './User3'

export default function MyUser() 
{
    const [data,setData]= useState({
        firstName : "d",
        lastName : "p"
    })
  return (
    <div>
        
        <User1 d={data}/>
       
      
    </div>
  )
}
