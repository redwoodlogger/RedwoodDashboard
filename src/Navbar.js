import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

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
      <div
        css={css`
          width: 2em;
          height: 2em;
          background: #4d80cc;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-right: 0.5em;
          color: white;
        `}
      >
        {username[0]}
      </div>
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
      background-color: #274c77;
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
