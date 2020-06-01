import React from "react";
import Button from "./Button";
import styled from "@emotion/styled";

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
