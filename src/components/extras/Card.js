import React from "react";

const Card = ({ title, primary, secondary }) => {
  return (
    <>
      <span className="card-primary">
        <h2>{title}</h2>
        <h3>
          {primary}
          <br />
          {secondary}
        </h3>
      </span>
    </>
  );
};

const CardSecondary = ({ icon, primary, secondary }) => {

  function defineLevelBar(secondary){
    if (secondary === 1){
      return "skill-bar-basic"
    } else if (secondary === 2) {
      return "skill-bar-medium"
    } else {
      return "skill-bar-advanced"
    }
  }

  const level = defineLevelBar(secondary)

  return (
    <span className="card-secondary">
      <span>{icon}</span>
      <h3>{primary}</h3>
      <span className="skill-level">
        <span className={level}/>
      </span>
    </span>
  );
};

const CardTerciary = ({ image, primary }) => {
  return (
    <div className="card-terciary" style={{ backgroundImage: `url(${image})` }}>
      <div className="filter">
        <h1>{primary}</h1>
      </div>
    </div>
  );
};

export { Card, CardSecondary, CardTerciary };
