// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          font-family: "Lato";
          font-weight: bold;
        `}
      >
        {username[0]}
      </UserBubble>
      <p
        css={css`
          color: white;
          font-family: "Lato";
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
        font-family: "Sarabun";
        font-weight: bold;
        letter-spacing: 0.5em;
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
    <Logo>REDWOOD</Logo>
    <UserAccount>Banana Cat</UserAccount>
  </nav>
);

export default Navbar;
