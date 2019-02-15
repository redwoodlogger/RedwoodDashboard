// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { IoMdArrowDroprightCircle } from "react-icons/io";

const ActionCellRenderer = () => (
  <Link
    to="/playback"
    css={css`
      color: red;
      font-size: 1.5em;
      cursor: pointer;
    `}
  >
    <IoMdArrowDroprightCircle />
  </Link>
);

export default ActionCellRenderer;
