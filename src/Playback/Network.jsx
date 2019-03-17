// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Group, GroupTitle } from "./shared/LeftPanelGroup";
import NetworkItem from "./NetworkItem";

const Network = props => (
  <Group
    css={css`
      flex: 1;
    `}
  >
    <GroupTitle>Network Data</GroupTitle>
     <Group
          css={css`
            margin-top: 10px;
            border: solid #e5e5e5 1px;
            border-radius: 8px;
            width: 100%;
            height: 160px;
            overflow: auto;
            padding: 5px;
          `}
        >
          {props.networkMsges.map((msg, index) => (
            <NetworkItem msg={msg.msg} index={index}
            />
          ))}
        </Group>
  </Group>
);

export default Network;
