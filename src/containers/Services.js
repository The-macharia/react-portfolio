import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "../components/Heading";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ServicesCard } from "../components/Card";
import { ReactComponent as AppLogo } from "../assets/app.svg";
import { ReactComponent as WebLogo } from "../assets/web.svg";
import { ReactComponent as ErpLogo } from "../assets/erp.svg";
import { ReactComponent as ResponsiveLogo } from "../assets/responsive.svg";

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
        title: "ERP Development",
        text:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum error necessitatibus quis,",
      },
    ],
  };
  render() {
    return (
      <section id="services">
        <Container>
          <Heading title="What I Do" mb={"3rem"} />

          <div className="services">
            <Row>
              {this.state.services.map((service, index) => (
                <Col md={4} xs={12} key={JSON.stringify(service)}>
                  <ServicesCard
                    index={index}
                    title={service.title}
                    text={service.text}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}
export default Services;
