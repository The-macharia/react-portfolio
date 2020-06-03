import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Links from "../components/Navigation/Links";
import Heading from "../components/Heading";
import Paper from "@material-ui/core/Paper";
import styled from "@emotion/styled";

const Footer = (props) => {
  const StyledFooter = styled("footer")`
    display: flex;
    align-items: center;
    height: 30rem;
    background-image: linear-gradient(135deg, #000410, #0a1535);
    @media (max-width: 600px) {
      .row {
        flex-direction: column;
        margin: 1rem 0;
      }

      .container {
        padding: 0;
      }
      ul {
        background-color: transparent;
      }
      h1 {
        font-size: 2rem !important;
      }
    }
  `;
  return (
    <StyledFooter>
      <Container>
        <Row style={{ width: "100%" }}>
          <Col className="hideCol">
            <Heading title={"Site Map"} color="#ccc" />
            <Links links={props.links} flex={"row"} />
          </Col>
          <Col>
            <Heading title={"Let's get social"} color="#ccc" />
            <span
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {props.social.map((design) =>
                Object.entries(design).map((des) => (
                  <a
                    key={design}
                    href={des[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Paper style={{ margin: "2rem", padding: ".4rem 0" }}>
                      {des[1].icon}
                    </Paper>
                  </a>
                ))
              )}
            </span>
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <p style={{ margin: "0 auto", color: "#ccc" }}>
            Made By Me With :heart
          </p>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
