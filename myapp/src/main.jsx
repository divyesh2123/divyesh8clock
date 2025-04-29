import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import DisplayInformation from './DisplayInformation.jsx'
import MyData from './MyData.jsx'
import DisplayDataWithAxios from './DisplayDataWithAxios.jsx'
import BasicForm from './BasicForm.jsx'

createRoot(document.getElementById('root')).render(
  
    <BasicForm />
  
)
