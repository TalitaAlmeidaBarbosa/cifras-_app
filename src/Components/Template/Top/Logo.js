import './Logo.css'
import React from 'react'
import Logo from '../../../Assets/Logo/InterCifrasPPLogo.png'

export default function(props){
    return (
        <aside className="logo">
            <a href='/' className="logo">
                <img src={ Logo } alt = "Logo" />
            </a>
        </aside>

    )
}
