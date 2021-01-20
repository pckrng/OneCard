import React, {useRef, useEffect}  from 'react';
import '../Card.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import {TweenMax, Power3} from 'gsap'

function CardInnerTwo(){
    let introText = useRef(null);
    let app = useRef (null);
    useEffect(() => {
        TweenMax.to(
            introText,
            2,
            {
                opacity: 1,
                y: -30,
                ease: Power3.easeOut
            }
        )
        
    }, [])


    return(
        
        <div ref={el => {introText = el}}
        className="Tilt-inner">
            <h1>Lorem</h1>  
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ducimus totam voluptatibus incidunt praesentium dolore velit maiores officia corporis qui.</p>
        </div>
        
    );
}


export default CardInnerTwo;