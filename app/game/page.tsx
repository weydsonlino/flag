'use client'
import EstruturaGame from "@/components/EstruturaGame";
import { useState, useEffect } from "react";
import 'normalize.css'
import './Game.css';

interface Challenger {
  id: number;
  countryName: string;
  flagLink: string;
  createdAt: string;
  updatedAt: string;
}

export default function Game() {


  const [games, setGames] = useState<Challenger>({} as Challenger)
  
  
  
  const [index, setIndex] = useState(0);
  const [resposta, setResposta] = useState("");
  const [status, setStatus] = useState("");
  //console.log(games[0].countryName);
  const gameAtual = games;

  useEffect(() => {
    const fetchData = async()=>{
      const response = await fetch('http://localhost:3000/api?number=4', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      
      });
      const data = await response.json();
      setGames(data.data);
    }
    fetchData();
  },[])

  const verificarResposta = () => {
    if(resposta == games.countryName){
      setStatus("Acertou");
      if(2+2 == 3){
        alert("Fim de jogo");
        setIndex(0);
        return;
      }else(
        resetarJogo()
      )
      
    } else {
      setStatus("Errou");
      setTimeout(resetStatus, 2000);
    }
  }

  const resetarJogo = () => {
    setTimeout(proximoJogo, 2000);
    setTimeout(resetStatus, 2000);
  }

  const proximoJogo = () => {
    setIndex(index + 1)
  }
  const resetStatus = () => {
    setStatus("");
    setResposta("");
  }

  return (
    <main id="conteiner">
      <h1 id="tittle">Flag</h1>

<div id="game-conteiner">
    <EstruturaGame 
    pais={games.flagLink}
    />
    <div className="resposta-input" >
        <input type="text" name="" id="" value={resposta} onChange={(e)=> setResposta(e.target.value)} placeholder="Insira sua resposta"/>
        <span className="input-icon"></span>
    </div>
    <button id="button-enviar" onClick={verificarResposta}>Enviar Resposta</button>
    {resposta == games.countryName ? <p id="status-acerto">{status}</p> : <p id="status-erro">{status}</p>}
    </div>
    </main>
  );
}
