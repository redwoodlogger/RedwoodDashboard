// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

class UserActionItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    const { count, event, element, isSelected, setActive } = this.props;
    return (
      <div>
        <button
          onClick={setActive}
          type="button"
          css={css`
            display: flex;
            font-family: "Source Sans Pro";
            align-items: center;
            width: 100%;
            height: 50px;
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
            {count}
          </p>
          <div
            css={css`
              color: #555;
              text-align: left;
              font-size: 11pt;
            `}
          >
            <p>{event}</p>
            <p
              css={css`
                color: #ff6f61;
              `}
            >
              <span
                css={css`
                  color: #555;
                `}
              >
                on element &nbsp;
              </span>
              {element}
            </p>
          </div>
        </button>
      </div>
    );
  }
}

UserActionItems.propTypes = {
  count: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired
};

export default UserActionItems;
