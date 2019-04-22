// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";

import rrwebPlayer from "rrweb-player";
import Navbar from "../Navbar";
import Button from "../shared/Button";
import Details from "./Details";
import UserActions from "./UserActions";
import Network from "./Network";
import Console from "./Console";

const jsonImport = require("../../replay.json");

const PlaybackPanel = props => {
  const { children } = props;
  return (
    <div
      css={css`
        flex: 1;
        display: flex;
      `}
    >
      {children}
    </div>
  );
};

PlaybackPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const LeftPanel = props => (
  <section
    css={css`
      width: 22em;
      border-right: 1px solid #e5e5e5;
      display: flex;
      flex-direction: column;
    `}
  >
    <div>
      <Button
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px;
          margin: 5px 0 5px 15px;
          width: 70px;
          font-size: 11pt;
          font-weight: 500;
          border-radius: 10px;

          :focus {
            outline: 0;
          }
        `}
      >
        <FontAwesomeIcon icon={faLessThan} />
        &nbsp;&nbsp;Back
      </Button>
    </div>
    <Details />
    <UserActions />
    <Console msges={msges.filter(msg => msg.timeStamp < props.currentTime)} />
  </section>
);

const MainPanel = props => (
  <section
    css={css`
      flex: 1;
      display: flex;
      flex-direction: column;
    `}
  >
    <div
      css={css`
        flex: 1;
      `}
    >
      <div
        id="viewer"
        css={css`
          height: 100%;
        `}
      />
    </div>
    <Network
      networkMsges={networkMsges.filter(
        msg => msg.timeStamp < props.currentTime
      )}
    />
  </section>
);

const msges = [
  {
    msg: `Warning: Expected \`onClick\` listener to be a function, instead got a value of \`string\` type.
      in span(created by InputGroupAddon)
      in InputGroupAddon(at App.js: 126)
      in span(created by InputGroup)
      in InputGroup(at App.js: 87)
      in div(created by FormGroup)
      in FormGroup(at App.js: 86)
      in header(at App.js: 79)
      in div(at App.js: 78)
      in App(at src / index.js: 7)`,
    lineInfo: "index.js:2178",
    type: "error",
    timeStamp: 100
  },
  {
    msg: `Warning: Each child in a list should have a unique \"key\" prop.
      Check the render method of \`Gallery\`.See https://fb.me/react-warning-keys for more information.
      in div(at Gallery.js: 15)
      in Gallery(at App.js: 133)
      in div(at App.js: 132)
      in div(at App.js: 78)
      in App(at src / index.js: 7)`,
    lineInfo: "index.js:2178",
    type: "error",
    timeStamp: 500
  },
  {
    msg: `Uncaught Invariant Violation: Expected \`onClick\` listener to be a function, instead got a value of \`string\` type.
    at invariant(http://localhost:3000/static/js/bundle.js:34837:15)
    at getListener (http://localhost:3000/static/js/bundle.js:35558:52)
    at listenerAtPhase(http://localhost:3000/static/js/bundle.js:35839:10)
    at accumulateDirectionalDispatches(http://localhost:3000/static/js/bundle.js:35862:18)
    at traverseTwoPhase(http://localhost:3000/static/js/bundle.js:35782:5)
    at accumulateTwoPhaseDispatchesSingle(http://localhost:3000/static/js/bundle.js:35878:5)
    at forEachAccumulated(http://localhost:3000/static/js/bundle.js:35444:8)
    at accumulateTwoPhaseDispatches(http://localhost:3000/static/js/bundle.js:35910:3)
    at Object.extractEvents(http://localhost:3000/static/js/bundle.js:39528:5)
    at extractEvents(http://localhost:3000/static/js/bundle.js:35575:44)
    at runExtractedEventsInBatch(http://localhost:3000/static/js/bundle.js:35605:16)
    at handleTopLevel(http://localhost:3000/static/js/bundle.js:39608:5)
    at batchedUpdates$1(http://localhost:3000/static/js/bundle.js:55221:12)
    at batchedUpdates(http://localhost:3000/static/js/bundle.js:36933:12)
    at dispatchEvent(http://localhost:3000/static/js/bundle.js:39687:5)
    at http://localhost:3000/static/js/bundle.js:55272:14
    at Object.unstable_runWithPriority(http://localhost:3000/static/js/bundle.js:70454:12)
    at interactiveUpdates$1(http://localhost:3000/static/js/bundle.js:55271:22)
    at interactiveUpdates(http://localhost:3000/static/js/bundle.js:36952:10)
    at dispatchInteractiveEvent(http://localhost:3000/static/js/bundle.js:39664:3)`,
    lineInfo: "react-dom.development.js:55",
    type: "error",
    timeStamp: 1000
  }
];
const networkMsges = [
  {

    timeStamp: 2000
  },
  { msg: "Testing message 2", timeStamp: 7000 }
];

class Playback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0
    };
  }

  componentDidMount() {
    const player = new rrwebPlayer({
      target: document.querySelector("#viewer"), // customizable root element
      data: {
        events: jsonImport,
        autoPlay: false
      }
    });
    this.currentTime = 0;
    this.setState({ currentTime: 0 });
    this.paused = false;
    this.timerFunc = setInterval(() => {
      if (!this.paused) {
        this.currentTime = this.currentTime + 15;
        this.setState({ currentTime: this.currentTime });
      }
    }, 15);
    player.addEventListener("start", () => {
      this.currentTime = 0;
      this.paused = false;
      this.setState({ currentTime: 0 });
    });
    player.addEventListener("pause", () => {
      this.paused = true;
    });
    player.addEventListener("resume", () => {
      this.paused = false;
    });
  }

  render() {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          height: 100%;
        `}
      >
        <Navbar />
        <PlaybackPanel>
          <LeftPanel currentTime={this.state.currentTime} />
          <MainPanel currentTime={this.state.currentTime} />
        </PlaybackPanel>
      </div>
    );
  }
}

export default Playback;
