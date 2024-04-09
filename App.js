import React from "react";
import ReactDOM from "react-dom/client";


const headingReact = React.createElement("div", {id : "parent"}, 
    React.createElement("div",{ id : "child"},
    [React.createElement("h1",{},"H1 Tag"),
    React.createElement("h2",{},"H2 tag")]),

    React.createElement("div", {id : "child2"}, 
    [React.createElement("h1",{},"H1 Tag"),
    React.createElement("h2",{},"H2 tag")]),
    );


const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(headingReact);

