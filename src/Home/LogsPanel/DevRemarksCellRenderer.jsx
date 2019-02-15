import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { IoIosArrowForward } from "react-icons/io";

const DevRemarksCellRenderer = props => {
  const { value } = props;
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin: auto 0;
        margin-top: 0.375em;
      `}
    >
      <div
        css={css`
          color: teal;
          font-size: 1.5em;
          text-decoration: none;
          display: flex;
        `}
      >
        <div
          css={css`
            border: 0.0625em solid teal;
            font-size: 0.65em;
            width: 1.5em;
            height: 1.5em;
            border-radius: 0.75em;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          {value.devRemarkCount}
        </div>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

DevRemarksCellRenderer.propTypes = {
  value: PropTypes.shape({
    devRemarkCount: PropTypes.number,
    id: PropTypes.number
  }).isRequired
};

export default DevRemarksCellRenderer;
