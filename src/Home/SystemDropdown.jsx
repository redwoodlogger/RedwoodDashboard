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
            height: 10em;
            width: 10em;
            background: white;
            border: 1px solid #e5e5e5;
            border-radius: 0.5em;
            z-index: 1;
          `}
        >
          <ul
            css={css`
              list-style-type: none;
              margin: 0;
              padding: 0;
            `}
          >
            {systems.map((system, i) => (
              <li
                key={i}
                css={css`
                  margin: 0.5em;
                  text-decoration: none;
                  color: #ff6f61;
                  cursor: pointer;
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
