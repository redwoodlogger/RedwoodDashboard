// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SystemDropdown extends Component {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  onClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ open: false });
    }
  }

  render() {
    const { systems, currentSystem } = this.props;
    const { open } = this.state;
    return (
      <div
        css={css`
          position: relative;
          display: flex;
          align-items: center;
          margin: 0 0 0.5em 0;
        `}
        ref={this.setWrapperRef}
      >
        {/* eslint-disable-next-line */}
        <p
          onClick={this.onClick}
          css={css`
            font-size: 1.3rem;
            margin-right: 0.3em;
            cursor: pointer;
          `}
        >
          {currentSystem}
        </p>
        <FontAwesomeIcon
          onClick={this.onClick}
          css={css`
            cursor: pointer;
          `}
          icon="angle-down"
        />
        <div
          css={css`
            display: ${open ? "block" : "none"};
            position: absolute;
            top: 1.5em;
            height: auto;
            width: 100%;
            min-width: 10em;
            background: white;
            border: 1px solid #e5e5e5;
            z-index: 1;
            border-radius: 0.5em;
            overflow: hidden;
            box-shadow: 0px 8px 15px 5px rgba(200, 200, 200, 0.5);
          `}
        >
          <ul
            css={css`
              list-style-type: none;
            `}
          >
            {systems.map((system, index) => (
              <li
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                css={css`
                  text-decoration: none;
                  color: #808080;
                  cursor: pointer;
                  font-family: "Source Sans Pro";
                  padding: 0.5em;

                  :hover {
                    color: #fff;
                    background-color: #ff6f61;
                  }

                  :active {
                    color: #ff6f61;
                    background-color: white;
                    font-weight: bold;
                  }
                `}
                type="button"
              >
                {system}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

SystemDropdown.propTypes = {
  systems: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentSystem: PropTypes.string.isRequired
};

export default SystemDropdown;
