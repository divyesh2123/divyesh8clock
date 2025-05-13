import React, { useContext } from 'react'
import LanaguageInfo from './LanData/LanguageContext';

export default function LanWiseForm() 
{
    const {lan,setLan} = useContext(LanaguageInfo);
    const d = {

        "en" : {
             "firstname": "first name",
             "lastname" : "last name"
        },

        "hi": {
              "firstname": "पहला नाम",
              "lastname" : "उपनाम"
        }


    }

  return (
    <form>
        <label>{d[lan].firstname}</label>
        <input type='text' name="firstname"/>

          <label>{d[lan].lastname}</label>
        <input type='text' name="lastname"/>
        
    </form>
  )
}
