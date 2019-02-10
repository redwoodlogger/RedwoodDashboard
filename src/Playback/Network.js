// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Group, GroupTitle } from "./shared/LeftPanelGroup";

const Network = () => (
  <Group
    css={css`
      flex: 1;
    `}
  >
    <GroupTitle>Network</GroupTitle>
  </Group>
);

export default Network;
