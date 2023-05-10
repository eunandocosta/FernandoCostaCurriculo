import React from 'react';

export default function Nav({ scrollToSection }) {
  return (
    <nav>
        <div className='logo'>
            <h1> Fernando Costa/ </h1>
        </div>
        <div className='menu'>
            <ul>
                <a href='/' ><li>Conhecimentos</li></a>
                <a href='/' ><li>Experiências</li></a>
            </ul>
        </div>
    </nav>
  )
}
