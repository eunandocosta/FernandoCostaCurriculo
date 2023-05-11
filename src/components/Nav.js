import React from 'react';
import logo from './companyLogo/logo.svg'

export default function Nav({ scrollToSection, thirdRef, fourthRef }) {

  return (
    <nav>
        <div className='logo'>
            <img src={logo} alt='logo em forma de peixe'/><h1> Fernando Costa/ </h1>
        </div>
        <div className='menu'>
            <ul>
                <li className='menuItens' onClick={()=>scrollToSection(thirdRef)}>Conhecimentos</li>
                <li className='menuItens' onClick={()=>scrollToSection(fourthRef)}>Experiências</li>
            </ul>
        </div>
    </nav>
  )
}
