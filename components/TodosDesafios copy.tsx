import { useEffect, useState } from "react";
import Link from "next/link";
import { FormDesafio } from "@/components/FormDesafio";
import { AtualizarDesafios } from "./AtualizarDesafios";

interface Challenger {
  id: number;
  countryName: string;
  flagLink: string;
  createdAt: string;
  updatedAt: string;
  number: number;
}

export const TodosDesafiosas = () => {
  let error = false;

  const [desafios, setDesafios] = useState<Challenger[]>([]);
  const [status, setStatus] = useState(false);

  //////Usados como props para o componente AtualizarDesafios
  const [isEditing, setIsEditing] = useState(false);
  const [countryName, setCountryName] = useState("");
  const [flagLink, setFlagLink] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data.data);
      setDesafios(data.data);
    };
    fetchData();
  }, [status]);

  console.log(desafios);

  return (
    <div id="conteiner-desafios">
      <h1>Lista de Desafios</h1>
      <div id="conteiner-colum-tittle">
        <h2 className="collum-tittle">Nome do País</h2>
        <h2 className="collum-tittle">URL DA Bandeira</h2>
        <h2 className="collum-tittle">Imagem da Bandeira</h2>
      </div>

      {isEditing ? (
        <AtualizarDesafios
          countryName={countryName}
          flagLink={flagLink}
          id={id}
          setStatus={setStatus}
          status={status}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
        />
      ) : (
        <></>
      )}

      {error ? (
        <p>Erro ao carregar</p>
      ) : (
        desafios.map((game) => (
          <div key={game.id} className="conteiner-list">
            <p className="country-name">{game.countryName}</p>
            <a className="flag-link">{game.flagLink}</a>
            <img
              src={game.flagLink}
              alt={game.countryName}
              className="flag-image"
              width={29}
            />
            <button
              onClick={() => {
                setIsEditing(true);
                setId(game.number);
                setFlagLink(game.flagLink);
                setCountryName(game.countryName);
                setStatus(true);
              }}
            >
              Editar
            </button>
          </div>
        ))
      )}
    </div>
  );
};
