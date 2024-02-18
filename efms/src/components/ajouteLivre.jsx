import { useState } from "react"

export default function AjouteLivre() {

    const [books , setBooks] = useState([])
    
    const [num , setNum] = useState("")
    const [titre , setTitre] = useState("")
    const [date , setDate] = useState("")
    const [genre , setGenre] = useState("")
    const [prix , setPrix] = useState("")

    function AjouterLivre(){


        if(num === "" || titre === "" || date === "" || genre === "" || prix === "" || prix > 200 || new Date(date) < new Date("01/01/1945") || new Date(date) >= new Date() ){
            alert("WTF ASSAHBI")
            console.log(typeof(parseInt(prix)))
            return;
        }
        
        setBooks([...books ,   {
            num: num,
            titre: titre,
            date: date,
            genre: genre,
            prix: prix,

        }])

        console.log(books)



    }

    function Reset(){


        setBooks([])



    }

  return (
    <div>
        <form>
            <div>
                <p>Num :<input type="number" id="num" onChange={(e)=>setNum(e.target.value)} /></p>
            </div>
            <div>
                <p>Titre :<input type="text" id="titre" onChange={(e)=>setTitre(e.target.value)} /></p>
            </div>
            <div>
                <p>date ed :
                    <input type="date" id="date ed " onChange={(e)=>{setDate(e.target.value)}} />
                </p>
            </div>
            <div>
                <p>genre :
                <select  id="genre" onChange={(e)=>setGenre(e.target.value)}>
                    <option value="comedie">comedie</option>
                    <option value="tragedie">tragedie</option>
                </select></p>
            </div>
            <div>
                <p>prix :<input type="number" id="prix" onChange={(e)=>setPrix(e.target.value)} /></p>
            </div>

            <button type="button" onClick={()=>AjouterLivre()}>
                Ajouter
            </button>
            <button type="button"  onClick={()=>Reset()}>
                reset
            </button>
        </form>
    <div>
        {books.map((a)=>{
            return(
            <li>num : {a.num}
            | titre : {a.titre}
            | date : {a.date}
            | genre : {a.genre}
            | prix : {a.prix} </li>)

        })}

    </div>
    </div>
  )
}
