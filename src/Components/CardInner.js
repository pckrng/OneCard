import React, {useRef, useEffect}  from 'react';
import '../Card.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import {TweenMax, Power3} from 'gsap'

function CardInner(){
    let introText = useRef(null);
    
    useEffect(() => {
        console.log(introText);
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
            <h1>JOSEPH.</h1>
            <h2 style={{color: 'rgb(175, 92, 92)'}}>Front-end Developer</h2>
            <p>a Self taught front-end developer creating elegant solutions for everyone</p>
            <Link to={"/OpeningInfo"} style={{textDecoration: 'none'}}>
            <h2 className="continue">Continue</h2>
            </Link>
        </div>
        
    );
}


export default CardInner;