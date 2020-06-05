import React from "react";
import Row from "react-bootstrap/Row";

import Cards from "../components/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../components/Heading";

const About = (props) => {
  return (
    <section id="about">
      <Container>
        <Row>
          <div className="col-md-6">
            <Cards
              title={"About Me"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum error necessitatibus quis, eaque reiciendis vero optio esse tempora laboriosam aliquid expedita assumenda hic aliquam repellat maiores ipsa minima quod est."
              }
            />
            <div className="row my-3 about-social">
              {props.about.map((el) => (
                <div
                  className="d-flex flex-column col text-center mr-3"
                  key={el.text}
                >
                  <span>{el.icon}</span>
                  <span>{el.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <Heading title={"Current Stack"} />
            <div className="row">
              {props.programming.map((language) =>
                Object.entries(language).map((el) => (
                  <div key={el[0]} className="p-3 my-3 text-center w-100">
                    <div className="text-center">
                      <h5
                        style={{
                          textTransform: "uppercase",
                          margin: "1rem 0",
                          lineHeight: "200%",
                          letterSpacing: ".1rem",
                        }}
                      >
                        {el[0]}:
                      </h5>
                    </div>
                    <div className="row text-center">
                      {el[1].map((lang) => (
                        <div
                          className="col"
                          style={{ width: "1rem" }}
                          key={Math.random()}
                        >
                          {lang}
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default About;
