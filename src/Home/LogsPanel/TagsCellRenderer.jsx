import React from "react";
import PropTypes from "prop-types";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const TagsCellRenderer = props => {
  const { value } = props;
  const tags = value.split(";");
  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        flex-wrap: wrap;
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
            margin-top: 0.2em;
            margin-bottom: 0.2em;
          `}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

TagsCellRenderer.propTypes = {
  value: PropTypes.string.isRequired
};

export default TagsCellRenderer;
