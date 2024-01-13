import React from "react"
import Foto from '../images/foto.png'
import CV from '../outros/FernandoCosta.pdf'

const Landing = (props) => {

  const downloadButton = () => {
    const item = CV

    const a = document.createElement('a');
    a.href = item;
    a.download = 'CV_FernandoCosta'; 

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
  };


  return (
    <div className="main-container-flex" >
      <div className="main-page-flex" style={{alignItems:'flex-start'}} id="main-page-padding-exception">
        <h1 className="main-page-h1"
        >Seja bem vindo ao meu portfólio digital, é um prazer conhecê-lo</h1>
        <p className='main-page-p'
        >Me chamo Fernando Costa, sou desenvolvedor full-stack cursando faculdade de computação. Neste site você 
            poderá acompanhar meus conteúdos, como portfólio, opiniões e mais conteúdos. Acompanhe também minhas
            redes sociais. Aguardo seu contato para trabalharmos juntos.</p>
        <span className="main-simple-line"/>
        <div className="main-highlight">
          <div className="main-section-highlight">
            <button className="main-button-highlight" onClick={downloadButton}>Download CV</button>
          </div>
        </div>
      </div>
      <div className="main-page-flex">
        <img className="main-page-img" src={Foto} alt='Foto Fernando Costa' id="element-scale-hover"/>
      </div>
    </div>
  )
};

export default Landing;
