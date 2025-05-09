import React from 'react'
import { useFetch } from './useFetch'

export default function CustomInformation() {
 const {loading, data}  = useFetch("https://jsonplaceholder.typicode.com/users")
 
 console.log(loading);
 console.log(data);
 
 return (
    <div>CustomInformation</div>
  )
}
