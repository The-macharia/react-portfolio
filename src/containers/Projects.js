import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "../components/Heading";
import { ProjectCard } from "../components/Card";
import Image from "../assets/wave.jpg";
import "../components/components.css";
class Projects extends Component {
  state = {
    projects: {
      mine: {
        name: "Personal Portfolio",
        image: Image,
        cta: {
          source: {
            url: "the-mcharia.web.app",
            icon: "source",
            label: "Source",
          },
          live: { url: "the-macharia.web.app", icon: "live", label: "Live" },
        },
        details: "lorem",
      },
      you: {
        name: "Personal Portfolio",
        image: Image,
        cta: {
          source: {
            url: "the-machaia.web.app",
            icon: "source",
            label: "Source",
          },
          live: { url: "the-macharia.eb.app", icon: "live", label: "Live" },
        },
        details: "lorem",
      },
      yours: {
        name: "rsonal Portfolio",
        image: Image,
        cta: {
          source: {
            url: "the-machara.web.app",
            icon: "source",
            label: "Source",
          },
          live: { url: "the-macharia.web.ap", icon: "live", label: "Live" },
        },
        details: "lorem",
      },
    },
  };
  render() {
    const projects = Object.entries(this.state.projects).map((project) => (
      <ProjectCard
        key={project[0]}
        img={project[1].image}
        title={project[1].name}
        text={project[1].details}
        cta={project[1].cta}
      />
    ));

    return (
      <section id="projects" className="project">
        <Heading title="Some Of My Work" mb="3rem" />

        <div className="container project__container">{projects}</div>
      </section>
    );
  }
}
{
  /* <div className="project__container">{projects}</div> */
}

export default Projects;
