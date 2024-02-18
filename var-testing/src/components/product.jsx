import Produit from './produit' 



export default function Product(){

    const produits= [
        {id:2,
        title:'PC Portable Gamer',
        price: '2190 DH',
        thumbnail: '/src/components/imgs/archer1butBigger.png'
        },
        {id:3,
        title:'PC Portable Chromebook',
        price: '2190 DH',
        thumbnail: '/src/components/imgs/shilelded1butBigger.png'
        },
        {id:4,
        title:'PC Portable Huawei',
        price: '2190 DH',
        thumbnail: '/src/components/imgs/swordsman1butBigger.png'
        },
    ]

    return(


        <div style={{display: 'flex'}}>


            {produits.map((pc)=>{
                return <Produit pc={pc}/>
            })}

        </div>
    )

}