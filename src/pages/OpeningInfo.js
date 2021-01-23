import React, { Component } from 'react';
import '../Card.css';
import Tilt from 'react-vanilla-tilt';
import  CardInnerTwo  from '../Components/CardInnerTwo';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

class App extends Component {

onMouseLeave(e) {
    console.log('clientY:', e.nativeEvent.clientY);}

render() {
    return (
    <div className="App">
        <Tilt className="Tilt2"  onMouseLeave={this.onMouseLeave}>
            
        </Tilt>
        <Tilt className="Tilt2"  onMouseLeave={this.onMouseLeave}>
            
        </Tilt>
        <Tilt className="Tilt2" onMouseLeave={this.onMouseLeave}>
            
        </Tilt>
    </div>
    );
}
}

export default App;