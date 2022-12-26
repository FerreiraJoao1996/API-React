import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './favoritos.css'

function Favoritos (){

    const [filme, setFilmes] = useState([])

    useEffect(()=> {

        const minhaLista = localStorage.getItem("@reactflix");
        setFilmes( JSON.parse(minhaLista)  || [] )

    },[])


    function excluirFilme(id){
        let filtroFilme = filme.filter( (item) => {
            return(item.id !== id)
        })

        setFilmes(filtroFilme);
        localStorage.setItem("@reactflix", JSON.stringify(filtroFilme) )
    }
    
    return(
        <div className='filme-salvo'>
            <h1>Minha lista</h1>

            {filme.length === 0 && <span>
                Que pena! Você ainda não possui nenhum filme salvo...</span>} 

            <ul>
                {filme.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button onClick={ () => excluirFilme(item.id) }>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default Favoritos;