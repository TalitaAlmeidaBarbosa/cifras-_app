import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className='menu'>
            <button Link to="/login" class='userButton'>Login</button>
            <button Link to="/cadastro" class='userButton'>Cadastro</button>
        </nav>
    )
}