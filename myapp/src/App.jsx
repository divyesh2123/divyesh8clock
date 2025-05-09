import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LanguageContext from './UserData/LanguageContext'
import MyHeader from './MyHeader'
import MyLanForm from './MyLanForm'

function App() {
  const [lan, setlan] = useState('en')

  return (
    <LanguageContext.Provider value={{lan,setlan}}>

      <MyHeader/>

      <MyLanForm/>
      
    </LanguageContext.Provider>
  )
}

export default App
