"use client";
import EstruturaGame from "@/components/EstruturaGame";
import { useState, useEffect } from "react";
import "normalize.css";
import "./Game.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { set } from "date-fns";

interface Challenger {
  id: number;
  countryName: string;
  easyflagLink: string;
  hardflagLink: string;
  createdAt: string;
  updatedAt: string;
}

export default function Game() {
  const [games, setGames] = useState<Challenger>({} as Challenger);

  //O menor número de index é 1 pois a coluna number do banco de dados começa em 1, ela é usada para fazer a busca dos dados.
  const [index, setIndex] = useState(1);
  const [resposta, setResposta] = useState("");
  //resposta em minusculo para evitar erros de comparação.
  let respostaLower = resposta.toLowerCase();
  const [status, setStatus] = useState("");

  document.title = "Flag";

  //Link para a rota que faz a busca dos dados no banco de dados com a concatenação do número do index.
  const link: string = `http://localhost:3000/api/gameDesafio?number=${index}`;
  useEffect(
    () => {
      const fetchData = async () => {
        const response = await fetch(link, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setGames(data.data);
        console.log(data.data);
      };
      fetchData();
    },
    //Sempre o o index for alterado o useEffect é chamado.
    [index]
  );

  const verificarResposta = () => {
    if (respostaLower == games.countryName) {
      setStatus("Acertou");
      setTimeout(resetarJogo, 2000);

      //Mexer nisso dps
      if (2 + 2 == 3) {
        alert("Fim de jogo");
        setIndex(0);
        return;
      } else resetarJogo();
    } else {
      setStatus("Errou");
      setTimeout(resetStatus, 2000);
    }
  };

  const resetarJogo = () => {
    setTimeout(proximoJogo, 2000);
    setTimeout(resetStatus, 2000);
  };

  const proximoJogo = () => {
    setIndex(index + 1);
  };
  const resetStatus = () => {
    setStatus("");
  };

  return (
    <main id="conteiner">
      <h1 id="tittle">Flag</h1>
      <div id="game-conteiner">
        <EstruturaGame pais={games.easyflagLink} />
        <div className="resposta-input">
          <input
            type="text"
            name=""
            id=""
            value={resposta}
            onChange={(e) => setResposta(e.target.value)}
            placeholder="Insira sua resposta"
          />
          <span className="input-icon"></span>
        </div>
        <button id="button-enviar" onClick={verificarResposta}>
          Enviar Resposta
        </button>
        {respostaLower == games.countryName ? (
          <p id="status-acerto">{status}</p>
        ) : (
          <p id="status-erro">{status}</p>
        )}
      </div>

      <Link href="/">Home</Link>
    </main>
  );
}
