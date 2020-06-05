import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "../components/Heading";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ServiceCard } from "../components/Card";
import { ReactComponent as AppLogo } from "../assets/app.svg";
import { ReactComponent as WebLogo } from "../assets/web.svg";
import { ReactComponent as ErpLogo } from "../assets/erp.svg";
import { ReactComponent as ResponsiveLogo } from "../assets/responsive.svg";
import Image from "../assets/drawing.png";

class Services extends Component {
  state = {
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
  render() {
    return (
      <section id="services" style={{ backgroundImage: `url(${Image})` }}>
        <Container>
          <Heading title="What I Do" mb={"3rem"} />
          <Row>
            {this.state.services.map((service) => (
              <Col md={6} key={service.title}>
                <ServiceCard
                  title={service.title}
                  icon={service.icon}
                  text={service.text}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    );
  }
}
export default Services;
