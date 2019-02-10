// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Group, GroupTitle } from "./shared/LeftPanelGroup";

const UserActions = () => (
  <Group
    css={css`
      flex: 1;
    `}
  >
    <GroupTitle>User Actions</GroupTitle>
  </Group>
);

export default UserActions;
