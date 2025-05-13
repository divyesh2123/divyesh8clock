import React, { useEffect } from 'react'
import  {useDispatch,useSelector}  from 'react-redux';
import { getPosts } from './slice/postslice';
export default function PostInfo() 
{
    const data = useSelector(y=>y);
    const dis= useDispatch();

    console.log(data.post);

    useEffect(()=>
    {
        dis(getPosts());

    },[])
  return (
    <div>PostInfo</div>
  )
}
