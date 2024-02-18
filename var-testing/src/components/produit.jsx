export default function Produit({pc}){

    return(
    <div style={{height: '200px',width: '300',border: 'solid 1px black'}}>
        <img src={pc.thumbnail} style={{height: '200px', }}/>
        <h3>{pc.title}</h3>
        <p>{pc.price}</p>
        <button>Ajouter au panier</button>
    </div>
    )
}