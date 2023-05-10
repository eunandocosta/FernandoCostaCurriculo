import React from 'react'
import { FaWhatsapp } from "react-icons/fa"
import { BsEnvelope } from "react-icons/bs"

export default function SecondSection() {

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
                            <h3>fernando@devcosta.com</h3>
                        </div>
                        <button className='email' 
                            >Enviar</button>
                    </div>

                </div>
                <div className='flex center spaceAround'>
                    <div className='contactBox'>
                        <div className='aninha'>
                            <FaWhatsapp className='icon'/>
                            <h3>Me chame no Whatsapp</h3>
                        </div>
                        <button className='email' 
                            >Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
