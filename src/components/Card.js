import React from "react";
import Button from "./Button";

const Card = (props) => (
  <div className="card">
    {props.featured && (
      <h5 className="card-header text-uppercase">{props.featured}</h5>
    )}
    <div className="card-body">
      <h1 className="card-title text-uppercase">{props.title}</h1>
      <p className="card-text">{props.text} </p>
      {props.btn && <Button>{props.btn}</Button>}
    </div>
  </div>
);

export default Card;

export const ServicesCard = (props) => (
  <div className="services__card">
    <div className="services__content">
      <h2>0{props.index + 1}</h2>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  </div>
);

export const ProjectCard = (props) => (
  <div className="project__card">
    <div className="project__face project__face--face1">
      <div className="content">
        <img src={props.image} alt="Project 1" className="project__img" />
        <h3>{props.title}</h3>
      </div>
    </div>

    <div className="project__face project__face--face2">
      <div className="content">
        <p>{props.text}</p>

        <div className="project__cta">
          {Object.values(props.cta).map((el) => (
            <a key={el.url} href={el.url}>
              {el.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);
