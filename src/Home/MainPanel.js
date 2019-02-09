// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../shared/Button";

const SystemDropdown = () => (
  <div
    css={css`
      display: flex;
      align-items: center;
    `}
  >
    <p
      css={css`
        font-size: 1.3rem;
        margin: 0 0.3em 0.5em 0;
      `}
    >
      System One
    </p>
    <FontAwesomeIcon icon="angle-down" />
  </div>
);

const PanelButtons = () => (
  <div>
    <Button
      css={css`
        margin-right: 0.8em;
      `}
    >
      Bug Reports
    </Button>
    <Button active={false}>General Feedback</Button>
  </div>
);

const PanelOptions = () => (
  <div>
    <SystemDropdown />
    <PanelButtons />
  </div>
);

const PanelTop = () => (
  <section
    css={css`
      background: white;
      flex: 1;
      padding-top: 1em;
    `}
  >
    <div
      css={css`
        padding: 0 2em 0 4em;
        display: flex;
        justify-content: space-between;
      `}
    >
      <PanelOptions />
      <p>10 Unresolved Bug Reports | 5 Unresolved General Feedback</p>
    </div>
  </section>
);

const MainPanel = () => <PanelTop />;

export default MainPanel;
