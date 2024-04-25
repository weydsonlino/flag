import { useState } from "react";

type AtualizarDesafiosProps = {
    countryName: string;
    flagLink: string;
    id: number;
  };

export const AtualizarDesafios:React.FC<AtualizarDesafiosProps> = ( {countryName, flagLink, id})=>{
    
    const [isEditing, setIsEditing] = useState(true);
    const [newCountryName, setCountryName] = useState('');
    const [newUrl, setNewUrl] = useState(flagLink);
    const [newId, setNewId] = useState(id);
    const conutryNameMaiuscula = countryName.toUpperCase();
    const handleEdit = (e: any) => {
        setIsEditing(false);
        e.preventDefault();
        fetch("/api", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newCountryName, newUrl, newId }),
        });
      };

    return(
        <div>
            <form onSubmit={handleEdit}>
                <h2>Editar {conutryNameMaiuscula}</h2>
                <label>Editar país:</label>
                <input type="text" placeholder="" value={newCountryName} onChange={(e)=> {setCountryName(e.target.value)}}/>
                <label>Editar URL:</label>
                <input type="text" value={newUrl} onChange={(e) => {setNewUrl(e.target.value)}} />
                <button type='submit' >confirmar</button>
                <p>{newCountryName}, {id}, {newUrl}</p>
            </form>
      </div>
    )
}