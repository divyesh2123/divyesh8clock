import axios from 'axios';

const d= JSON.parse(localStorage.getItem("myuserInfo"));
axios.defaults.headers.common.Authorization = `Bearer ${d.jwtToken}`