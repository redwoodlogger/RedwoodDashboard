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
    const { count, event, element } = this.props;
    return (
      <div>
        <button
          onClick={this.toggleActive}
          type="button"
          css={css`
            display: flex;
            align-items: center;
            width: 100%;
            height: 50px;
            background: ${this.state.isActive ? "#efefef" : "transparent"};
            border: none;
            border-bottom: solid 1px #e5e5e5;
            padding: 10px;

            :hover {
              cursor: pointer;
              background: ${this.state.isActive ? "" : "#fcfcfc"};
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
