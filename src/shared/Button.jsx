// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ButtonStyle = css``;

const Button = props => {
  const { children, defaultStyle, ...rest } = props;
  return (
    <button
      css={css`
        background: ${defaultStyle ? "#ff6f61" : "white"};
        padding: 0.4em 0.5em;
        border: none;
        border-radius: 0.6em;
        color: ${defaultStyle ? "white" : "#ff6f61"};
        cursor: pointer;
      `}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  defaultStyle: true
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  defaultStyle: PropTypes.bool
};

export default Button;
