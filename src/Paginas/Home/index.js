import {useEffect, useState} from 'react';
import api from '../../Services/api';
import { Link } from 'react-router-dom';

import './home.css';

// /movie/now_playing?api_key=44622483b317166bb3c4e35dc6e4bc1a&language=pt-br

function Home (){

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

       async function loadFilmes(){
        const response = await api.get("movie/now_playing", {
            params: {
              api_key:  '44622483b317166bb3c4e35dc6e4bc1a',
              language: 'pt-BR',
              page: 1,
            }
        })

        setFilmes(response.data.results)
        setLoading(false)
       } 

       loadFilmes();
    },[])


if(loading){
    return(
        <div className='loading'>
            <h2>Carregando, aguarde...</h2>
        </div>
    )
}

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map( (filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;