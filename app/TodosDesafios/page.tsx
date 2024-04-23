'use client'
import { useEffect, useState } from "react";

export default function TodosDesafios(){

    const [games, setGames] = useState({});

    useEffect(() => {
        const fetchData = async()=>{
          const response = await fetch('http://localhost:3000/api/challengers', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          
          }); console.log(response);
          const data = await response.json();
          setGames(data.data);
        }
        fetchData();
      },[])

    return(
        <main>
            <h1>Desafios</h1>
        </main>
    )

}