import React from "react";

const Link = (props) => {
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
    <ul className="navbar-nav" style={ulStyles}>
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
    </ul>
  );
};

export default Link;
