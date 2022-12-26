import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './Paginas/Home';
import Filmes from './Paginas/Filmes';
import Header from './Components/Header';
import Erro from './Paginas/Erro';
import Favoritos from './Paginas/Favoritos';

function RoutesApp (){
    return (
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/filme/:id" element={<Filmes/>}/> 
        <Route path="/favoritos" element={<Favoritos/> }/>

        
        <Route path="*" element={<Erro/>}/>
        </Routes>
            </BrowserRouter>
    )
}

export default RoutesApp;