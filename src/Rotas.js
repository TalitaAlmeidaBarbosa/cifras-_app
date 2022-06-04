import React from "react";
import { Routes, route, Route } from 'react-router-dom';
import Cadastro from "./Paginas/Cadastro/Cadastro";
import Login from "./Paginas/Login/Login";


export default function Rotas(){
    return(
        <Routes>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
