import React from "react";
import { css } from "@emotion/core";
import Navbar from "./Navbar";

const Panels = () => (
  <div
    css={css`
      flex: 1;
      display: flex;
    `}
  >
    <MainPanel />
    <SidePanel />
  </div>
);

const panelButtonStyle = css`
  background: #6184d8;
  padding: 0.5em;
  margin-right: 0.8em;
  border: none;
  border-radius: 0.6em;
  color: white;
`;

const MainPanel = () => (
  <section
    css={css`
      background: white;
      flex: 1;
    `}
  >
    <div
      css={css`
        margin-left: 4em;
      `}
    >
      <p>System One</p>
      <button css={panelButtonStyle} type="button">
        Bug Reports
      </button>
      <button css={panelButtonStyle} type="button">
        General Feedback
      </button>
    </div>
  </section>
);

const SidePanel = () => (
  <aside
    css={css`
      background: #f6f6f6;
      width: 25em;
    `}
  />
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
    <Panels>
      <MainPanel />
    </Panels>
  </div>
);

export default Home;
