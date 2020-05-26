import React from "react";
import Nav from "../components/Navigation/Nav";
import "bootstrap/dist/css/bootstrap.css";
import Image from "../assets/wave.jpg";
import Card from "../components/UI/Card";
// import HeaderImage from "../assets/img3.png";
// import styled from "@emotion/styled";
// import { jsx } from "@emotion/core";
import { ReactComponent as ReactImage } from "../assets/svg31.svg";

// const Img = styled.img`
//   width: 100%;
// `;

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
              text={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum error necessitatibus
                quis, eaque reiciendis vero optio esse tempora laboriosam aliquid expedita assumenda
                hic aliquam repellat maiores ipsa minima quod est.`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
