// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import Button from "../shared/Button";
import Details from "./Details";
import UserActions from "./UserActions";
import Network from "./Network";

const PlaybackPanel = props => {
  const { children } = props;
  return (
    <div
      css={css`
        flex: 1;
        display: flex;
      `}
    >
      {children}
    </div>
  );
};

PlaybackPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const LeftPanel = () => (
  <section
    css={css`
      width: 22em;
      border-right: 1px solid #e5e5e5;
      display: flex;
      flex-direction: column;
    `}
  >
    <div>
      <Button>Back</Button>
    </div>
    <Details />
    <UserActions />
    <Network />
  </section>
);

const MainPanel = () => <section>Hello there</section>;

const Playback = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      height: 100%;
    `}
  >
    <Navbar />
    <PlaybackPanel>
      <LeftPanel />
      <MainPanel />
    </PlaybackPanel>
  </div>
);

export default Playback;
