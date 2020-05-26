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
