import React from "react";
import ReactDOM from "react-dom/client";

/*
const headingReact = React.createElement("div", {id : "parent"}, 
    React.createElement("div",{ id : "child"},
    [React.createElement("h1",{},"H1 Tag"),
    React.createElement("h2",{},"H2 tag")]),

    React.createElement("div", {id : "child2"}, 
    [React.createElement("h1",{},"H1 Tag"),
    React.createElement("h2",{},"H2 tag")]),
    );
*/

//JSX
const jsxHeading = (
  <div className="parent">
    <div className="child" tabIndex={1} id="sa">
      <h1>Namaste React JSX</h1>
      <h2>Namaste React JSX22</h2>
    </div>
  </div>
);

const Title = () => {
  return <h1>Title</h1>;
};

const Heading = () => (
  <div id="container">
    <Title/>
    <h2 className="heading">Heading</h2>
  </div>
);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));

rootReact.render(jsxHeading);

const rootComp = ReactDOM.createRoot(document.getElementById("root-comp"));
rootComp.render(<Heading />);
