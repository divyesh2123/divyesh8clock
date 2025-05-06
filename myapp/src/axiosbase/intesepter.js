import axios from "axios";

const createaxios = axios.create({
    baseURL: "http://localhost:4000",

});


const d= JSON.parse(localStorage.getItem("myuserInfo"));
createaxios.interceptors.request.use((request)=>{

    request.headers.Authorization =  `Bearer ${d.jwtToken}`

    return request;

}, (errror)=>{

    return Promise.reject(errror);
});


createaxios.interceptors.response.use((response)=>{

    
    return response;

}, (errror)=>{


    //you can error 
    //tostify based on the resposne 
    return Promise.reject(errror);
});

export default createaxios;