import React from "react";
import { Routes, Route } from 'react-router-dom';

import Cadastro from "./Paginas/Cadastro/Cadastro";
import Login from "./Paginas/Login/Login";
import Artista from "./Components/Artistas/Artista";
import Cifra from "./Components/Cifras/Cifra";
import Genero from "./Components/Generos/Genero";
import Musica from "./Components/Musicas/Musica";
import Main from './Components/Template/Main';

export default function Rotas(){
    return(
        <Routes>
            <Route exact path='/' 
                element={
                    <Main>
                        <div className="amendoim">
                            <h1 className="titulo">Bem Vindo!</h1>
                            <h2 className="frase">Este é um site para você acessar a suas músicas, cifras, cantores e muito mais</h2>
                        </div>
                        <div className="vazio">
                            <div></div>
                        </div>
                    </Main>
                }/>

            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />

            <Route path='/cantor' element={<Artista />} />
            <Route path='/cifra'  element={<Cifra />} />
            <Route path='/genero' element={<Genero />} />
            <Route path='/musica' element={<Musica />} />
            <Route path='/' element={<Artista />} />
            
            <Route path="*" to='/' />
        </Routes>
    )
}
