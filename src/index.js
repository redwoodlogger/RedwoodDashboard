// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import ReactDOM from "react-dom";
import Home from "./Home/index";

const App = () => (
  <div>
    <Global
      styles={css`
        html,
        body,
        #index {
          margin: 0;
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
  </div>
);

ReactDOM.render(<App />, document.getElementById("index"));
