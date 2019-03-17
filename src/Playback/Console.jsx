// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Group, GroupTitle } from "./shared/LeftPanelGroup";

const Console = () => (
  <Group
    css={css`
      height: 12em;
    `}
  >
    <GroupTitle>Console</GroupTitle>
  </Group>
);

export default Console;
