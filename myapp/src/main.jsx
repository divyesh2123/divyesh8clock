import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import DisplayInformation from './DisplayInformation.jsx'
import MyData from './MyData.jsx'
import DisplayDataWithAxios from './DisplayDataWithAxios.jsx'
import BasicForm from './BasicForm.jsx'
import MyFormFormik from './MyFormFormik.jsx'
import MyUserFormik from './MyUserFormik.jsx'
import Product from './Product.jsx'
import MyButton from './MyButton.jsx'
import MaterialUIWithFormik from './MaterialUIWithFormik.jsx'
import UserForm from './RegistrationForm.jsx'
import { ToastContainer, toast } from 'react-toastify';
import DataGridDemo from './DataGridDemo.jsx'
createRoot(document.getElementById('root')).render(
   <>
   <ToastContainer />
   <UserForm/>
   <DataGridDemo/>
   </>

  
)
