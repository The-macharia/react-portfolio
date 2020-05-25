import React from "react";
import Nav from "../components/Navigation/Nav";
import "bootstrap/dist/css/bootstrap.css";
import Image from "../assets/wave.jpg";
import Card from "../components/UI/Card";
import HeaderImage from "../assets/img3.png";
import styled from "@emotion/styled";

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Header = (props) => {
  const styles = {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    width: "100% !important",
  };
  return (
    <header id="home" style={styles}>
      <div className="container d-flex flex-column justify-content-center">
        <Nav links={props.links} clicked={props.clicked} />
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Img src={HeaderImage} alt="Header" />
          </div>
          <div className="col-md-6 col-sm-12">
            <Card
              title={"Eric Macharia"}
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
