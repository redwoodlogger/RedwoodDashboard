// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import UserBubble from "../shared/UserBubble";
import { Group, GroupTitle } from "./shared/RightPanelGroup";

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

CommentUser.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
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

const Comments = () => (
  <Group>
    <GroupTitle>Dev Remarks</GroupTitle>
    <Comment user="Mervyn" comment="Hello there" date="17 February 2019" />
    <Comment user="Mervyn" comment="Hello there" date="17 February 2019" />
    <Comment user="Mervyn" comment="Hello there" date="17 February 2019" />
    <Comment user="Mervyn" comment="Hello there" date="17 February 2019" />
    <Comment user="Mervyn" comment="Hello there" date="17 February 2019" />
  </Group>
);

export default Comments;
