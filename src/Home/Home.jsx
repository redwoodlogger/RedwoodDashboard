// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import LogsPanel from "./LogsPanel";
import RightPanel from "./RightPanel";

const Panels = props => {
  const { children } = props;
  return (
    <div
      css={css`
        flex: 1;
        display: flex;
        overflow: hidden;
      `}
    >
      {children}
    </div>
  );
};

Panels.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const Home = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      height: 100%;
    `}
  >
    <Navbar />
    <Panels>
      <LogsPanel />
      <RightPanel />
    </Panels>
  </div>
);

export default Home;
