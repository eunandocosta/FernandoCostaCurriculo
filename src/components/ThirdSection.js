import React from 'react'
import {DiReact, DiJavascript1, DiNodejsSmall, DiPython, DiHtml5, DiCss3, DiCode, DiMysql} from "react-icons/di"
import { FaLanguage } from "react-icons/fa"
import { SiMicrosoftoffice } from "react-icons/si"

export default function ThirdSection(props) {
    function createCard(name, level, Icon){
        function cases(level){
            if(parseInt(level)<30){
                const xp = 'Básico'
                return xp
            }else if(parseInt(level)<50){
                const xp = 'Experiente'
                return xp
            }else if(parseInt(level)<80){
                const xp = 'Intermediário'
                return xp
            }else if(parseInt(level)<100){
                const xp = 'Avançado'
                return xp
            }else{
                const xp = 'Domínio completo'
                return xp
            }
        }
        return(
        <div className='card'>
            <h1 className='habilidades'>{name}</h1>
            <div className='icons2'><Icon/></div>
            <div className='bottom'>
                <h1>NÍVEL</h1>
                <div className='level'>{cases(level)}</div>
                <div className='barra'>
                    <div className='progresso' style={{width: level + '%'}}></div>
                </div>
            </div>
        </div>
    )}
  return (
    <div className='container center justifyItems noCol'>
        <div className='title'>Conhecimentos em Computação</div>
        <div className='flex gap'>
           { createCard('JavaScript', '60', DiJavascript1)}
           { createCard('React', '80', DiReact)}
           { createCard('NodeJS', '50', DiNodejsSmall)}
           { createCard('Python', '65', DiPython)}
           { createCard('HTML', '90', DiHtml5)}
           { createCard('CSS', '90', DiCss3)}
           { createCard('C', '25', DiCode)}
           { createCard('MySql', '45', DiMysql)}
        </div>
        <div className='title'>Conhecimentos Gerais</div>
        <div className='flex gap'>
            { createCard('Inglês', '95', FaLanguage)}
            { createCard('Office', '100', SiMicrosoftoffice)}
            { createCard('Espanhol', '20', FaLanguage)}
        </div>
    </div>
    
  )
}
