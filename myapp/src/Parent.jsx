import React, { useState } from 'react'
import Child from './Child';

export default function Parent() {
    const [input,setinpit]= useState('');
    const [data,setData]= useState([]);
    const [index,setIndex]= useState(0);

    const manage=  ()=>{
        let p = [...data];
        p.push(input);
        setData(p);
    }

    const removeItemFromArray= React.useCallback((index)=>{

    },index)

    const handleinput= (e)=>{
        setinpit(e.target.value);
    }
  return (
    <div>
        <input type='text' name="a" onChange={handleinput}/>
        <button onClick={manage}>SaveInfo</button>
        <Child d={data} removeItemFromArray={removeItemFromArray}/>
    </div>
  )
}
