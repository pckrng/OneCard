import React, { Component } from 'react';
import './Card.css';
// import Tilt from 'react-tilt';
import Tilt from 'react-vanilla-tilt'

class App extends Component {
  onMouseLeave(e) {
    console.log('clientY:', e.nativeEvent.clientY);
  }
  render() {
    return (
      <div className="App">
          <Tilt className="Tilt" style={{ height: 600, width: 400 }} onMouseLeave={this.onMouseLeave}>
            <div className="Tilt-inner">
            <h1>OneCard</h1>
            <p>A Theme created with react.js and tilt.js </p>
            </div>
          </Tilt>
      </div>
    );
  }
}

export default App;