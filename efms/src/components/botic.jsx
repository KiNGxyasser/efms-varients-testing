import React, { useState } from 'react'
import Produit from './produit'


export default function Boutique() {
    const [state , setState] = useState([
        {
            id: 0,
            title: "WOWOWOWO",
            price: "2000 DH",
            thumbnail: "NO.jpg"
        },
        {
            id: 1,
            title: "WIWIWIW",
            price: "2222 DH",
            thumbnail: "NO.jpg"
        },
        {
            id: 2,
            title: "NWII NWIII",
            price: "900 DH",
            thumbnail: "NO.jpg"
        },

    ])

  return (
    <div>{
        state.map((data)=>{
            return <Produit data={data} />
        })
    }</div>
  )
}
