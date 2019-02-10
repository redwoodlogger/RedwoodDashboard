// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

export const Group = props => {
  const { children } = props;
  return (
    <section
      css={css`
        background: white;
        border-top: 1px solid #e5e5e5;
      `}
      {...props}
    >
      {children}
    </section>
  );
};

export const GroupTitle = props => {
  const { children } = props;
  return <p>{children}</p>;
};

GroupTitle.propTypes = {
  children: PropTypes.string.isRequired
};
