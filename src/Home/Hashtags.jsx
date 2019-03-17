// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Hashtag from "../shared/Hashtag";
import { Group, GroupTitle } from "./shared/RightPanelGroup";
import Button from "../shared/Button";

const Hashtags = props => {
  const { hashtags } = props;
  return (
    <Group>
      <GroupTitle>Assigned Tags</GroupTitle>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          font-family: "Sarabun";
          font-weight: bold;
        `}
      >
        {hashtags.map((hashtag, index) => {
          const { tag, color } = hashtag;
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Hashtag key={index} color={color}>
              {tag}
            </Hashtag>
          );
        })}
      </div>
      <input
        css={css`
          border: 1px solid #cccccc;
          border-radius: 0.2em;
          width: 100%;
          height: 2.2em;
          margin-top: 0.5em;
          padding-left: 0.3em;
          font-family: "Source Sans Pro";
        `}
        placeholder="Add a tag"
      />
      <div
        css={css`
          display: flex;
          justify-content: end;
        `}
      >
        <Button
          css={css`
            margin-top: 0.3em;
            margin-left: auto;
          `}
        >
          Add tag
        </Button>
      </div>
    </Group>
  );
};

Hashtags.defaultProps = {
  hashtags: []
};

Hashtags.propTypes = {
  hashtags: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  )
};

export default Hashtags;
