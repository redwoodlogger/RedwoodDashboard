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
      {...props}
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
  return (
    <p
      css={css`
        font-weight: bold;
        color: #333333;
      `}
      {...props}
    >
      {children}
    </p>
  );
};

CommentUsername.propTypes = {
  children: PropTypes.string.isRequired
};

const CommentContent = props => {
  const { children } = props;
  return (
    <p
      css={css`
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: normal;
        color: #5b5b5b;
        font-size: 0.9em;
      `}
      {...props}
    >
      {children}
    </p>
  );
};

CommentContent.propTypes = {
  children: PropTypes.string.isRequired
};

const CommentDate = props => {
  const { children } = props;
  return (
    <p
      css={css`
        font-size: 0.7em;
        color: #888;
        margin-top: 0.5em;
        text-align: right;
      `}
      {...props}
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
      {...props}
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

const Comments = ({ commentList }) => (
  <Group>
    <GroupTitle>Dev Remarks</GroupTitle>
    <Comment
      user="Mervyn"
      comment="Mist enveloped the ship three hours out from port."
      date="17 February 2019"
    />
    <Comment
      user="Mervyn"
      comment="The sky was cloudless and of a deep dark blue."
      date="17 February 2019"
    />
    <Comment
      user="Mervyn"
      comment="A red flare silhouetted the jagged edge of a wing. A shining crescent far beneath the flying vessel."
      date="17 February 2019"
    />
    {commentList.map((comments, index) => (
      <Comment
        key={comments + index.toString()}
        user="Mervyn"
        comment={comments}
        date="17 February 2019"
      />
    ))}
  </Group>
);

Comments.propTypes = {
  commentList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Comments;
