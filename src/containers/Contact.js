import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "../components/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "../components/Form/Form";
import { ReactComponent as MailLogo } from "../assets/mail.svg";

class Contact extends Component {
  state = {
    form: [
      {
        el: "input",
        type: "text",
        value: "",
        config: {
          placeholder: "Your Name",
          id: "Name",
        },
        validation: {
          required: true,
          min: 4,
        },
      },
      {
        el: "input",
        value: "",
        type: "email",
        config: {
          placeholder: "Your Email",
          id: "Email",
        },
        validation: {
          required: true,
          min: 4,
        },
      },
      {
        el: "input",
        value: "",
        type: "text",
        config: {
          placeholder: "Subject",
          id: "Subject",
        },
      },
      {
        el: "textarea",
        value: "",
        type: "text",
        config: {
          rows: 1,
          placeholder: "Your Message",
          id: "Message",
        },
        validation: {
          required: true,
          min: 4,
        },
      },
    ],
  };

  onchangeHandler = (e, input) => {
    console.log(input);

    const updatedForm = this.state.form;
    this.setState({ form: updatedForm });
  };
  onsubmitHandler = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <section id="contact" style={{}}>
        <Heading title="Say Hello" mb="3rem" />
        <Container>
          <Row>
            <Col md={6}>
              <MailLogo style={{ width: "90%" }} />
            </Col>
            <Col md={6}>
              <Form
                form={this.state.form}
                submitHandler={this.onsubmitHandler}
                changed={(e, input) => this.onchangeHandler(e, input)}
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default Contact;
