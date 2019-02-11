import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { IoMdArrowDroprightCircle } from "react-icons/io";

const ActionCellRenderer = props => {
  const { value } = props;
  return (
    <Link
      to={`/view/${value}`}
      css={css`
        color: red;
        font-size: 1.5em;
        cursor: pointer;
      `}
    >
      <IoMdArrowDroprightCircle />
    </Link>
  );
};

ActionCellRenderer.propTypes = {
  value: PropTypes.number.isRequired
};

export default ActionCellRenderer;
