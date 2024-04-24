import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FormDesafio } from '@/components/FormDesafio';

interface Challenger {
    id: number;
    countryName: string;
    flagLink: string;
    createdAt: string;
    updatedAt: string;
  }

export const TodosDesafios = ()=>{
    let error = false;

    const [desafios, setDesafios] = useState<Challenger[]>([]);

    useEffect(() => {
        const fetchData = async()=>{
          const response = await fetch('http://localhost:3000/api', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          
          });
          const data = await response.json();
          console.log(data.data)
          setDesafios(data.data);
        }
        fetchData();
      },[])
      console.log(desafios)

            return(
                <div id='conteiner-desafios'>
                    <h1>Lista de Desafios</h1>
                    <div id='conteiner-colum-tittle'>
                        <h2 className='collum-tittle'>Nome do País</h2>
                        <h2 className='collum-tittle'>URL DA Bandeira</h2>
                        <h2 className='collum-tittle'>Imagem da Bandeira</h2>
                    </div>
                    {error ? 
                    (<p>Erro ao carregar</p>) : 
                    (desafios.map((game) => (
                        <div key={game.id} className='conteiner-list'>
                            <p className='country-name'>{game.countryName}</p>
                            <a className='flag-link'>{game.flagLink}</a>
                            <img src={game.flagLink} alt={game.countryName} className='flag-image' width={29}/>
                        </div>
                    )))}
                </div>
            )
        }
