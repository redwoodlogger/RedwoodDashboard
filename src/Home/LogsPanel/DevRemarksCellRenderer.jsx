import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { IoIosArrowForward } from "react-icons/io";

const DevRemarksCellRenderer = props => {
  const { value } = props;
  return (
    <Link
      to={`/comments/${value.id}`}
      css={css`
        color: teal;
        font-size: 1.5em;
        cursor: pointer;
      `}
    >
      <div
        css={css`
          border: 0.625em solid teal;
          font-size: 1em;
        `}
      >
        {`3${/* value.devRemarkCount */ " "}`}
      </div>
      <IoIosArrowForward />
    </Link>
  );
};

DevRemarksCellRenderer.propTypes = {
  value: PropTypes.shape({
    devRemarkCount: PropTypes.number,
    id: PropTypes.number
  }).isRequired
};

export default DevRemarksCellRenderer;
