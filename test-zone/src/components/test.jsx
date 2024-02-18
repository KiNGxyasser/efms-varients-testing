import {useState} from 'react'

export default function Test(){
    const [books,setBooks] = useState([]);

    const [num,setNum] = useState("");
    const [titre,setTitre] = useState("");
    const [date,setDate] = useState("");
    const [genre,setGenre] = useState("");
    const [prix,setPrix] = useState("");


    function reset(){
        setBooks([])
    }
    function AjouterLivre(){

            if(num === "" || titre === ""|| date === ""|| genre === ""|| prix=== ""|| parseInt(prix) > 200){
                alert("wajm3 rassk")
                return;
            }

        setBooks([...books,{
            num: num,
            titre: titre,
            date: date,
            genre: genre,
            prix: prix,

        }
        ])
        console.log(books)
    }



    return(<>
        <h1>Ajouter un livre</h1>
        <div><label>num: <input type="number"  onChange={(e)=>{setNum(e.target.value),console.log(e.target.value)}}/></label></div>
        <div><label>titre: <input type="text"  onChange={(e)=>setTitre(e.target.value)}/></label></div>
        <div><label>date: <input type="date"  onChange={(e)=>setDate(e.target.value)}/></label></div>
        <div><label>genre: <select onChange={(e)=>setGenre(e.target.value)}>
            <option value="comedie">comedie</option>
            <option value="tragedie">tragedie</option>
            </select></label></div>
        <div><label>prix: <input type="number"  onChange={(e)=>setPrix(e.target.value)}/></label></div>
        <div><button onClick={()=>AjouterLivre()} >Ajouter</button>
        <button onClick={()=>reset()}>reset</button></div>


        {books.map((book)=>{

            return <li>num :{book.num} |
            titre :{book.titre} |
            date :{book.date} |
            genre :{book.genre} |
            prix :{book.prix}</li>
        })}
        </>
    )
}
