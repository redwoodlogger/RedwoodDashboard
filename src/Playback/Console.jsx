// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Group, GroupTitle } from "./shared/LeftPanelGroup";
import ConsoleItem from "./ConsoleItem.jsx";

const Console = props => (
  <div
    css={css`
      background: white;
      border-top: 1px solid #e5e5e5;
      font-family: "Source Sans Pro";
      display: flex;
      flex-direction: column;
      flex: 1;
    `}
  >
    <div
      css={css`
        padding: 15px 15px 5px 15px;
      `}
    >
      <GroupTitle>Console</GroupTitle>
    </div>
    <div
      css={css`
        height: 795px;
        overflow-y: auto;
        overflow-x: hidden;
        border-top: 1px solid #e5e5e5;
        margin-top: 5px;
      `}
    >
      {props.msges.map(msg => (
        <ConsoleItem msg={msg.msg} lineInfo={msg.lineInfo} type={msg.type} />
      ))}
    </div>
  </div>
);

export default Console;
