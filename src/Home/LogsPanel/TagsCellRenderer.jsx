import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const TagsCellRenderer = props => {
  const { value } = props;
  let tags = value.split(";");
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      {tags.map(tag => (
        <div
          key={tag}
          css={css`
            background-color: #bf6ebf;
            width: auto;
            border-radius: 0.4em;
            margin-right: 0.6em;
            padding-left: 0.4em;
            padding-right: 0.4em;
          `}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

TagsCellRenderer.propTypes = {
  value: PropTypes.number.isRequired
};

export default TagsCellRenderer;
