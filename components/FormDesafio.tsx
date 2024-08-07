import { useState } from "react";

export const FormDesafio = () => {
  const [resposta, setResposta] = useState("");
  const [easyImageLink, setEasyImageLink] = useState("");
  const [hardImageLink, setHardImageLink] = useState("");

  const handlesubmit = (e: any) => {
    e.preventDefault();
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resposta, easyImageLink, hardImageLink }),
    });
  };

  return (
    <div id="conteiner-add-desafio">
      <form onSubmit={handlesubmit} id="form">
        <h1>Adicionar Desafios</h1>
        <div id="espaco-input">
          <div className="conteiner-input">
            <label htmlFor="resposta" className="label-name">
              País a ser adicionado
            </label>
            <input
              type="text"
              id="resposta"
              name="resposta"
              value={resposta}
              onChange={(e) => setResposta(e.target.value)}
              placeholder="digite o nome do país"
            />
          </div>
          <div className="conteiner-input">
            <label htmlFor="resposta" className="label-name">
              easyImage Link
            </label>
            <input
              type="text"
              id="easyImageLink"
              name="easyImageLink"
              value={easyImageLink}
              onChange={(e) => setEasyImageLink(e.target.value)}
              placeholder="URL da bandeira"
            />
          </div>
          <div className="conteiner-input">
            <label htmlFor="resposta" className="label-name">
              hardImage Link
            </label>
            <input
              type="text"
              id="easyImageLink"
              name="easyImageLink"
              value={hardImageLink}
              onChange={(e) => setHardImageLink(e.target.value)}
              placeholder="URL da bandeira"
            />
          </div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};
