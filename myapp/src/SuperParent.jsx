import React, { useState } from 'react'
import Child1 from './Child1'
import MyHeaderLan from './MyHeaderLan';
import LanWiseForm from './LanWiseForm';
import LanaguageInfo from './LanData/LanguageContext';

/*
    SuperParent->Child1->Child2->Child3

*/
export default function SuperParent() {
    const [lan,setLan]= useState('en');
  return (
    <LanaguageInfo.Provider value={{lan,setLan}}>
    <MyHeaderLan></MyHeaderLan>
    <LanWiseForm/>
    </LanaguageInfo.Provider>
  )
}
