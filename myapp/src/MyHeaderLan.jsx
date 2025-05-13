import React, { useContext } from 'react'
import LanaguageInfo from './LanData/LanguageContext'

export default function MyHeaderLan() 
{
   const {lan,setLan} =   useContext(LanaguageInfo);
    const handleChange = (e)=>{
setLan(e.target.value);
    }

  return (
    <select onChange={handleChange}>
        <option value='en'>English</option>
        <option value='hi'>Hindi</option>
    </select>
  )
}
