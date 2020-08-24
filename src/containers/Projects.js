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
      <div class="project_card">
        <div class="face face1">
          <div class="content">
            <img src={Image} alt="Project 1" />
            <h3>Design</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              beatae et laboriosam, eveniet voluptatum eaque ad cum,
              reprehenderit dolorem repudiandae nihil ducimus, dignissimos
            </p>
            <a href="#home">Read More</a>
          </div>
        </div>
      </div>
    ));

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
