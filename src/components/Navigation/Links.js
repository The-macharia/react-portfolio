import React from "react";
import styled from "@emotion/styled";

const UL = styled("ul")`
  @media (max-width: 600px) {
    background-color: #fff;
  }
`;
const Links = (props) => {
  const linkStyles = {
    textTransform: "capitalize",
    color: props.color,
    fontSize: "1.8rem",
    padding: "1rem 1.5rem",
  };
  const ulStyles = {
    flexDirection: props.flex,
    justifyContent: "center",
    alignItems: "center",
  };

  const marker = document.querySelector(".marker");
  const links = document.querySelectorAll(".navbar-nav a");

  const indicator = (e) => {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
  };

  links.forEach((link) =>
    link.addEventListener("mouseover", (e) => indicator(e.target))
  );

  return (
    <UL className="navbar-nav" style={ulStyles}>
      <div class="marker"></div>

      {props.links.map((link) => (
        <li className="nav-item active" key={link}>
          <a
            className="nav-link text-capitalize"
            href={`#${link}`}
            style={linkStyles}
          >
            {link}
          </a>
        </li>
      ))}
    </UL>
  );
};

export default Links;
