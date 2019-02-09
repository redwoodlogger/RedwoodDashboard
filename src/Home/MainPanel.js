// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../shared/Button";

const MainPanelOptions = () => (
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
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <p
            css={css`
              font-size: 1.3rem;
              margin: 0 0.3em 0 0;
            `}
          >
            System One
          </p>
          <FontAwesomeIcon icon="angle-down" />
        </div>
        <p>10 unresolved bug reports | 5 unresolved general feedback</p>
      </div>
      <Button>Bug Reports</Button>
      <Button>General Feedback</Button>
    </div>
  </section>
);

const MainPanel = () => <MainPanelOptions />;

export default MainPanel;
