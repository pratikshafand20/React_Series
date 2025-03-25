import React from "react";
import ReactDOM from "react-dom/client";

/*
//Simple react element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

/* <div id="parent">
      <div id="child">
        <h1 id="heading1">Heading 1</h1>
        <h2 id="heading2">Heading2</h2>
      </div>
    </div>
    */
//Nested react element
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "I am heading 122"),
    React.createElement("h2", { id: "heading2" }, "I am heading 2"),
  ]),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
