'use client'
import EstruturaGame from "@/components/EstruturaGame";
import { useState } from "react";
import 'normalize.css'
import './Game.css';

export default function Game() {

  class game {
    resposta: string;
    imagemPais: string;
    constructor(resposta: string, imagemPais: string) {
      this.resposta = resposta;
      this.imagemPais = imagemPais;
    }
  }

  const games = [
    new game("países baixos", "https://flagcdn.com/256x192/nl.png"),
    new game("brasil", "https://flagcdn.com/256x192/br.png"),
    new game("alemanha", "https://flagcdn.com/256x192/de.png"),
    new game("espanha", "https://flagcdn.com/256x192/es.png"),
  ]
  const [index, setIndex] = useState(0);
  const [resposta, setResposta] = useState("");
  const [status, setStatus] = useState("");

  const gameAtual = games[index];
  const verificarResposta = () => {
    if(resposta === gameAtual.resposta){
      setStatus("Acertou");
      if(index === games.length - 1){
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
            pais={gameAtual.imagemPais}
            />
            <div className="resposta-input" >
                <input type="text" name="" id="" value={resposta} onChange={(e)=> setResposta(e.target.value)} placeholder="Insira sua resposta"/>
                <span className="input-icon"></span>
            </div>
            <button id="button-enviar" onClick={verificarResposta}>Enviar Resposta</button>
            {resposta == gameAtual.resposta ? <p id="status-acerto">{status}</p> : <p id="status-erro">{status}</p>}
        </div>
    </main>
  );
}
