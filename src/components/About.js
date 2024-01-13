import React, { useState } from "react"
import  {Card, CardSecondary}  from "./extras/Card";

import {motion, useMotionValue} from 'framer-motion';

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight, FaNodeJs, FaGithub  } from "react-icons/fa";
import { IoLogoJavascript, IoLogoPython, IoLogoReact, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { BiLogoFlask } from "react-icons/bi";
import { SiMysql, SiCsharp  } from "react-icons/si";
import { DiCode } from "react-icons/di";

const About = (props) => {

  const [draging, setDraging] = useState(false)
  const [cardIndex, setCardIndex] = useState(0)

  const DRAG_BUFFER = 50;

  const dragX = useMotionValue(0);

  function onDragStart(){
    setDraging(true)
  }

  function onDragEnd(){
    setDraging(true)

    const x = dragX.get()

    if (x <= DRAG_BUFFER && cardIndex < cardSkillCount.lenght - 1){
      setCardIndex(previous_value => previous_value + 1)
    } else if (x >= DRAG_BUFFER && cardIndex > 0) {
      setCardIndex(previous_value => previous_value - 1)
    }
  }


  const cardSkillCount = [
    [<IoLogoJavascript fontSize={'3em'}/>, 'JavaScript', 2],
    [<IoLogoPython fontSize={'3em'}/>, 'Python', 2],
    [<IoLogoReact fontSize={'3em'}/>, 'React', 2],
    [<BiLogoFlask fontSize={'3em'}/>, 'Flask', 2],
    [<IoLogoHtml5 fontSize={'3em'}/>, 'HTML', 2],
    [<IoLogoCss3 fontSize={'3em'}/>, 'CSS', 2],
    [<SiMysql fontSize={'3em'}/>, 'MySQL', 2],
    [<FaNodeJs fontSize={'3em'}/>, 'Node JS', 1],
    [<DiCode fontSize={'3em'}/>, 'C', 1],
    [<SiCsharp  fontSize={'3em'}/>, 'C#', 1],
    [<FaGithub  fontSize={'3em'}/>, 'GitHub', 1],
  ];

  console.log(cardSkillCount.length*100)
  
  const CardShow = () => {
    return (
      <>
        {cardSkillCount.map((skill, index) => (
          <CardSecondary
            icon={skill[0]} 
            primary={skill[1]} 
            secondary={skill[2]} 
            key={index}
          />
        ))}
      </>
    );
  };

  return (
    <div className="about-page-container">
        <h1 className="about-title">Sobre mim</h1>
        <div className="about-section-card">
            <Card title='Pós engenha de software' primary='Puc-rio' secondary='Segundo semestre'/>
            <Card title='Ciência da computação' primary='Estácio' secondary='Terceiro semestre'/>
            <Card title='Relações internacionais' primary='Puc-rio' secondary='Completo'/>
        </div>
        <div className="about-section-skills">
          <span className="arrow">
            <FaLongArrowAltLeft fontSize={'3em'}/>
          </span>
          <div className="carousel-holder">
            <motion.div className="carousel" 
            style={{x: dragX}}
            drag='x'
            dragConstraints={{
              left: -cardSkillCount.length*190,
              right: 0
            }}
            animate={{translate:`-${cardIndex*100}%`}}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            >
              <CardShow/>
            </motion.div>
          </div>
          <span className="arrow">
            <FaLongArrowAltRight fontSize={'3em'}/>
          </span>
        </div>
        <div className="general-knowledge-section">
          <h1 className="about-title">Conhecimentos gerais</h1>
          <div className="about-section-card">
            <Card title='Inglês' primary='' secondary='Avançado'/>
            <Card title='Alemão' primary='' secondary='Básico'/>
            <Card title='Espanhol' primary='' secondary='Básico'/>
            <Card title='Office' primary='' secondary='Intermediário'/>
        </div>
        </div>
    </div>
  )
};

export default About;
