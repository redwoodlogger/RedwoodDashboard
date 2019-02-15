import React from "react";
import PropTypes from "prop-types";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const TagsCellRenderer = props => {
  const { value } = props;
  const tags = value.tags.split(";");
  const colours = value.obj.colours.split(";");
  const tagColourPairs = {};
  tags.forEach((tag, index) => {
    tagColourPairs[tag.trim()] = colours[index];
  });

  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        flex-wrap: wrap;
      `}
    >
      {Object.keys(tagColourPairs).map(tag => (
        <div
          key={tag}
          css={css`
            background-color: ${tagColourPairs[tag]};
            color: #ffffff;
            font-family: "Sarabun";
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
  // value: PropTypes.string.isRequired
  value: PropTypes.shape({
    tags: PropTypes.string
  }).isRequired
};

export default TagsCellRenderer;
