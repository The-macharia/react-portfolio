import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "../components/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "../components/Form/Form";
import { ReactComponent as MailLogo } from "../assets/mail.svg";

const Contact = (props) => {
  return (
    <section id="contact" style={{}}>
      <Heading title="Say Hello" mb="3rem" />
      <Container>
        <Row>
          <Col md={6}>
            <MailLogo style={{ width: "90%" }} />
          </Col>
          <Col md={6}>
            <Form form={props.form} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
