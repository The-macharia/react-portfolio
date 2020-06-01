import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./containers/Header";
import About from "./containers/About";
import Services from "./containers/Services";
import Projects from "./containers/Projects";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import { Global, css } from "@emotion/core";
import Backdrop from "./components/Backdrop";
import DescriptionIcon from "@material-ui/icons/Description";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { ReactComponent as PythonLogo } from "./assets/python.svg";
import { ReactComponent as JsLogo } from "./assets/js.svg";
import { ReactComponent as HtmlLogo } from "./assets/html.svg";
import { ReactComponent as CssLogo } from "./assets/css.svg";
import { ReactComponent as ReactLogo } from "./assets/react.svg";
import { ReactComponent as JqueryLogo } from "./assets/jquery.svg";
import { ReactComponent as BootstrapLogo } from "./assets/bootstrap.svg";
import { ReactComponent as SassLogo } from "./assets/sass.svg";
import { ReactComponent as PostgresqlLogo } from "./assets/postgresql.svg";
import { ReactComponent as MongoLogo } from "./assets/mongo.svg";
import { ReactComponent as MysqlLogo } from "./assets/mysql.svg";
import { ReactComponent as GitLogo } from "./assets/git.svg";
import { ReactComponent as LinuxLogo } from "./assets/linux.svg";
import { ReactComponent as SshLogo } from "./assets/ssh.svg";
import { ReactComponent as WebpackLogo } from "./assets/webpack.svg";
import { ReactComponent as AppLogo } from "./assets/app.svg";
import { ReactComponent as WebLogo } from "./assets/web.svg";
import { ReactComponent as ErpLogo } from "./assets/erp.svg";
import { ReactComponent as ResponsiveLogo } from "./assets/responsive.svg";

class App extends Component {
  state = {
    links: ["home", "about", "services", "projects", "contact"],
    backdropOpen: true,
    about: [
      {
        icon: <DescriptionIcon style={{ fontSize: "3rem" }} />,
        text: "Resume",
      },
      {
        icon: <LinkedInIcon style={{ fontSize: "3rem" }} />,
        text: "LinkedIn",
      },
      {
        icon: <GitHubIcon style={{ fontSize: "3rem" }} />,
        text: "GitHub",
      },
    ],
    programming: [
      {
        languages: [
          <PythonLogo style={{ width: "50%" }} />,
          <JsLogo style={{ width: "50%" }} />,
          // <NodeLogo style={{ width: "50%" }} />,
          <HtmlLogo style={{ width: "50%" }} />,
          <CssLogo style={{ width: "50%" }} />,
        ],
      },
      {
        frameworks: [
          <ReactLogo style={{ width: "50%" }} />,
          <JqueryLogo style={{ width: "50%" }} />,
          // <ExpressLogo style={{ width: "50%" }} />,
          <BootstrapLogo style={{ width: "50%" }} />,
          <SassLogo style={{ width: "50%" }} />,
        ],
      },
      {
        databases: [
          <PostgresqlLogo style={{ width: "40%" }} />,
          <MongoLogo style={{ width: "40%" }} />,
          <MysqlLogo style={{ width: "40%" }} />,
        ],
      },
      {
        tools: [
          <GitLogo style={{ width: "70%" }} />,
          <LinuxLogo style={{ width: "70%" }} />,
          <SshLogo style={{ width: "70%" }} />,
          <WebpackLogo style={{ width: "70%" }} />,
        ],
      },
    ],
    services: [
      {
        icon: <ResponsiveLogo style={{ width: "100%", height: "50%" }} />,
        title: "Responsive Web design",
        text:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum error necessitatibus quis,",
      },
      {
        icon: <WebLogo style={{ width: "100%", height: "50%" }} />,
        title: "Web development",
        text:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum error necessitatibus quis,",
      },
      {
        icon: <AppLogo style={{ width: "100%", height: "50%" }} />,
        title: "Mobile Apps Development",
        text:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum error necessitatibus quis,",
      },
      {
        icon: <ErpLogo style={{ width: "100%", height: "50%" }} />,
        title: "eRP Development",
        text:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum error necessitatibus quis,",
      },
    ],
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
          <About
            about={this.state.about}
            programming={this.state.programming}
          />
          <Services services={this.state.services} />
          <Projects />
          <Contact form={this.state.form} />
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
              ${"" /* Check on this styles later, they might cause issues */}
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            h1 {
              font-weight: bold;
              letter-spacing: 0.1rem;
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
            span {
              padding: 1rem 2rem;
            }
            span svg {
              width: 5rem !important;
            }
            nav a {
              width: 50% !important;
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
                min-height: 100vh;
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
              nav a {
                width: 20% !important;
              }
            }
          `}
        />
      </>
    );
  }
}

export default App;
