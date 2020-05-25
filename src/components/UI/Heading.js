import React from "react";
import Grid from "@material-ui/core/Grid";

const Heading = (props) => {
  const styles = {
    textAlign: "center",
    marginBottom: "3rem",
    color: props.color,
  };

  const subtitle = props.subtitle ? (
    <div className="d-flex">
      <hr style={{ backgroundColor: "#C6AD63", width: "20%" }} />
      <h3>{props.subtitle}</h3>
      <hr style={{ backgroundColor: "#C6AD63", width: "20%" }} />
    </div>
  ) : null;

  return (
    <Grid item xs={12} style={styles}>
      <h1>{props.title}</h1>
      {subtitle}
    </Grid>
  );
};

export default Heading;
