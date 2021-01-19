import React, { Component } from 'react';
import './Card.css';
import Tilt from 'react-vanilla-tilt';
import  CardInner  from './Components/CardInner';


class App extends Component {
  
  onMouseLeave(e) {
    console.log('clientY:', e.nativeEvent.clientY);
  }
  render() {
    return (
      <div className="App">
          <Tilt className="Tilt" style={{ height: 600, width: 400 }} onMouseLeave={this.onMouseLeave}>
            <CardInner />
          </Tilt>
      </div>
    );
  }
}

export default App;