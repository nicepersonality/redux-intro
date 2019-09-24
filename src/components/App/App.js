import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    element: ''
  }

  handleChange = (event) => {
    this.setState({
      element: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <p>hello from App.js</p>
        <button onClick={
          () => this.props.dispatch( { type: 'BUTTON_ONE' } )
        }>Button One</button>
        <button onClick={
          () => this.props.dispatch( { type: 'BUTTON_TWO' } )
        }>Button Two</button><br />
        {/* add input that fires a function to update local state */}
        <input onChange={this.handleChange} placeholder="element" />
        {/* make the Add Element button send the local state var */}
        <button onClick={
          () => this.props.dispatch( { type: 'ADD_ELEMENT', payload: this.state.element } )
        }>Add Element</button>
      </div>
    );
  }
}

export default connect()(App);
