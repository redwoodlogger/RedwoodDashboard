// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import rrwebPlayer from "rrweb-player";
import { record } from "rrweb";
import Home from "./Home/Home";
import Playback from "./Playback/Playback";

// We use a two-dimensional array to store multiple events array
const eventsMatrix = [[]];

record({
  emit(event, isCheckout) {
    // isCheckout is a flag to tell you the events has been checkout
    if (isCheckout) {
      eventsMatrix.push([]);
    }
    const lastEvents = eventsMatrix[eventsMatrix.length - 1];
    lastEvents.push(event);
  },
  checkoutEveryNms: 2 * 60 * 1000 // checkout every 2 minutes
});

const exportJSON = events => {
  const tempEl = document.createElement("a");
  tempEl.href = `data:application/json;charset=utf-8,${encodeURIComponent(
    events
  )}`;
  tempEl.target = "_blank";
  tempEl.download = `events-${Date.now()}.json`;
  document.body.appendChild(tempEl);
  tempEl.click();
  document.body.removeChild(tempEl);
};

const replay = () => {
  // console.log(eventsMatrix[eventsMatrix.length - 1]);
  exportJSON(JSON.stringify(eventsMatrix[eventsMatrix.length - 1]));
  // console.log(JSON.stringify(eventsMatrix[eventsMatrix.length - 1]))

  // new rrwebPlayer({
  //   target: document.querySelector("#viewer"), // customizable root element
  //   data: {
  //     events: eventsMatrix[eventsMatrix.length - 1],
  //     autoPlay: true
  //   }
  // });
};

library.add(faAngleDown);

const App = () => (
  <React.Fragment>
    <Global
      styles={css`
        /* http://meyerweb.com/eric/tools/css/reset/ 
            v2.0 | 20110126
            License: none (public domain)
        */

        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }

        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        /* End of CSS reset */

        html,
        body,
        #index {
          margin: 0;
        }

        /* Set all HTML elements to have border-box */
        html {
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        /* End of border-box reset */

        /*----- Sarabun -----*/

        @font-face {
          font-family: "Sarabun";
          font-weight: normal;
          font-style: normal;
          src: url("src/Fonts/Sarabun-Regular.ttf") format("truetype");
        }

        @font-face {
          font-family: "Sarabun";
          font-weight: bold;
          font-style: normal;
          src: url("src/Fonts/Sarabun-SemiBold.ttf") format("truetype");
        }

        /*----- Roboto -----*/
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: normal;
          src: url("src/Fonts/Roboto-Regular.ttf") format("truetype");
        }

        @font-face {
          font-family: "Roboto";
          font-weight: bold;
          font-style: normal;
          src: url("src/Fonts/Roboto-Black.ttf") format("truetype");
        }

        /*----- Source Sans Pro -----*/
        @font-face {
          font-family: "Source Sans Pro";
          font-style: normal;
          font-weight: normal;
          src: url("src/Fonts/SourceSansPro-Regular.ttf") format("truetype");
        }

        .rr-controller {
          background: #dcdcdc;
          padding: 20px;
          height: 80px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        .rr-timeline {
          width: 80%;
          display: flex;
          align-items: center;
        }
        .rr-timeline__time {
          padding: 0 20px;
          color: #11103e;
        }
        .rr-progress {
          width: 100%;
          height: 8px;
          background: #fff;
          position: relative;
          border-radius: 3px;
          /* cursor: pointer; */
        }
        .rr-progress__step {
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 3px;
          background: #ff6f61;
        }
        .rr-progress__handler {
          width: 20px;
          height: 20px;
          border-radius: 10px;
          position: absolute;
          top: 4px;
          transform: translate(-50%, -50%);
          background: #ff6f61;
        }
        .rr-controller__btns {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
        }
        .rr-controller__btns button {
          width: 32px;
          height: 32px;
          display: flex;
          padding: 0;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          border-radius: 50%;
          cursor: pointer;
        }
        .rr-controller__btns button:active {
          background: #ff6f61;
        }
        .rr-controller__btns button.active {
          color: #fff;
          background: #ff6f61;
        }
        .rr-controller__btns button:disabled {
          cursor: not-allowed;
        }
        .rr-player {
          width: 100% !important;
          height: 100% !important;
          display: flex;
          flex-direction: column;
          background: lightgrey;
        }
        .rr-player__frame {
          height: 585px !important;
          background: lightgrey;
        }
        .replayer-wrapper {
          transform: scale(0.8) translate(35%, -12%) !important;
        }
      `}
    />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/playback" component={Playback} />
    </Switch>
  </React.Fragment>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("index")
);
