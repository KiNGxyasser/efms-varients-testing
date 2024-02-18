import React from 'react'

export default function Etudient() {


    const funk = (data)=>{

            let total = 0;
            for (let i = 0; i < data.notes.length; i++) {
                    total += data.notes[i];
            }
            return total / data.notes.length;
        }
    



  return (
    <div>
    <table>
        
        <thead>
        <th>nom</th>
        <th>prenom</th>
        <th>Moyenne</th>
        </thead>
        <tbody>
        {

        }
        </tbody>
    </table>
    </div>
  )
}
