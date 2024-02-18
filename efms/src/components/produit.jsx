import React from 'react'

export default function Produit({data}) {
  return (
    <div key={data.id}>
        <img src={data.thumbnail} />
        <div>
        <h3>{data.title}</h3>
        <p>{data.price}</p>
        <button>Ajouter au panier</button>
        </div>
    </div>
  )
}
