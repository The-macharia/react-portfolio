import React from "react";
import styled from "@emotion/styled";

const StyledInput = styled("input")`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  background: transparent;
  transition: all 0.3s;
  border-radius: 0.5rem;
  border-bottom: 1.5px solid #000;

  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.35);
    ${"" /* box-shadow: inset 0 1rem 2rem rgba(0, 0, 0, 0.35); */}
  }
`;

const Input = (props) => {
  let input;
  switch (props.elementType) {
    case "input":
      input = (
        <StyledInput
          type={props.type}
          {...props.config}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      input = (
        <textarea
          type={props.type}
          {...props.config}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      input = (
        <StyledInput
          type="text"
          {...props.config}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return input;
};

export default Input;
