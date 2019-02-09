// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Button = props => {
  const { children, active } = props;
  return (
    <button
      css={css`
        background: ${active ? "#ff6f61" : "white"};
        padding: 0.4em 0.5em;
        border: none;
        border-radius: 0.6em;
        color: ${active ? "white" : "#ff6f61"};
        cursor: pointer;
      `}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  active: true
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default Button;
