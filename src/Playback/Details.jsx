import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faDesktop,
  faClipboardList,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import { Group, GroupTitle } from "./shared/LeftPanelGroup";

const iconStyle = css`
  width: 20px;
  margin: 5px 10px 0 0;
  display: inline-block;
  color: black;
`;

const Details = () => (
  <Group
    css={css`
      padding: 15px;
    `}
  >
    <GroupTitle>Details</GroupTitle>
    <div
      css={css`
        margin-top: 5px;
        font-size: 12pt;
        color: #555;
      `}
    >
      <p>
        <div
          css={css`
            ${iconStyle}
          `}
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
        Ash Ketchum
      </p>
      <p>
        <div
          css={css`
            ${iconStyle}
          `}
        >
          <FontAwesomeIcon icon={faDesktop} />
        </div>
        Bug Report #123456
      </p>
      <p>
        <div
          css={css`
            ${iconStyle}
          `}
        >
          <FontAwesomeIcon icon={faClipboardList} />
        </div>
        SystemOne
      </p>
      <p>
        <div
          css={css`
            ${iconStyle}
          `}
        >
          <FontAwesomeIcon icon={faClock} />
        </div>
        02 December 2018, 3:21 PM (GMT+8)
      </p>
    </div>
  </Group>
);

export default Details;
