import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { Group, GroupTitle } from "./shared/LeftPanelGroup";

const UserActionCount = props => {
  const { children } = props;
  return (
    <p
      css={css`
        margin-right: 15px;
        font-weight: 600;
      `}
    >
      {children}
    </p>
  );
};

UserActionCount.propTypes = {
  children: PropTypes.string.isRequired
};

const UserActionEvent = props => {
  const { children } = props;
  return <p>{children}</p>;
};

UserActionEvent.propTypes = {
  children: PropTypes.string.isRequired
};

const UserActionElement = props => {
  const { children } = props;
  return (
    <p
      css={css`
        color: #ff6f61;
      `}
    >
      <span
        css={css`
          color: #555;
        `}
      >
        on element &nbsp;
      </span>
      {children}
    </p>
  );
};

UserActionElement.propTypes = {
  children: PropTypes.string.isRequired
};

const UserAction = props => {
  const { count, event, element } = props;
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding-bottom: 5px;
        border-bottom: solid 1px #e5e5e5;
      `}
    >
      <UserActionCount>{count}</UserActionCount>
      <div
        css={css`
          color: #555;
        `}
      >
        <UserActionEvent>{event}</UserActionEvent>
        <UserActionElement>{element}</UserActionElement>
      </div>
    </div>
  );
};

UserAction.propTypes = {
  count: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired
};

const UserActions = () => (
  <Group
    css={css`
      flex: 1;
      padding: 15px;
    `}
  >
    <GroupTitle>User Actions</GroupTitle>
    <Group
      css={css`
        margin-top: 10px;
        padding: 10px 10px 0 10px;
        border: solid #e5e5e5 1px;
        border-radius: 8px;
        width: 90%;
        height: 300px;
        overflow: auto;
      `}
    >
      <UserAction count="1" event="MOUSE CLICK" element="div-header-2" />
      <UserAction count="2" event="MOUSE CLICK" element="button-submit" />
      <UserAction count="3" event="MOUSE CLICK" element="video-desc" />
      <UserAction count="4" event="MOUSE CLICK" element="div-title" />
      <UserAction count="5" event="KEY RELEASE" element="div-username" />
      <UserAction count="6" event="KEY RELEASE" element="div-password" />
      <UserAction count="7" event="MOUSE CLICK" element="button-submit" />
    </Group>
  </Group>
);

export default UserActions;
