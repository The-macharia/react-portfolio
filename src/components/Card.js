import React from "react";
import Button from "./Button";
import styled from "@emotion/styled";
import "./components.css";

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

const Div = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
`;
const CardDiv = styled("div")`
  padding: 1rem 1.5rem;
  box-shadow: 0 0.1rem 2rem rgba(0, 0, 0, 0.35);
  margin: 1rem 0;
  transition: all 0.3s;
  text-align: center;
  background-color: #fff;
  :hover,
  :active {
    background-color: #222;
    color: #eee;
    transform: scale(1.01);
    h1 {
      color: #eee;
    }
  }
`;
export const ServiceCard = (props) => (
  <CardDiv className="card">
    <div className="card-body">
      <Div>
        {props.icon}
        <h1
          style={{ fontSize: "1.7rem", margin: "2rem 0" }}
          className="card-title text-uppercase"
        >
          {props.title}
        </h1>
      </Div>
      <p className="card-text">{props.text} </p>
      {props.btn && <Button>{props.btn}</Button>}
    </div>
  </CardDiv>
);
export const ServicesCard = (props) => (
  <div className="box">
    <div className="content">
      <h2>01</h2>
      <h3>Service One</h3>
      <p>
        llllllllllllllllllllllllllllllllllllllllllllllllll
        sddddddddddddddsaslllllllllllllllllllllllllllllllllllllllllll
      </p>
    </div>
  </div>
);

export const ProjectCard = (props) => {
  return (
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
};
