import React from 'react'
import { FaWhatsapp } from "react-icons/fa"
import { BsEnvelope } from "react-icons/bs"

const link = 'https://wa.me/5521997879899?text=Ol%C3%A1%2C+Fernando.+Gostaria+de+falar+a+respeito+do+seu+servi%C3%A7o.'

export default function SecondSection() {
    function copiarEmail() {
        navigator.clipboard.writeText('fernando@devcosta.com')
          .then(() => {
            alert("Email copiado para o clipboard!");
          })
          .catch((err) => {
            console.error("Erro ao copiar texto: ", err);
          });
      }

  return (
    <section>
        <div className='container center justifyItems row noCol'>
            <h1 className='title'>
                Entre em contato
            </h1>
            <div className='col'>
                <div className='flex center spaceAround'>
                    <div className='contactBox'>
                        <div className='aninha'>
                            <BsEnvelope className='icon'/>
                            <h3 id="email">fernando@devcosta.com</h3>
                        </div>
                        <button className='email' onClick={copiarEmail}
                            >Copiar</button>
                    </div>

                </div>
                <div className='flex center spaceAround'>
                    <div className='contactBox'>
                        <div className='aninha'>
                            <FaWhatsapp className='icon'/>
                            <h3>Me chame no Whatsapp</h3>
                        </div>
                        <a href={link} target='_blank' rel='noreferrer'><button className='email' 
                            >Enviar</button></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
