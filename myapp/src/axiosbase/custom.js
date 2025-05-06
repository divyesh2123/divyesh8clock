import axios from "axios";

const d= JSON.parse(localStorage.getItem("myuserInfo"));
const createaxios = axios.create({
    baseURL: "http://localhost:4000/",
    headers : {
        Authorization : `Bearer ${d.jwtToken}`
    }
});

export default createaxios;