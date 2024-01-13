import React from "react"

import { FaStar } from "react-icons/fa";

import {CardTerciary} from "./extras/Card.js"

import BookifyScreen from "../images/bookifyScreen.jpg"
import RedFlow from "../images/RedFlow.jpg"

const Projects = (props) => {

    const cardSkillCount = [[BookifyScreen, 'Bookify Screen'], [RedFlow, 'Red Flow - Machine Learn']]

    const CardShow = () => {
        return (
          <>
            {cardSkillCount.map((project, index) => (
              <CardTerciary
                key={index}
                image={project[0]}
                primary={project[1]}
              />
            ))}
          </>
        );
      };

  return (
    <div className="container-projects">
        <div className="projects-title-section">
            <h1 className="projects-title"><FaStar color="gold"/> Top projetos</h1>
            <p>Realizados para o curso de pós graduação da Puc-Rio em engenharia de software. 
                Entre eles, técnicas incluem: Base de dados, Machine Learning, React, Flask e mais.</p>
        </div>
        <div className="projects-section">
            <CardShow/>
        </div>
    </div>
  )
};

export default Projects;
