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
import "../components/components.css";

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
      <section id="services" style={{ background: "#060c21", zIndex: "-10" }}>
        <Container>
          <Heading title="What I Do" mb={"3rem"} />
          <div className="services">
            {this.state.services.map((service, index) => (
              <div className="box" key={JSON.stringify(service)}>
                <div className="content">
                  <h2>0{index + 1}</h2>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }
}
export default Services;
// {this.state.services.map((service) => (
//   <Col md={3} key={service.title}>
//     <ServicesCard />
//   </Col>
// ))}

// {this.state.services.map((service) => (
//   <Col md={6} key={service.title}>
//     <ServiceCard
//       title={service.title}
//       icon={service.icon}
//       text={service.text}
//     />
//   </Col>
// ))}
