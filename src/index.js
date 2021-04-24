import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Card from "./components/Card";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <Card name="Hello 1" price="120" />
        <Card name="Hello 2" price="140" />
        <Card name="Hello 3" price="20" />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
