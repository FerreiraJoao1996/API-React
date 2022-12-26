import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../Services/api";


import './filme.css'


function Filmes (){

    const { id } = useParams();

    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key:  '44622483b317166bb3c4e35dc6e4bc1a',
                    language: 'pt-BR',
                }
            })

            .then((result) => {
                setFilme(result.data)
                setLoading(false)
            })
            .catch(() => {
                navigate("/", {replace: true})
                return;
            });
        }

        loadFilme()

        return () => {
            //ammount
        }
    }, [navigate, id])


    function salvarFilme(){

        const listaFilmes = localStorage.getItem("@reactflix");
        
        let filmesSalvos = JSON.parse(listaFilmes) || [];

        const filmeSalvo = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id )
            

        if(filmeSalvo){
            alert("Este filme já foi salvo em sua lista!")
            return;
        }
        

        filmesSalvos.push(filme)
        localStorage.setItem("@reactflix", JSON.stringify(filmesSalvos))
        alert("Filme salvo com sucesso!")

    }

    

    if(loading){
        return(
            <div className="info-filmes">
                <h1>Carregando sinopse </h1>
                </div>
               )
            }
        
   


    return(
        <div className="info-filmes">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                     <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filmes;