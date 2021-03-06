// eslint-disable-next-line no-unused-vars
import { React, Component } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Button from "../shared/Button";
import Hashtags from "./Hashtags";
import Comments from "./Comments";

const CommentBox = ({
  eventStateCommentInput,
  eventHandleChange,
  eventHandleSubmit
}) => (
  <section
    css={css`
      background: white;
      height: 12em;
      border-top: 1px solid #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <textarea
        value={eventStateCommentInput}
        onChange={eventHandleChange}
        css={css`
          border: 1px solid #e5e5e5;
          width: 24em;
          height: 9em;
          border-radius: 0.5em;
          margin-bottom: 0.4em;
          padding: 0.5em;
          resize: none;
        `}
      />
      <div
        css={css`
          display: flex;
          justify-content: end;
        `}
      >
        <Button onClick={eventHandleSubmit}>Submit</Button>
      </div>
    </div>
  </section>
);

CommentBox.propTypes = {
  eventStateCommentInput: PropTypes.string.isRequired,
  eventHandleChange: PropTypes.func.isRequired,
  eventHandleSubmit: PropTypes.func.isRequired
};

const Details = props => {
  const { children } = props;
  return (
    <section
      css={css`
        padding: 1em 4em 0 2em;
        overflow-y: scroll;
        flex: 1;
      `}
    >
      {children}
    </section>
  );
};

Details.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

class RightPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentInput: ""
    };
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      commentInput: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { commentInput } = this.state;
    if (commentInput) {
      this.setState(prevState => ({
        comments: [...prevState.comments, prevState.commentInput],
        commentInput: ""
      }));
    }
  };

  render() {
    const { commentInput, comments } = this.state;
    const { currentRow } = this.props;
    console.log(currentRow);
    let hashtags = [];
    if (currentRow) {
      let {
        obj: { colours, tags }
      } = currentRow;
      tags = tags.split(";");
      tags = tags.map(tag => tag.trim());
      colours = colours.split(";");
      hashtags = tags.map((tag, index) => ({ tag, color: colours[index] }));
    }
    return (
      <aside
        css={css`
          background: #f6f6f6;
          width: 25em;
          display: flex;
          flex-direction: column;
          border-left: 1px solid #e5e5e5;
          font-family: "Lato";
        `}
      >
        <Details>
          <p
            css={css`
              margin-bottom: 1em;
            `}
          >
            Bug Report #123459
          </p>
          <Hashtags hashtags={hashtags} />
          <Comments commentList={comments} />
        </Details>
        <CommentBox
          eventStateCommentInput={commentInput}
          eventHandleChange={this.handleChange}
          eventHandleSubmit={this.handleSubmit}
        />
      </aside>
    );
  }
}
  
  
RightPanel.defaultProps = {
  currentRow: undefined
};

RightPanel.propTypes = {
  currentRow: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    devRemarkCount: PropTypes.number.isRequired,
    obj: PropTypes.shape({
      colours: PropTypes.string,
      tags: PropTypes.string
    }),
    submitter: PropTypes.string.isRequired,
    tags: PropTypes.string
  })
};

export default RightPanel;
