import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "../components/Heading";
import { ProjectCard } from "../components/Card";

class Projects extends Component {
  state = {
    projects: {
      mine: {
        name: "Personal Portfolio",
        cta: { link: { url: "the-macharia.web.app", icon: "source" } },
        details: "lorem",
      },
    },
  };
  render() {
    const projects = Object.entries(this.state.projects).map((project) => (
      <ProjectCard key={project[0]} cta={project[1].cta} />
    ));

    return (
      <section id="projects">
        <Heading title="Some Of My Work" mb="3rem" />
        <div className="container">{projects}</div>
      </section>
    );
  }
}

export default Projects;
