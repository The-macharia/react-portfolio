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

  return (
    <UL className="navbar-nav" style={ulStyles}>
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

export const NLink = (props) => (
  <li className="nav__item" onMouseOver={props.hoverToggle}>
    <a href={`#${props.title}`} className="nav__link">
      {props.title}
    </a>
  </li>
);
