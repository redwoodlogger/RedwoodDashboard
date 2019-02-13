// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import LogsPanel from "./LogsPanel/LogsPanel";
import { LogsData } from "./LogsPanel/LogsData";
import RightPanel from "./RightPanel";

class Panels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: LogsData,
      systems: ["System 1", "System 2", "System 3"],
      currentSystem: "System 1"
    };
  }

  render() {
    const { rowData, systems, currentSystem } = this.state;
    return (
      <div
        css={css`
          flex: 1;
          display: flex;
          overflow: hidden;
        `}
      >
        <LogsPanel
          rowData={rowData}
          systems={systems}
          currentSystem={currentSystem}
        />
        <RightPanel />
      </div>
    );
  }
}

const Home = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      height: 100%;
    `}
  >
    <Navbar />
    <Panels />
  </div>
);

export default Home;
