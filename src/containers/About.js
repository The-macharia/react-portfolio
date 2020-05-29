import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";

import Cards from "../components/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../components/Heading";
// import { Paper } from "@material-ui/core";

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
            <div className="row w-50 my-3">
              {props.about.map((el) => (
                <div
                  className="d-flex flex-column col text-center"
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
                    <h5>{el[0]}:</h5>
                    {el[1].map((lang) => (
                      <span style={{ width: "2rem" }} key={Math.random()}>
                        {lang}
                      </span>
                    ))}
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
