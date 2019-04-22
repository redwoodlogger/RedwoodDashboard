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
      Check the render method of \`Gallery\`.See https://fb.me/react-warning-keys for more information.`,
    type: "error",
    timeStamp: 6300
  },
  {
    msg: `Uncaught Invariant Violation: Expected \`onClick\` listener to be a function, instead got a value of \`string\` type.
      at invariant(http://localhost:3000/static/js/bundle.js:34837:15)`,
    lineInfo: "react-dom.development.js:55",
    type: "error",
    timeStamp: 15100
  },
  {
    msg: `Uncaught Invariant Violation: Expected \`onClick\` listener to be a function, instead got a value of \`string\` type.
      at invariant(http://localhost:3000/static/js/bundle.js:34837:15)`,
    lineInfo: "react-dom.development.js:55",
    type: "error",
    timeStamp: 16400
  },
  {
    msg: `Uncaught Invariant Violation: Expected \`onClick\` listener to be a function, instead got a value of \`string\` type.
      at invariant(http://localhost:3000/static/js/bundle.js:34837:15)`,
    lineInfo: "react-dom.development.js:55",
    type: "error",
    timeStamp: 17100
  },
  {
    msg: `Uncaught Invariant Violation: Expected \`onClick\` listener to be a function, instead got a value of \`string\` type.
      at invariant(http://localhost:3000/static/js/bundle.js:34837:15)`,
    lineInfo: "react-dom.development.js:55",
    type: "error",
    timeStamp: 17300
  }
];
const networkMsges = [
  {
    msg: `Request URL: http://localhost:3000/1.jpg
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 6300
  },
  {
    msg: `Request URL: http://localhost:3000/2.jpg
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 6300
  },
  {
    msg: `Request URL: http://localhost:3000/3.jpg
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 6300
  },
  {
    msg: `Request URL: http://localhost:3000/4.jpg
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 6300
  },
  {
    msg: `Request URL: http://localhost:3000/5.jpg
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 6300
  },
  {
    msg: `Request URL: http://localhost:3000/6.jpg
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 6300
  },
  {
    msg: `Request URL: http://localhost:3000/7.jpg
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 6300
  },
  {
    msg: `Request URL: http://localhost:3000/8.jpg
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 6300
  },
  {
    msg: `Request URL: http://localhost:3000/9.jpg
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 6300
  },
  {
    msg: `Request URL: http://localhost:3000/10.jpg
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 6300
  },
  {
    msg: `Request URL: http://localhost:3000/static/js/bundle.js
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 15100
  },
  {
    msg: `Request URL: http://localhost:3000/static/js/bundle.js.map
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 15100
  },
  {
    msg: `Request URL: http://localhost:3000/static/js/bundle.js
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 16400
  },
  {
    msg: `Request URL: http://localhost:3000/static/js/bundle.js.map
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 16400
  },
  {
    msg: `Request URL: http://localhost:3000/static/js/bundle.js
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 17100
  },
  {
    msg: `Request URL: http://localhost:3000/static/js/bundle.js.map
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 17100
  },
  {
    msg: `Request URL: http://localhost:3000/static/js/bundle.js
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 17300
  },
  {
    msg: `Request URL: http://localhost:3000/static/js/bundle.js.map
      Request Method: GET
      Status Code: 304 Not Modified
      Remote Address: 127.0.0.1:3000
      Referrer Policy: no-referrer-when-downgrade`,
    timeStamp: 17300
  }
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
