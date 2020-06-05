import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "./Links";
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
      <a className="navbar-brand mr-auto" href="/">
        <Logo />
      </a>
      <Button
        // style={{ color: "#04091e", backgroundColor: "#8e701d" }}
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
