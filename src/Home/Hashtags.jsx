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
      <Hashtag
        css={css`
          background: #e15239;
        `}
      >
        #hashtag
      </Hashtag>
      <Hashtag
        css={css`
          background: #f8c169;
        `}
      >
        #longerhashtag
      </Hashtag>
      <Hashtag
        css={css`
          background: #dba8cd;
        `}
      >
        #shorttag
      </Hashtag>
      <Hashtag
        css={css`
          background: #8ebc4f;
        `}
      >
        #superlonghashtag
      </Hashtag>
      <Hashtag
        css={css`
          background: #185fad;
        `}
      >
        #hashhash
      </Hashtag>
      <Hashtag
        css={css`
          background: #bf6ebf;
        `}
      >
        #tagtag
      </Hashtag>
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

export default Hashtags;
