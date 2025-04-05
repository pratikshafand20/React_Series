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

/*
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
*/

/*
//React element
const heading1 = (
  <h1 className="heading">
    <h1>Namaste React using JSX</h1>;
  </h1>
);
//JSX=>Babel converts the JSX to React.createElement=>ReactElement=>JS Object=>HTML Element(render)
const heading = <h1>Namaste React using JSX</h1>;
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

//React Component
//Functional component

//Component composition: Nesting one component to another
const Title = () => (
  <h1 className="title">
    <h1>Namaste React using JSX</h1>
  </h1>
);
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {Title()}
    {/* //We can render any javascript inside the component using the curly
    braces{}
    //Title()- we are able to render component like function beacause the title
    is js function at the end 
    we can render any react element into component or any component into react element*/}
    <h1 className="heading">Namaste React functional component🚀❤️</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
