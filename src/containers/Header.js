import React from "react";
import Nav from "../components/Navigation/Nav";
import "bootstrap/dist/css/bootstrap.css";

const Header = (props) => {
  return (
    <header className="container" id="home">
      <Nav links={props.links} />
    </header>
  );
};

export default Header;
