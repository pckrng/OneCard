import React, { Component } from 'react';
import './Card.css';
import HomePage from './pages/HomePage'
import  CardInner  from './Components/CardInner';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

class App extends Component {
  

  onMouseLeave(e) {
    console.log('clientY:', e.nativeEvent.clientY);
  }
  
  render() {
    return (
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    );
  }
}

export default App;