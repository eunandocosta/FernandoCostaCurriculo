import React from 'react';
import Logo from './companyLogo/logo.svg'

export default function Nav() {
  return (
    <nav>
        <div className='logo'>
            <h1> Fernando Costa/ </h1>
        </div>
        <div className='menu'>
            <ul>
                <a href='/'><li>Sobre mim</li></a>
                <a href='/'><li>Habilidades</li></a>
                <a href='/'><li>Experiências</li></a>
            </ul>
        </div>
    </nav>
  )
}
