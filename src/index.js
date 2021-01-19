import React from 'react'
import ReactDOM from 'react-dom'

import './index.css' 

function Card() {
    return (
        <div className="cardBackground">
        <div className="cardOne">
        <Logo />
        </div>
        </div>
    )
}


const Logo = () => <h2>ONE CARD</h2>

ReactDOM.render(<Card />,document.getElementById('root'));