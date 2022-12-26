import {Link} from 'react-router-dom'
import './erro.css'

function Erro (){
    return(
        <div class='erro'>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to="/">Volte a página inicial</Link>
        </div>
    )
}

export default Erro;