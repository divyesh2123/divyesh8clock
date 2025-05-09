import React, { useState } from 'react'

export default function MyMemo({text}) {

    const [isReadMore,setReadMore]= useState(true);

    const tructText=  React.useMemo(()=>{
        
        console.log("is it recalculating");
        return text.slice(0,20);
    },[text]) 
    return (<div onClick={()=>{
        setReadMore(!isReadMore);
    }}>
        {isReadMore?tructText: text }
    </div>
  )
}
