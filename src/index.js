import React from 'react'
import ReactDOM from 'react-dom'
import Tilt from 'react-vanilla-tilt'
import App from './App'

import './index.css' 

function Card() {
    return (
        <>
        
        <App />
        </>
    )
}


const Logo = () => <h2>ONE CARD</h2>

ReactDOM.render(<Card />,document.getElementById('root'));