import React, { useContext } from 'react'
import LanguageContext from './UserData/LanguageContext'

export default function MyLanForm() {

  const {lan}=  useContext(LanguageContext);

  const ddd= {

        "en"  : {

            "firstname": "firstname",
            "lastname": "lastname"
        },

        "hi": {
            "firstname": "पहला नाम",
            "lastname": "अंतिम नाम"
        }


  }
  return (
    <div>
            <form>

                <label>
                {ddd[lan].firstname}

                </label>

                    <input type='text'  name="firstname"/>

                <label>
                {ddd[lan].lastname}

                </label>

                <input type='text'  name="lastname"/>

                <input type='submit' value="save"/>

            </form>


    </div>
  )
}
