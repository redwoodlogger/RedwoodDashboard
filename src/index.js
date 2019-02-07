import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/core";
import Home from "./Home";

const App = () => (
  <React.Fragment>
    <Global
      styles={css`
        html,
        body,
        #index {
          margin: 0;
          padding: 0;
          height: 100%;
        }
      `}
    />
    <Home />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById("index"));
