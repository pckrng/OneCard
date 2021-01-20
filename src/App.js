import React, { Component } from 'react';
import './Card.css';
import HomePage from './pages/HomePage'
import  CardInner  from './Components/CardInner';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import OpeningInfo from './pages/OpeningInfo';

class App extends Component {
  

  onMouseLeave(e) {
    console.log('clientY:', e.nativeEvent.clientY);
  }
  
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/OpeningInfo" component={OpeningInfo} />
        </Switch>
      </Router>
      
    );
  }
}

export default App;