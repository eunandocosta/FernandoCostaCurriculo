import React from "react"

import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contacts = (props) => {

    const contactCount = [
        [<FaWhatsapp fontSize='3rem' color="#0c0c1b" />, 'Whatsapp', 'https://wa.link/ygqas3'], 
        [<FaGithub fontSize='3rem' color="#0c0c1b"/>, 'Github', 'https://github.com/eunandocosta'], 
        [<MdEmail fontSize='3rem' color="#0c0c1b"/>, 'Email', '']
    ]

    const copyToClipboard = () => {
      navigator.clipboard.writeText('fmscosta99@gmail.com')
          .then(() => {
              alert('Texto copiado com sucesso!');
          })
          .catch((err) => {
              console.error('Erro ao copiar para a área de transferência:', err);
              alert('Erro ao copiar para a área de transferência. Consulte o console para obter mais detalhes.');
          });
  }
    

    const ContactBall = ({ icon, reference, link }) => {
        console.log(reference)
        return (
        <>{reference==='Email'?
          <div className="contactball-style" 
          id='element-scale-hover'
          onClick={copyToClipboard}>
            {reference==='Email'?
            <span className="ball">
              <span>{icon}</span>
            </span>
            :
            <a href={link} className="ball">
              <span>{icon}</span>
            </a>}
            <p>{reference}</p>
          </div>
          :
          <div className="contactball-style" id='element-scale-hover'>
            {reference==='Email'?
            <a href={link} className="ball">
              <span>{icon}</span>
            </a>
            :
            <a href={link} className="ball">
              <span>{icon}</span>
            </a>}
            <p>{reference}</p>
          </div>
        }</>
        );
    };

    function MapContact() {
        return (
          <>
            {contactCount.map((project, index) => (
              <ContactBall
                key={index}
                icon={project[0]}
                reference={project[1]}
                link={project[2]}
              />
            ))}
          </>
        );
      }

  return (
    <div className="contacts-container">
      <h1 className="contact-title">Entre em contato</h1>
      <div className="contact-section">
        <MapContact/>
      </div>
    </div>
  )
};

export default Contacts;
