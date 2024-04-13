import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";


const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const app = ReactDOM.createRoot(document.getElementById("app-layout"));
app.render(<AppLayout />);
