import React from "react";
import styled from "@emotion/styled";

const Div = styled("div")`
  z-index: 1000;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Backdrop = (props) => <Div onClick={props.clicked}></Div>;

export default Backdrop;
