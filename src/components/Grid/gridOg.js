import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Content } from "./gridOG.styles";

const GridOG = ({ header, children }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
      </Wrapper>
    </React.Fragment>
  );
};

GridOG.propTypes = {
  header: PropTypes.string,
  children: PropTypes.any,
};

export default GridOG;
