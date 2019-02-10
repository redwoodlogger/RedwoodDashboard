// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Button from "../shared/Button";
import Hashtag from "../shared/Hashtag";
import UserBubble from "../shared/UserBubble";
import { Group, GroupTitle } from "./RightPanelGroup";

const CommentUser = props => {
  const { children } = props;
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        margin-bottom: 0.5em;
      `}
    >
      {children}
    </div>
  );
};

const CommentUsername = props => {
  const { children } = props;
  return <p>{children}</p>;
};

CommentUsername.propTypes = {
  children: PropTypes.string.isRequired
};

const CommentContent = props => {
  const { children } = props;
  return <p>{children}</p>;
};

CommentContent.propTypes = {
  children: PropTypes.string.isRequired
};

const CommentDate = props => {
  const { children } = props;
  return (
    <p
      css={css`
        font-size: 0.8em;
        color: #888888;
        margin-top: 0.5em;
      `}
    >
      {children}
    </p>
  );
};

CommentDate.propTypes = {
  children: PropTypes.string.isRequired
};

const Comment = props => {
  const { user, comment, date } = props;
  return (
    <div
      css={css`
        background: white;
        border: 1px solid #e5e5e5;
        border-radius: 0.5em;
        padding: 1em;
        margin-bottom: 0.5em;
      `}
    >
      <CommentUser>
        <UserBubble
          css={css`
            margin-right: 0.5em;
          `}
        >
          {user}
        </UserBubble>
        <CommentUsername>{user}</CommentUsername>
      </CommentUser>
      <CommentContent>{comment}</CommentContent>
      <CommentDate>{date}</CommentDate>
    </div>
  );
};

Comment.propTypes = {
  user: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

const CommentBox = () => (
  <section
    css={css`
      background: white;
      height: 12em;
      border-top: 1px solid #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <textarea
        css={css`
          border: 1px solid #e5e5e5;
          width: 24em;
          height: 9em;
          border-radius: 0.5em;
          margin-bottom: 0.4em;
          padding: 0.5em;
          resize: none;
        `}
      />
      <div
        css={css`
          display: flex;
          justify-content: end;
        `}
      >
        <Button>Submit</Button>
      </div>
    </div>
  </section>
);

const Details = props => {
  const { children } = props;
  return (
    <section
      css={css`
        padding: 1em 4em 0 2em;
        overflow-y: scroll;
        flex: 1;
      `}
    >
      {children}
    </section>
  );
};

const RightPanel = () => (
  <aside
    css={css`
      background: #f6f6f6;
      width: 25em;
      display: flex;
      flex-direction: column;
      border-left: 1px solid #e5e5e5;
    `}
  >
    <Details>
      <p
        css={css`
          margin-bottom: 1em;
        `}
      >
        Bug Report #123459
      </p>
      <Group>
        <GroupTitle>Assigned Tags</GroupTitle>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
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
      <Group>
        <GroupTitle>Dev Remarks</GroupTitle>
        <Comment user="Mervyn" comment="Hello there" date="17 February 2019" />
        <Comment user="Mervyn" comment="Hello there" date="17 February 2019" />
        <Comment user="Mervyn" comment="Hello there" date="17 February 2019" />
        <Comment user="Mervyn" comment="Hello there" date="17 February 2019" />
        <Comment user="Mervyn" comment="Hello there" date="17 February 2019" />
      </Group>
    </Details>
    <CommentBox />
  </aside>
);

export default RightPanel;
