import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./containers/Header";
import About from "./containers/About";
import Services from "./containers/Services";
import Projects from "./containers/Projects";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import { Global, css } from "@emotion/core";
import Backdrop from "./components/UI/Backdrop";

class App extends Component {
  state = {
    links: ["home", "about", "services", "projects", "contact"],
    backdropOpen: true,
  };

  hideBackdropToggler = () =>
    this.setState({ backdropOpen: !this.state.backdropOpen });

  render() {
    return (
      <>
        {!this.state.backdropOpen && (
          <Backdrop clicked={this.hideBackdropToggler} />
        )}

        <Header links={this.state.links} clicked={this.hideBackdropToggler} />
        <main>
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />

        <Global
          styles={css`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-size: 1.4rem;
              color: #222;
              line-height: 200% !important;
            }
            html {
              font-size: 62.5%;
              scroll-behavior: smooth;
            }

            section,
            header,
            .container,
            .container-fluid {
              min-height: 100vh;
            }
            h1 {
              font-weight: bold;
              letter-spacing: 0.1rem;
              font-size: 3rem;
              color: #222;
            }
            h5 {
              backgroud-color: transparent !important;
              font-weight: bold;
              font-family: "Roboto", sans-serif;
              letter-spacing: 0.1rem;
              font-size: 1.55rem;
            }
            .card {
              border: none !important;
              background-color: transparent;
            }
            svg {
              width: 100%;
              height: 100%;
            }

            .card,
            h5 {
              border: none !important;
            }
            ${"" /* MEDIA QUERIES */}

            @media (max-width: 600px) {
              section,
              header,
              .container,
              .container-fluid {
                min-height: 70vh;
              }
              .svg-box {
                height: 50vh !important;
                margin-bottom: 2rem;
              }
              nav {
                background-color: #fff;
              }
            }
            @media (min-width: 600px) {
              .svg-box {
                height: 80vh;
              }
              h1 {
                font-size: 4.8rem;
              }
            }
          `}
        />
      </>
    );
  }
}

export default App;
