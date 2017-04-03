import React from "react";
import ReactDOM from "react-dom";


function component (name) {
  return (<h1>Hello {name}</h1>);
}


ReactDOM.render(component("World"), document.getElementById("root"));
