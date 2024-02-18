
import './App.css'
import Test from './components/test'

import Redux_t from './components/redux_t'

import { useEffect, useState } from 'react'

function App() {

  const [apiData,setApiData]= useState('')
  useEffect(
    fetch('hvizvzivjo')
    .then(data => data.json)
    .then(data => setApiData(data))
    .catch((e)=>console.log(e))
    
    
    ,[])


  return (
    <>
      <div>
        <Redux_t/>
        {apiData.map(
          (e)=>{
            return <li>{e.country} ------- {e.cases}</li>
          }
        )}
      </div>
    </>
  )
}

export default App
