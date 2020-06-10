import React from "react";
import styled from "@emotion/styled";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const StyledInput = styled("input")`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  background: transparent;
  transition: all 0.3s;
  border-radius: 0.5rem;
  border-bottom: 1.5px solid #000;
  position: relative;

  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.35);
    ${"" /* box-shadow: inset 0 1rem 2rem rgba(0, 0, 0, 0.35); */}
  }
`;

const Input = (props) => {
  let input;
  let classes = [];

  if (!props.valid && props.touched) {
    classes.push("invalid");
  } else if (props.valid && props.touched) {
    classes.push("valid");
  }

  // const styles = {
  //   position: "absolute",
  //   top: "50%",
  //   right: "1rem",
  //   color: "darkgreen",
  // };

  switch (props.elementType) {
    case "input":
      input = (
        <>
          <StyledInput
            className={classes.join(" ")}
            type={props.type}
            {...props.config}
            value={props.value}
            onChange={props.changed}
          />
          {/* props.valid && props.touched <CheckCircleIcon style={styles} /> */}
        </>
      );
      break;
    case "textarea":
      input = (
        <textarea
          className={classes.join(",")}
          type={props.type}
          {...props.config}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      input = (
        <StyledInput
          className={classes.join(",")}
          type="text"
          {...props.config}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return input;
};

export default Input;
