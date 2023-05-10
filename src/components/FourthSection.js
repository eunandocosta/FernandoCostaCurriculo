import React from 'react'
import { HiOutlineDownload } from "react-icons/hi"
import resume from "./curriculo.pdf"

const file = './curriculo.pdf'

export default function FourthSection() {

    const downloadFile = (file)=>{
        fetch(file)
        .then(response => response.blob())
        .then(blob => {
            const blobFile = window.URL.createObjectURL(new Blob([blob], {type: 'application/pdf'}))
            const fileName = file.split('/').pop()
            const aTag = document.createElement('a')
            aTag.href = blobFile
            aTag.setAttribute('download', fileName)
            document.body.appendChild(aTag)
            aTag.click()
            aTag.remove()
            console.log(fileName)
    })
        
    }

    console.log(file)

    function createCard(name, level, num){
        return(
        <div className='card'>
            <h1 className='habilidades'>{name}</h1>
            <div className='pizza'>{num}º</div>
            <div className='bottom'>
                <h1>Período</h1>
                <div className='level'>{level}</div>
            </div>
        </div>
    )}

  return (
    <div className='container center justifyItems noCol'>
        <h1 className='title'>Graduação</h1>
        <div className='flex gap'>
            { createCard('Ciência da Computação', 'Segundo', 2)}
            { createCard('Relações Internacionais', 'Último', 8)}
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
}
