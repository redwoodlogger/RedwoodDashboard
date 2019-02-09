// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home/index";

library.add(faAngleDown);

const App = () => (
  <React.Fragment>
    <Global
      styles={css`
        html,
        body,
        #index {
          margin: 0;
          height: 100%;
        }

        html {
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
      `}
    />
    <Home />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById("index"));
