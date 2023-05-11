import React from 'react';

export default function Nav({ scrollToSection, thirdRef, fourthRef }) {

  return (
    <nav>
        <div className='logo'>
            <h1> Fernando Costa/ </h1>
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
