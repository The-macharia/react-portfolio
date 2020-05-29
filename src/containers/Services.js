import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "../components/Heading";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../components/Card";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Heading title="What I Do" />
        <Row>
          <Col sm={12}>
            <Card
              title={"Responsive Web Design"}
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum error necessitatibus quis, eaque reiciendis vero optio
                  esse tempora laboriosam aliquid expedita assumenda hic aliquam
                  repellat maiores ipsa minima quod est"
            />
          </Col>
          <Col sm={12}>
            <Card title={"Responsive Web Development"} />
          </Col>
          <Col sm={12}>
            <Card title={"Mobile Apps"} />
          </Col>
          <Col sm={12}>
            <Card title={"ERP Development"} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
