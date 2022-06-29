import './Imagem.css'
import './Main.css';
import React from 'react'
import Imagem from '../../Assets/Template/Imagem.png'

export default function(props){
    return (
        <aside className="template">
            <a href='/' className="template">
                <img src={ Imagem } alt = "Template" />
            </a>
        </aside> 

    )
}