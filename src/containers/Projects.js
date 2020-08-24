import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "../components/Heading";
import { ProjectCard } from "../components/Card";
import Image from "../assets/drawing.png";
import "../components/components.css";
class Projects extends Component {
  state = {
    projects: {
      mine: {
        name: "Personal Portfolio",
        cta: {
          source: { url: "the-macharia.web.app", icon: "source" },
          live: { url: "the-macharia.webs.app", icon: "live" },
        },
        details: "lorem",
      },
      you: {
        name: "Personal Porlio",
        cta: {
          source: { url: "the-macharia.web.app", icon: "source" },
          live: { url: "the-macharia.webs.app", icon: "live" },
        },
        details: "lorem",
      },
      yours: {
        name: "rsonal Portfolio",
        cta: {
          source: { url: "the-macharia.web.app", icon: "source" },
          live: { url: "the-macharia.webs.app", icon: "live" },
        },
        details: "lorem",
      },
    },
  };
  render() {
    const projects = Object.entries(this.state.projects).map((project) => (
      <div className="project__card" key={Math.random()}>
        <div className="project__face face1">
          <div className="project__content">
            <img src={Image} alt="Website" />
            <h3>Design</h3>
          </div>
        </div>

        <div className="project__face face2">
          <div className="project__content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              error necessitatibus quis
            </p>
            <div className="project__cta">
              <a href="/">source</a>
              <a href="/">live</a>
            </div>
          </div>
        </div>
      </div>
    ));

    // <div className="col-md-4" key={project[0]}>
    //   <ProjectCard {...project[1]} />
    // </div>
    return (
      <section id="projects">
        <Heading title="Some Of My Work" mb="3rem" />
        <div className="container">
          <div className="project__container">{projects}</div>
        </div>
      </section>
    );
  }
}

export default Projects;
