import React from "react";
import Nav from "../components/Navigation/Nav";
import "bootstrap/dist/css/bootstrap.css";
import Image from "../assets/wave.jpg";
import Card from "../components/Card";
import { ReactComponent as ReactImage } from "../assets/svg31.svg";

const Header = (props) => {
  const styles = {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    width: "100% !important",
  };
  return (
    <header id="home" style={styles}>
      <div className="container-fluid d-flex flex-column justify-content-center">
        <Nav links={props.links} clicked={props.clicked} />
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 col-lg-8 col-sm-12 svg-box">
            <ReactImage />
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <Card
              title={"Macharia Eric"}
              btn={"Hire Me"}
              featured={"hi, this is me"}
              text={`I am Eric, ✌ a Software Engineer living in Kenya. I am currently  specializing as a Frontend software engineer.
              All i want to do is build software that matters, make products that make people's lives easier even if it is just one person. Scratch that, atleast two 😁.`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
