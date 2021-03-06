// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Navbar";
import Button from "../shared/Button";
import Details from "./Details";
import UserActions from "./UserActions";
import Network from "./Network";
import Console from "./Console";

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
      <Button
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px;
          margin: 5px 0 5px 15px;
          width: 70px;
          font-size: 11pt;
          font-weight: 500;
          border-radius: 10px;

          :focus {
            outline: 0;
          }
        `}
      >
        <FontAwesomeIcon icon={faLessThan} />
        &nbsp;&nbsp;Back
      </Button>
    </div>
    <Details />
    <UserActions />
    <Network />
  </section>
);

const MainPanel = () => (
  <section
    css={css`
      flex: 1;
      display: flex;
      flex-direction: column;
    `}
  >
    <div
      css={css`
        flex: 1;
      `}
    >
      <div
        id="viewer"
        css={css`
          height: 100%;
        `}
      />
    </div>
    <Console />
  </section>
);

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
