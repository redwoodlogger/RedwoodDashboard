// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import UserActionItems from "./UserActionItems";
import { Group, GroupTitle } from "./shared/LeftPanelGroup";

const Actions = [
  { count: "1", event: "MOUSE CLICK", element: "div-header-2" },
  { count: "2", event: "MOUSE CLICK", element: "div-remarks-textarea" },
  { count: "3", event: "KEY RELEASE", element: "div-header-title" },
  { count: "4", event: "KEY RELEASE", element: "video-desc-selected" },
  { count: "5", event: "MOUSE CLICK", element: "div-input-checkbox" },
  { count: "6", event: "KEY RELEASE", element: "div-section-group-holder" },
  { count: "7", event: "MOUSE CLICK", element: "div-submit-online-option" }
];

class UserActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeActionIndex: null
    };
  }

  setActiveAction = index => () => {
    this.setState({
      activeActionIndex: index
    });
  };

  render() {
    return (
      <div>
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
              height: 250px;
              overflow: auto;
            `}
          >
            {Actions.map((action, index) => (
              <UserActionItems
                key={action.count}
                setActive={this.setActiveAction(index)}
                isSelected={index === this.state.activeActionIndex}
                count={action.count}
                event={action.event}
                element={action.element}
              />
            ))}
            ;
          </Group>
        </Group>
      </div>
    );
  }
}

export default UserActions;
