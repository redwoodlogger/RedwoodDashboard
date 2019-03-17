// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Navbar from "../Navbar";
import LogsPanel from "./LogsPanel/LogsPanel";
import { LogsData } from "./LogsPanel/LogsData";
import RightPanel from "./RightPanel";
import { ColourData } from "./LogsPanel/ColourData";

class Panels extends Component {
  constructor(props) {
    super(props);

    const colourMapping = new Map();

    const allTags = LogsData.map(entry => entry.tags);
    const numColours = Object.keys(ColourData).length;
    let tagCount = 0;

    allTags.forEach(value => {
      const tags = value.split(";");
      tags.forEach(tag => {
        if (!colourMapping.has(tag.trim())) {
          colourMapping.set(tag.trim(), ColourData[tagCount % numColours]);
          tagCount += 1;
        }
      });
    });

    LogsData.forEach(value => {
      let colourString = "";
      let colour = "";
      const tags = value.tags.split(";");
      tags.forEach(tag => {
        colour = colourMapping.get(tag.trim());
        colourString += colour;
        colourString += ";";
      });
      colourString = colourString.substring(0, colourString.length - 1);
      const obj = {};
      obj.tags = value.tags;
      obj.colours = colourString;
      value.obj = obj;
    });

    this.state = {
      logsData: LogsData,
      systems: ["System 1", "System 2", "System 3"],
      currentSystem: "System 1",
      currentRow: undefined
    };
  }

  rowClickCallback = event => {
    if (event.node.selected) {
      const { rowIndex } = event;
      const { logsData } = this.state;
      this.setState({ currentRow: logsData[rowIndex] });
    }
  };

  render() {
    const { logsData, systems, currentSystem, currentRow } = this.state;

    return (
      <div
        css={css`
          flex: 1;
          display: flex;
          overflow: hidden;
        `}
      >
        <LogsPanel
          logsData={logsData}
          systems={systems}
          currentSystem={currentSystem}
          rowClickCallback={this.rowClickCallback}
        />
        <RightPanel currentRow={currentRow} />
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
