import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "../components/Heading";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ServiceCard } from "../components/Card";

const Services = (props) => {
  return (
    <section id="services">
      <Container>
        <Heading title="What I Do" mb={"3rem"} />
        <Row>
          {props.services.map((service) => (
            <Col sm={6} md={4} key={service.title}>
              <ServiceCard
                title={service.title}
                icon={service.icon}
                text={service.text}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
