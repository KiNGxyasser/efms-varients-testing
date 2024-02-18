import React, { useEffect, useState } from 'react'

export default function ApiCall() {
    const [data,setData] = useState([])

useEffect(()=>{
    fetchData()
    
},[]);

const fetchData = ()=>{
    
    fetch('https://disease.sh/v3/covid-19/countries')
    .then(res => res.json())
    .then(res => setData(res))
    .catch(err => console.log(err))
    console.log(data)

}


  return (
    <div>ApiCall
        {
            data.map((country)=>{

                return <li id={country.countryInfo._id}>{country.country} ---------- {country.cases}</li>

            })
        }

        <button onClick={()=>{console.log(data)}}>|_|</button>
    </div>
  )
}
