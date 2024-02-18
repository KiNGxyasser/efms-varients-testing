import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useState} from 'react'

export default function Redux_t() {
    const count = useSelector(data => data.count)
    const dispatch = useDispatch()

    const [val,setVal] = useState()

  return (
    <div>
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <p>{count}</p>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
        <div>
        <input type="number" onChange={(e)=>{setVal(e.target.value)}}/>
        <button onClick={()=>dispatch({type:"inc_by_amount",payload:parseInt(val)})}>Click</button>
        </div>

        
        
        </div>
  )
}
