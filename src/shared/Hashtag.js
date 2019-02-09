// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

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
        cursor: pointer;
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

export default Hashtag;
