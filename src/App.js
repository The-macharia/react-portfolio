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
            .container {
              min-height: 100vh;
            }
            h1 {
              font-weight: bold;
              letter-spacing: 0.1rem;
              font-size: 3rem;
              color: #222;
            }
            h5 {
              font-weight: light;
              letter-spacing: 0.1rem;
            }
            .card {
              border: none !important;
              background-color: transparent;
            }
            .card,
            h5 {
              border: none !important;
            }
            @media (min-width: 600px) {
              h1 {
                font-size: 4.8rem;
              }
            }
            @media (max-width: 600px) {
              nav {
                background-color: #fff;
              }
            }
          `}
        />
      </>
    );
  }
}

export default App;
