import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className='menu'>
            <div className='comp'>
                <div className='link'>
                    <Link to="/Cantor">
                        <span data-tooltip="acesse os artistas">Artistas</span>
                    </Link>
                    {/*<Link to="/Musica">
                        <span data-tooltip="acesse as músicas">Músicas</span>
    </Link>*/}
                    <Link to="/Genero">
                        <span data-tooltip="acesse os gêneros">Gêneros</span>
                    </Link>
                    <Link to="/Cifra">
                        <span data-tooltip="acesse as cifras">Cifras</span>
                    </Link>
                </div>
                <button Link to="/login" class='userButton'>Login</button>
                <button Link to="/cadastro" class='userButton'>Cadastro</button>
            </div>
        </nav>
    )
}