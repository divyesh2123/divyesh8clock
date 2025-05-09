import React, { useContext } from 'react'
import LanguageContext from './UserData/LanguageContext'

export default function MyHeader() {
    const {lan,setlan} = useContext(LanguageContext);

    const handleLan= (e)=>{
        setlan(e.target.value);
    }
  return (
    <div>
        
            <select onChange={handleLan}>

                <option value="en">English</option>
                <option value="hi">hindi</option>
            </select>

    </div>
  )
}
