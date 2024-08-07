import { set } from "date-fns";
import { useState } from "react";

type AtualizarDesafiosProps = {
  countryName: string;
  easyflagLink: string;
  hardflagLink: string;
  id: number;
  status: boolean;
  isEditing: boolean;
  setStatus: (status: boolean) => void;
  setIsEditing: (isEditing: boolean) => void;
};

export const AtualizarDesafios: React.FC<AtualizarDesafiosProps> = ({
  countryName,
  easyflagLink,
  hardflagLink,
  id,
  setStatus,
  status,
  setIsEditing,
  isEditing,
}) => {
  const [newCountryName, setCountryName] = useState(countryName);
  const [newEasyUrl, setNewEasyUrl] = useState(easyflagLink);
  const [newHardUrl, setNewHardUrl] = useState(hardflagLink);
  const [newID, setNewID] = useState(id);
  const conutryNameMaiuscula = countryName.toUpperCase();

  const handleEdit = (e: any) => {
    setStatus(false);
    e.preventDefault();
    fetch("/api", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newCountryName, newEasyUrl, newHardUrl, newID }),
    });
    setTimeout(controleStatus, 1000);
  };

  const controleStatus = () => {
    setStatus(false);
    setIsEditing(false);
  };
  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <h2>Editar {conutryNameMaiuscula}</h2>
          <label>Editar país:</label>
          <input
            type="text"
            placeholder=""
            value={newCountryName}
            onChange={(e) => {
              setCountryName(e.target.value);
            }}
          />
          <label>Editar URL:</label>
          <input
            type="text"
            value={newEasyUrl}
            onChange={(e) => {
              setNewEasyUrl(e.target.value);
            }}
          />
          <label>Editar URL:</label>
          <input
            type="text"
            value={newHardUrl}
            onChange={(e) => {
              setNewHardUrl(e.target.value);
            }}
          />
          <label>Editar ID:</label>
          <input
            type="text"
            value={newID}
            onChange={(e) => {
              setNewID(Number(e.target.value));
            }}
          />
          <button type="submit">confirmar</button>{" "}
          <button
            onClick={() => {
              setStatus(true);
              setIsEditing(false);
            }}
          >
            Cancelar
          </button>
          <p>
            {countryName}, {id}, {easyflagLink}, {hardflagLink}
          </p>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
};
