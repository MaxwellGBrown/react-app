import React, { Component } from "react";
import { connect } from "react-redux";

import { changeName } from "../actions.js";
import { appReducer } from "../reducer.js";
import stylesheet from "../styles/main.scss";


const mapStateToProps = function(state, ownProps) {
  return {
    name: state.name,
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    changeName: (newName) => {
      dispatch(changeName(newName))
    }   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
class App extends Component {

  render () {
    return (
      <div className={stylesheet.helloWorld}>
        <h1>Hello {this.props.name}</h1>
        <form
          onSubmit={
            (e) => {
              e.preventDefault();
              this.props.changeName(this.nameInput.value);
            }
          }
        >
          <input type="text" ref={input => { this.nameInput = input; }}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
})

