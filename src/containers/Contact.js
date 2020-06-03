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
    form: {
      name: {
        el: "input",
        type: "text",
        value: "",
        config: {
          placeholder: "Your Name",
          id: "name",
        },
        validation: {
          required: true,
          min: 4,
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
        validation: {
          required: true,
          min: 4,
        },
      },
      subject: {
        el: "input",
        value: "",
        type: "text",
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
        validation: {
          required: true,
          min: 4,
        },
      },
    },
  };

  onChangeHandler = (e) => {
    const updatedForm = this.state.form;
    updatedForm[e.target.id] = {
      ...updatedForm[e.target.id],
      value: e.target.value,
    };
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
          <Row style={{ width: "100%" }}>
            <Col md={6} className="hideCol">
              <MailLogo style={{ width: "90%" }} />
            </Col>
            <Col md={6}>
              <Form
                form={this.state.form}
                submitHandler={this.onsubmitHandler}
                changed={this.onChangeHandler}
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default Contact;
