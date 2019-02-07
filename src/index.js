import React from "react";
import ReactDOM from "react-dom";
import Worker from "./redwood.worker";

const worker = new Worker();
worker.postMessage({ message: "Hello there" });
document.addEventListener("mousemove", event => {
  console.log(event);
});

const Index = () => <div>Hello there General Kenobi!</div>;

ReactDOM.render(<Index />, document.getElementById("index"));
