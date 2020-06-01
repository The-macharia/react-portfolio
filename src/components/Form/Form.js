import React from "react";
import Input from "./Input";
import styled from "@emotion/styled";

const Form = (props) => {
  const StyledForm = styled("form")`
    background-color: #fafafa;
    padding: 1rem 2rem;
    border-radius: 2rem;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    h5 {
      font-size: 1.8rem;
      line-height: 200%;
      letter-spacing: 0.1rem;
      margin: 0 auto;
      padding: 1rem;
      text-transform: uppercase;
    }

    textarea {
      width: 100%;
      padding: 1rem;
      border: none;
      border-radius: 0.5rem;
      border-bottom: 1.5px solid #000;
      background: transparent;
      overflow: auto;
      transition: all 0.3s;

      &:focus {
        outline: none;
      }
      &:hover,
      &:active {
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.35);
      }
    }
    label {
      line-height: 200%;
    }
    button {
      padding: 1rem 2rem;
      text-transform: uppercase;
      font-size: 1.5rem;
      width: 50%;
      margin: 2rem auto;
      border-radius: 0.5rem;
      align-self: center;

      &:active {
        outline: none;
      }
    }
  `;

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <h5>Contact Me</h5>
      {props.form.map((element) => (
        <div key={element.config.id}>
          <label htmlFor={element.config.id}>{element.config.id}</label>
          <Input
            type={element.type}
            elementType={element.el}
            config={element.config}
          />
        </div>
      ))}
      <button type="submit">Send</button>
    </StyledForm>
  );
};

export default Form;
