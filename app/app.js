import React, { Component } from "react";

export default class App extends Component {

  state = {
    name: "World" 
  }

  onSubmit (e) {
    e.preventDefault();
    this.setState({ name: this.nameInput.value });
  }

  render () {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <form onSubmit={::this.onSubmit}>
          <input type="text" ref={input => { this.nameInput = input; }}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
