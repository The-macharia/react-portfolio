import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Links from "../components/Navigation/Links";
import Heading from "../components/Heading";

const Footer = (props) => {
  return (
    <footer>
      <Container>
        <Row style={{ width: "100%" }}>
          <Col>
            <Heading title={"Site Map"} />
            <Links links={props.links} flex={"row"} />
          </Col>
          <Col>
            <Heading title={"Let's get social"} />
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <p style={{ margin: "0 auto" }}>Made By Me With :heart</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
