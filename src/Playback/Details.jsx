// eslint-disable-next-line no-unused-vars
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

import PropTypes from "prop-types";
import { Group, GroupTitle } from "./shared/LeftPanelGroup";

const details = css`
  display: flex;
  flex: 1;
  algin-items: center;
`;

const iconStyle = css`
  width: 20px;
  align-content: flex-end;
  margin: 0 10px 5px 0;
`;

const UserDetail = props => {
  const { user, report, system, date } = props;

  return (
    <div
      css={css`
        margin-top: 5px;
        font-size: 12pt;
        color: #555;
      `}
    >
      <div
        css={css`
          ${details}
        `}
      >
        <div
          css={css`
            ${iconStyle}
          `}
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
        <p>{user}</p>
      </div>

      <div
        css={css`
          ${details}
        `}
      >
        <div
          css={css`
            ${iconStyle}
          `}
        >
          <FontAwesomeIcon icon={faDesktop} />
        </div>
        <p>{report}</p>
      </div>

      <div
        css={css`
          ${details}
        `}
      >
        <div
          css={css`
            ${iconStyle}
          `}
        >
          <FontAwesomeIcon icon={faClipboardList} />
        </div>
        <p>{system}</p>
      </div>

      <div
        css={css`
          ${details}
        `}
      >
        <div
          css={css`
            ${iconStyle}
          `}
        >
          <FontAwesomeIcon icon={faClock} />
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
};

UserDetail.propTypes = {
  user: PropTypes.string.isRequired,
  report: PropTypes.string.isRequired,
  system: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

const Details = () => (
  <Group
    css={css`
      padding: 15px;
    `}
  >
    <GroupTitle>Details</GroupTitle>
    <div
      css={css`
        margin-top: 10px;
        font-size: 12pt;
        color: #555;
      `}
    />
    <UserDetail
      user="Ash Ketchum"
      report="Bug report #123456"
      system="SystemOne"
      date="02 December 2018 3:21 PM (GMT+8)"
    />
  </Group>
);

export default Details;
