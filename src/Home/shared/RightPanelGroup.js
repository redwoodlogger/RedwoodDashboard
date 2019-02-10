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
        margin-bottom: 2em;
      `}
    >
      {children}
    </section>
  );
};

export const GroupTitle = props => {
  const { children } = props;
  return (
    <p
      css={css`
        color: #949494;
        margin: 0.5em 0;
      `}
    >
      {children}
    </p>
  );
};

GroupTitle.propTypes = {
  children: PropTypes.string.isRequired
};
