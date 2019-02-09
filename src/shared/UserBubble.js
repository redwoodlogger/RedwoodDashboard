// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

const UserBubble = props => {
  const { children: name } = props;
  return (
    <div
      css={css`
        height: 2em;
        width: 2em;
        background: #999ddb;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      `}
      {...props}
    >
      {name[0]}
    </div>
  );
};

UserBubble.propTypes = {
  children: PropTypes.string.isRequired
};

export default UserBubble;
