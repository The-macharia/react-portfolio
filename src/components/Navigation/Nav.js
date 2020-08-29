import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Link, { NLink } from "./Links";
import { Button } from "@material-ui/core";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Nav = (props) => {
  const styles = {
    backgroundColor: "transparent !important",
    transition: "all .3s",
  };

  window.onscroll = () => scrollFxn();
  const scrollFxn = () => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document.querySelector("nav").style.backgroundColor = "#fff";
      document.querySelector("nav").style.boxShadow =
        "0 .1rem .2rem rgba(0,0,0, .23)";
    } else {
      document.querySelector("nav").style.boxShadow = "none";
      document.querySelector("nav").style.backgroundColor = "transparent";
    }
  };

  return (
    <nav className="navbar navbar-expand-sm fixed-top w-100" style={styles}>
      <a
        className="navbar-brand mr-auto"
        href="/"
        onmouseover={props.hoverToggle}
      >
        <Logo />
      </a>
      <Button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={props.clicked}
      >
        <span>
          <MenuIcon style={{ color: "black", fontSize: "3rem" }} />
        </span>
      </Button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarText"
      >
        <Link links={props.links} color={"black"} />
      </div>
    </nav>
  );
};

export default Nav;

export const Navbar = (props) => (
  <nav className="nav">
    <div className="nav__brand">
      <Logo />
    </div>

    <div className="nav__hamburger" onClick={props.collapse}></div>
    <div id="marker"></div>

    <div className="nav__collapse" id="collapse">
      <ul className="nav__ul">
        {props.links.map((link) => (
          <NLink hoverToggle={props.hoverToggle} key={link} title={link} />
        ))}
      </ul>
    </div>
  </nav>
);
