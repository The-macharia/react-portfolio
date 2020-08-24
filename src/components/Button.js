import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled("button")`
  padding: 0.5rem 2rem;
  font-size: 2rem;
`;
const Button = (props) => (
  <StyledButton className="btn btn-outline-dark" onClick={props.clicked}>
    {props.children}
  </StyledButton>
);

export default Button;
