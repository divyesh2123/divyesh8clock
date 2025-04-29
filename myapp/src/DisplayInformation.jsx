import React from 'react'
import data from './data';

export default function DisplayInformation() {
  return (
    <div>{
        
        data.map((p)=>{


            return <div>
                <div>{p.id}</div>
                <div>{p.name}</div>
                <div>{p.text}</div>
                <div>
                    <img src={p.img}/>

                </div>
            </div>
        })

    }</div>
  )
}
