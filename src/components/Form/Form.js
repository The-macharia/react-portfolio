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

    @media (max-width: 600px) {
      width: 100%;
    }

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
      text-transform: capitalize;
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

  const inputs = Object.entries(props.form).map((el) => (
    <div key={el[0]}>
      <label htmlFor={el[1].config.id}>{el[1].config.id}</label>
      <Input
        type={el[1].type}
        elementType={el[1].el}
        config={el[1].config}
        changed={props.changed}
        value={el[1].value}
      />
    </div>
  ));

  return (
    <StyledForm onSubmit={props.submitHandler}>
      <h5>Contact Me </h5>
      {inputs}
      <button type="submit">Send</button>
    </StyledForm>
  );
};

export default Form;
