import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "../components/UI/Heading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Heading title="About Me" />
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">About Me</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum error necessitatibus quis, eaque reiciendis vero optio
                  esse tempora laboriosam aliquid expedita assumenda hic aliquam
                  repellat maiores ipsa minima quod est.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6">
            <Row> */}
          <Col md={6}>
            <Card>
              <Card.Title>Current Stack</Card.Title>
              <Card.Body>
                <span>Python</span>
                <span>ReactJS</span>
                <span>HTML</span>
                <span>CSS & SASS</span>
                <span>VanillaJS</span>
                <span>JQuery</span>
                <span>Flask</span>
                <span>Odoo</span>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}></Col>
          {/* </Row>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default About;
