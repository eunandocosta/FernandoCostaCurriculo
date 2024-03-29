import React from 'react'
import { HiOutlineDownload } from "react-icons/hi"
import resume from "./arquivos/Fernando Costa - Currículo.pdf"

const FourthSection = React.forwardRef((props, ref) => {

    function createCard(name, level, num){
        return(
        <div className='card'>
            <h1 className='habilidades'>{name}</h1>
            <div className='pizza'>{num}</div>
            <div className='bottom'>
                <h1>Período</h1>
                <div className='level'>{level}</div>
            </div>
        </div>
    )}

  return (
    <div className='container center justifyItems noCol' ref={ref}>
        <h1 className='title'>Graduação</h1>
        <div className='flex gap'>
            { createCard('Ciência da Computação', 'Segundo', '2º')}
            { createCard('Relações Internacionais', 'Finalizado', 'Bacharel')}
        </div>
        <h1 className='title'>Currículo</h1>
        <p style={{color: '#affc41'}}>Fique a vontade para olhar meu currículo através do Download abaixo</p>
        <div className='flex gap'>
        <div className='flexCol center'>
        <a className='download' download='Curriculo Fernando Costa' href={resume}>Faça aqui o download <HiOutlineDownload className='icon'/></a>
        </div>
        </div>
    </div>
  )
});

export default FourthSection;
