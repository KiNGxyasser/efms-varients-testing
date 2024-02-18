import { useState } from "react"




export default function AjoutLivre() {

    const [books,setBooks] = useState([])

    const [num,setNum] = useState("")
    const [titre,setTitre] = useState("")
    const [date,setDate] = useState("")
    const [genre,setgenre] = useState("")
    const [prix,setPrix] = useState("")

    const AjouterLivre = ()=>{

        if(num === "" ||titre === "" ||date === "" ||genre === "" || prix === "" || parseInt(prix) > 200 ||new Date() < new Date(date) || new Date("01-01-1945") > new Date(date)){

            alert("azerty")
            return;
        }
        
              setBooks([...books,{
                num: num,
                titre: titre,
                date: date,
                genre: genre,
                prix: prix,
            }])
    }

    const reset = ()=>{
        setBooks([])

    }


  return (
    
    <div>
        <h2>Ajouter un livre</h2>
        <div><label>Num: <input onChange={(e)=>setNum(e.target.value)} type="number" /></label></div>
        <div><label>Titre: <input onChange={(e)=>setTitre(e.target.value)} type="text" /></label></div>
        <div><label>Date d'edition: <input onChange={(e)=>setDate(e.target.value)} type="date" /></label></div>
        <div><label>genre: 
        <select onChange={(e)=>setgenre(e.target.value)}>
            <option value="Comedie">Comedie</option>
            <option value="Tragedie">Tragedie</option>
        </select>
        </label></div>
        <div><label>Prix: <input onChange={(e)=>setPrix(e.target.value)} type="number" /></label></div>
        <div><button onClick={()=>{AjouterLivre(),console.log(books)}}>Ajoutez</button>
        <button onClick={()=>reset()}>Reset</button></div>

        <div>
            {books.map((book)=>{
                return <li>num: {book.num} |
                titre: {book.titre} |
                date: {book.date} |
                genre: {book.genre} |
                prix: {book.prix}</li> 
            })}
        </div>
    </div>

  )
}
