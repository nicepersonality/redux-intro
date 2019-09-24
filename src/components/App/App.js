import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>hello from App.js</p>
        <button onClick={
          () => this.props.dispatch( { type: 'BUTTON_ONE' } )
        }>Button One</button>
        <button onClick={
          () => this.props.dispatch( { type: 'BUTTON_TWO' } )
        }>Button Two</button>
      </div>
    );
  }
}

export default connect()(App);
