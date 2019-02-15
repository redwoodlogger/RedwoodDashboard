// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

const UserActionItems = props => {
  const { order, event, element, isSelected, setActive } = props;
  return (
    <div>
      <button
        onClick={() => setActive(order)}
        type="button"
        css={css`
          display: flex;
          font-family: "Source Sans Pro";
          align-items: center;
          width: 100%;

          background: ${isSelected ? "#efefef" : "transparent"};
          border: none;
          border-bottom: solid 1px #e5e5e5;
          padding: 10px;

          :hover {
            cursor: pointer;
            background: ${isSelected ? "" : "#fcfcfc"};
          }

          :focus {
            outline: 0;
          }
        `}
      >
        <p
          css={css`
            margin-left: 5px;
            margin-right: 15px;
            font-weight: 600;
          `}
        >
          {order}
        </p>
        <div
          css={css`
            color: #555;
            text-align: left;
            font-size: 11pt;
          `}
        >
          <p>{event}</p>
          <p>
            on element &nbsp;
            <span
              css={css`
                color: #ff6f61;
              `}
            >
              {element}
            </span>
          </p>
        </div>
      </button>
    </div>
  );
};

UserActionItems.propTypes = {
  order: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
};

export default UserActionItems;
