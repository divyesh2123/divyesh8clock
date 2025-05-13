import React from 'react';
import {useDispatch,useSelector}  from 'react-redux'
import { inc } from './slice/counter.slice';

export default function CounterInfo() {

    const counter = useSelector(y=>y.counter.counter);

    const dis= useDispatch();

    const inc1 = ()=>{
      dis(inc())
    }

    const dec1 = ()=>{
         dis(dec());
    }

  return (
    <div>{counter}
            <button onClick={inc1}>+</button>
            <button onClick={dec1}>-</button>
    </div>  
  )
}
