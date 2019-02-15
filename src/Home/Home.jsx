// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import LogsPanel from "./LogsPanel/LogsPanel";
import { LogsData } from "./LogsPanel/LogsData";
import RightPanel from "./RightPanel";
import { ColourData } from "./LogsPanel/ColourData";

class Panels extends Component {
  constructor(props) {
    super(props);

    const colourMapping = new Map();
    const rowData = LogsData;

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

    // console.log(colourMapping);

    rowData.forEach(value => {
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
      // value.tags = tagString;
    });

    this.state = {
      rowData,
      systems: ["System 1", "System 2", "System 3"],
      currentSystem: "System 1"
    };
  }
  /*
    componentDidMount() {
      const colourMapping = new Map();
      const rowData = LogsData;
  
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
  
      this.setState({ colourMapping }, { rowData });
    } */

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
