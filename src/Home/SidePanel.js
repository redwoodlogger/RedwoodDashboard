// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../shared/Button";

const Hashtag = props => {
  const { children } = props;
  return (
    <button
      css={css`
        background: #bf6ebf;
        padding: 0.2em 0.5em 0.2em 0.5em;
        margin: 0 0.2em 0.4em 0;
        border: none;
        border-radius: 0.3em;
        color: white;
      `}
      type="button"
    >
      {children}
    </button>
  );
};

Hashtag.propTypes = {
  children: PropTypes.string.isRequired
};

const SidePanel = () => (
  <aside
    css={css`
      background: #f6f6f6;
      width: 25em;
      padding: 1em 4em 0 2em;
    `}
  >
    <p>Bug Report #123459</p>
    <section>
      <p>Assigned Tags</p>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <Hashtag>#hashtag</Hashtag>
        <Hashtag>#longerhashtag</Hashtag>
        <Hashtag>#shorttag</Hashtag>
        <Hashtag>#superlonghashtag</Hashtag>
        <Hashtag>#hashhash</Hashtag>
        <Hashtag>#tagtag</Hashtag>
      </div>
      <input
        css={css`
          border: 1px solid #e5e5e5;
          border-radius: 0.2em;
          width: 100%;
          height: 2em;
        `}
        placeholder="Add a hashtag"
      />
      <Button color="#FF6F61">Submit</Button>
    </section>
    <p>Dev Remarks</p>
  </aside>
);

export default SidePanel;
