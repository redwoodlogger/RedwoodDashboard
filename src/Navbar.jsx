// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import UserBubble from "./shared/UserBubble";

const UserAccount = props => {
  const { children: username } = props;
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        margin-right: 4em;
      `}
    >
      <UserBubble
        css={css`
          margin-right: 0.5em;
          background: #4d80cc;
        `}
      >
        {username[0]}
      </UserBubble>
      <p
        css={css`
          color: white;
        `}
      >
        {username}
      </p>
    </div>
  );
};

UserAccount.propTypes = {
  children: PropTypes.string.isRequired
};

const Logo = props => {
  const { children } = props;
  return (
    <p
      css={css`
        color: white;
        margin: 0 0 0 4em;
      `}
    >
      {children}
    </p>
  );
};

Logo.propTypes = {
  children: PropTypes.string.isRequired
};

const Navbar = () => (
  <nav
    css={css`
      background-color: #ff6f61;
      height: 3.3em;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  >
    <Logo>Redwood</Logo>
    <UserAccount>Banana Cat</UserAccount>
  </nav>
);

export default Navbar;
