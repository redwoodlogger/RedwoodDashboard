// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

const ConsoleItem = props => {
  const { msg, type, lineInfo } = props;
  return (
    <div
      css={css`
        padding: 10px 10px 10px 20px;
        border-bottom: 1px solid #e5e5e5;
        ${type === "error" ? "background-color: #fff0f0; color: #ff5555;" : ""}
      `}
    >
      {msg}
      <div
        css={css`
          float: right;
          text-decoration: underline;
        `}
      >
        {lineInfo}
      </div>
    </div>
  );
};

ConsoleItem.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  lineInfo: PropTypes.string.isRequired
};

export default ConsoleItem;
