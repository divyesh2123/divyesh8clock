import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRequest,useSuce,useFailed } from './slice/userslice';
import axios from 'axios';

export default function UserWithRedux() {
    const data = useSelector(y=>y.user);
    const dis = useDispatch();
    console.log(data.isRequest)
      console.log(data.data)
        console.log(data.error)

    useEffect(()=>{

        dis(userRequest());

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(y=>{

             dis(useSuce(y.data));
        }).catch(y=>{
             dis(useFailed(y));
        })


    },[])


  return (
    <div>UserWithRedux</div>
  )
}
