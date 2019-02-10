// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Navbar from "../Navbar";
import LogsPanel from "./LogsPanel";
import RightPanel from "./RightPanel";

const Panels = () => (
  <div
    css={css`
      flex: 1;
      display: flex;
      overflow: hidden;
    `}
  >
    <LogsPanel />
    <RightPanel />
  </div>
);

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
