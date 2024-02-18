import {useDispatch , useSelector } from 'react-redux'
import { useState } from 'react'
import AjoutLivre from './components/AjoutLivre'

function App() {

    const [incval, setIncval] = useState(1)

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

  return (
      <div>
        <AjoutLivre/>
        {/* <p>count : {count}</p>

        <button onClick={()=>dispatch({type:"incr",payload:parseInt(incval)})} >+</button>
        <button onClick={()=>dispatch({type:"decr",payload:parseInt(incval)})} >-</button>

        <input type="number" onChange={(e)=>setIncval(e.target.value)}/> */}



      </div>

  )
}

export default App
