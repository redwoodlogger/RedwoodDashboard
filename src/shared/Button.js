// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Button = props => {
  const { children } = props;
  return (
    <button
      css={css`
        padding: 0.4em 0.5em;
        border: none;
        border-radius: 0.6em;
        color: white;
      `}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired
};

export default Button;
