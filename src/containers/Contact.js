import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "../components/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Form from "../components/Form/Form";
import { ReactComponent as MailLogo } from "../assets/mail.svg";
import Input from "../components/Input";
import styled from "@emotion/styled";

class Contact extends Component {
  state = {
    form: {
      name: {
        el: "input",
        type: "text",
        value: "",
        config: {
          placeholder: "Your Name",
          id: "name",
        },
        valid: true,
        touched: false,
        validation: {
          required: true,
          min: 2,
        },
      },
      email: {
        el: "input",
        value: "",
        type: "email",
        config: {
          placeholder: "Your Email",
          id: "email",
        },
        valid: true,
        touched: false,
        validation: {
          required: true,
          min: 4,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
      },
      subject: {
        el: "input",
        value: "",
        type: "text",
        touched: false,
        config: {
          placeholder: "Subject",
          id: "subject",
        },
      },
      message: {
        el: "textarea",
        value: "",
        type: "text",
        config: {
          rows: 1,
          placeholder: "Your Message",
          id: "message",
        },
        valid: true,
        touched: false,
        validation: {
          required: true,
          min: 2,
        },
      },
    },
  };

  // validateEmail = (email) => {
  //   var re = /\S+@\S+\.\S+/;
  //   return re.test(email);
  // };

  formValidationHandler = (rules, input) => {
    let valid = true;
    if (rules) {
      if (rules.required) {
        valid = valid && input.value.trim(" ") !== " ";
      }
      if (rules.min) {
        valid = valid && input.value.length >= rules.min;
      }
      if (rules.pattern) {
        valid = valid && rules.pattern.test(input.value);
      }
    }
    return valid;
  };

  onChangeHandler = (e) => {
    const updatedForm = this.state.form;

    updatedForm[e.target.id] = {
      ...updatedForm[e.target.id],
      value: e.target.value,
      touched: true,
      valid: this.formValidationHandler(
        updatedForm[e.target.id].validation,
        updatedForm[e.target.id]
      ),
    };

    this.setState({ form: updatedForm });
  };

  onsubmitHandler = (e) => {
    e.preventDefault();
    const message = {};

    const form = Object.entries(this.state.form);
    form.map((arr) => (message[arr[0]] = arr[1].value));
    console.log(message);
  };

  render() {
    const inputs = Object.entries(this.state.form).map((el) => (
      <div key={el[0]}>
        <label htmlFor={el[1].config.id}>{el[1].config.id}</label>
        <Input
          type={el[1].type}
          elementType={el[1].el}
          config={el[1].config}
          changed={this.onChangeHandler}
          value={el[1].value}
          valid={el[1].valid}
          touched={el[1].touched}
        />
      </div>
    ));

    return (
      <section id="contact" style={{}}>
        <Heading title="Say Hello" mb="3rem" />
        <Container>
          <Row style={{ width: "100%" }}>
            <Col md={6} className="hideCol">
              <MailLogo style={{ width: "90%" }} />
            </Col>
            <Col md={6}>
              <StyledForm onSubmit={this.onsubmitHandler}>
                <h5>Contact Me </h5>
                {inputs}
                <button type="submit">Send</button>
              </StyledForm>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
const StyledForm = styled("form")`
  background-color: #fafafa;
  padding: 1rem 2rem;
  border-radius: 2rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
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
export default Contact;
