// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Hashtag from "../shared/Hashtag";
import { Group, GroupTitle } from "./shared/RightPanelGroup";
import Button from "../shared/Button";

const Hashtags = () => (
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
      <Hashtag>#hashtag</Hashtag>
      <Hashtag>#longerhashtag</Hashtag>
      <Hashtag>#shorttag</Hashtag>
      <Hashtag>#superlonghashtag</Hashtag>
      <Hashtag>#hashhash</Hashtag>
      <Hashtag>#tagtag</Hashtag>
    </div>
    <input
      css={css`
        border: 1px solid #cccccc;
        border-radius: 0.2em;
        width: 100%;
        height: 2.2em;
        margin-top: 0.5em;
        margin-left: 0.5em;
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

export default Hashtags;
