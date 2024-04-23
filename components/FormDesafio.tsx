import { useState } from 'react';

export const FormDesafio = () => {

    const [resposta, setResposta] = useState('');
    const [imageLink, setImageLink] = useState('');

    const handlesubmit = (e:any) => {
        e.preventDefault();
        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({resposta, imageLink})
        })
    }

    return (
        <form onSubmit={handlesubmit}>
        <label htmlFor="resposta">País a ser adicionado</label>
        <input type="text" id="resposta" name="resposta" value={resposta} onChange={(e)=> setResposta(e.target.value)}/>
        <label htmlFor="resposta">Image Link</label>
        <input type="text" id="imageLink" name="imageLink" value={imageLink} onChange={(e)=> setImageLink(e.target.value)} />
        <button type="submit">Enviar</button>
        </form>
    );

}