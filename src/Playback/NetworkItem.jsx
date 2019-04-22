// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

const NetworkItem = props => {
  const { msg, index } = props;
  return (
    <div
      css={css`
        padding: 10px 10px 10px 20px;
        border-bottom: 1px solid #e5e5e5;
        white-space: pre-line;
        word-break: break-word;
        display: flex;
      `}
    >
      <div
        css={css`
          padding-right: 10px;
          font-weight: 900;
        `}
      >
        {index}
      </div>
      <div>{msg}</div>
    </div>
  );
};

NetworkItem.propTypes = {
  msg: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default NetworkItem;
