// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Button = props => {
  const { children, defaultStyle, ...rest } = props;
  return (
    <button
      css={css`
        background: ${defaultStyle ? "#ff6f61" : "white"};
        padding: 0.4em 0.5em;
        border: 1px solid transparent;
        border-radius: 0.6em;
        color: ${defaultStyle ? "white" : "#ff6f61"};
        cursor: pointer;
        font-family: "Source Sans Pro";

        :hover {
          background: ${defaultStyle ? "#ff9d91" : "#fff"};
          color: ${defaultStyle ? "white" : "#ff6f61"};
          border: ${defaultStyle
            ? "1px solid transparent"
            : "1px solid #ff9d91"};
        }

        :active {
          background: ${defaultStyle ? "none" : "#ff9d91"};
          color: ${defaultStyle ? "#ff6f61" : "white"};
          border: 1px solid #ff9d91;
        }
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string
  ]).isRequired,
  defaultStyle: PropTypes.bool
};

export default Button;
