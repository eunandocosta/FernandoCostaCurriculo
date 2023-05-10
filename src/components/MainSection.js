import React from 'react'
import Foto from "./companyLogo/foto.jpg"
import LIn from "./companyLogo/linkedin.svg"
import tiktok from "./companyLogo/tiktok.svg"
import github from "./companyLogo/github.svg"

export default function MainSection() {
  return (
    <section>
      <div className='container col fullsize'>
        <div className='welcomeMessage flex flexCol spaceEvenly padding'>
          <h1 className='digitAnim'>Bem vindo ao meu <span>portfólio online</span></h1>
          <p>Seja muito bem-vindo ao meu portfólio digital! Sou Fernando Costa, estudante do segundo período de Ciência da Computação na Veiga de Almeida, localizada na Barra da Tijuca, Rio de Janeiro.<br/><br/>

Este espaço foi criado com muito carinho para apresentar meu trabalho como cientista da computação e compartilhar minhas experiências e projetos desenvolvidos até o momento. Aqui você encontrará informações detalhadas sobre minhas habilidades, competências e qualificações.<br/><br/>

Como um estudante dedicado e apaixonado por tecnologia, estou sempre em busca de novos desafios e oportunidades para aprimorar meus conhecimentos. Por isso, estou animado em mostrar tudo o que aprendi até agora e mostrar como minha paixão por ciência da computação pode ser valiosa.<br/><br/>

Este é um currículo digital completo e interativo, onde você poderá acessar meu perfil profissional e descobrir mais sobre minha formação acadêmica e experiência profissional. Não hesite em entrar em contato comigo para discutirmos como posso ser uma contribuição valiosa para o seu sucesso pessoal ou profissional</p>

<p style={{'color': '#affc41'}}>Obrigado por visitar meu portfólio digital e espero que você goste do que vê!</p>
      </div>
      <div className='flex center flexCol spaceEvenly'>
        <img id="fotoMinha" src={Foto} alt='Minha foto' className='shadow'/>
        <h2>Prazer, sou Fernando Costa</h2>
        <div className='box flex center shadow'>
          <a href='www.linkedin.com/in/fmscosta'><img src={LIn} alt='Linkedin Icon provided: https://icons8.com/' id='icons'/></a>
          <a href='https://www.tiktok.com/@codetools'><img src={tiktok} alt='Tiktok Icon provided: https://icons8.com/' id='icons'/></a>
          <a href='https://github.com/eunandocosta'><img src={github} alt='GitHub Icon provided: https://icons8.com/' id='icons'/></a>
        </div>
      </div>
    </div>
    </section>
  )
}
