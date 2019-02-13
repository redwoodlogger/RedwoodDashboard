import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import UserActionItems from "./UserActionItems";
import { Group, GroupTitle } from "./shared/LeftPanelGroup";

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
        border: solid #e5e5e5 1px;
        border-radius: 8px;
        width: 90%;
        height: 250px;
        overflow: auto;
      `}
    >
      <UserActionItems count="1" event="MOUSE CLICK" element="div-header-2" />
      <UserActionItems count="2" event="MOUSE CLICK" element="button-submit" />
      <UserActionItems
        count="3"
        event="MOUSE CLICK"
        element="div-header-title"
      />
      <UserActionItems
        count="4"
        event="KEY RELEASE"
        element="div-remarks-textarea"
      />
      <UserActionItems count="5" event="MOUSE CLICK" element="div-header-4" />
      <UserActionItems
        count="6"
        event="KEY RELEASE"
        element="div-p-input-comments"
      />
      <UserActionItems
        count="7"
        event="MOUSE CLICK"
        element="div-header-title"
      />
      <UserActionItems
        count="8"
        event="KEY RELEASE"
        element="div-remarks-input"
      />
    </Group>
  </Group>
);

export default UserActions;
