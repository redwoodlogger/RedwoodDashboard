// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import UserActionItems from "./UserActionItems";
import { Group, GroupTitle } from "./shared/LeftPanelGroup";

const Actions = [
  { order: "1", event: "MOUSE CLICK", element: "div-header-2" },
  { order: "2", event: "MOUSE CLICK", element: "div-remarks-textarea" },
  { order: "3", event: "KEY RELEASE", element: "div-header-title" },
  { order: "4", event: "KEY RELEASE", element: "video-desc-selected" },
  { order: "5", event: "MOUSE CLICK", element: "div-input-checkbox" },
  { order: "6", event: "KEY RELEASE", element: "div-section-group-holder" },
  { order: "7", event: "MOUSE CLICK", element: "div-submit-online-option" }
];

class UserActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeActionIndex: null
    };
  }

  setActiveAction = index => {
    this.setState({
      activeActionIndex: index
    });
  };

  render() {
    const { activeActionIndex } = this.state;
    return (
      <Group
        css={css`
          flex: 1;
          padding: 15px;
        `}
      >
        <GroupTitle>User Actions</GroupTitle>
        <Group
          css={css`
            margin-top: 10px;
            border: solid #e5e5e5 1px;
            border-radius: 8px;
            width: 90%;
            height: 300px;
            overflow: auto;
          `}
        >
          {Actions.map(action => (
            <UserActionItems
              key={action.order}
              setActive={this.setActiveAction}
              isSelected={action.order === activeActionIndex}
              order={action.order}
              event={action.event}
              element={action.element}
            />
          ))}
        </Group>
      </Group>
    );
  }
}

export default UserActions;
