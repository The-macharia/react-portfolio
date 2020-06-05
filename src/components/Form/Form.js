import React from "react";
import Input from "./Input";
import { withRouter } from "react-router-dom";
// import styled from "@emotion/styled";

const Form = (props) => {
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
    <Form onSubmit={props.submitHandler}>
      <h5>Contact Me </h5>
      {inputs}
      <button type="submit">Send</button>
    </Form>
  );
};

export default withRouter(Form);
