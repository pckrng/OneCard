import React, { Component } from 'react';
import '../Card.css';
import Tilt from 'react-vanilla-tilt';
import  CardInner  from '../Components/CardInner';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Navbar from '../Components/Navbar';

class App extends Component {
  

  onMouseLeave(e) {
    console.log('clientY:', e.nativeEvent.clientY);
  }
  
  render() {
    return (
      <>
      <div className="App">
          <Tilt className="Tilt" style={{ boxShadow: "rgba 20, 26, 40, 0.2 0px, 7px, 42px" }} onMouseLeave={this.onMouseLeave}>
            <CardInner />
          </Tilt>
      <div className="navContainer">
      </div>
      </div>
      
      </>
    );
  }
}

export default App;