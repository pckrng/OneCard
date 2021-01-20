import React, {useRef, useEffect}  from 'react';
import '../Card.css';

import {TweenMax, Power3} from 'gsap'

function CardInner(){
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
            <h1>OneCard</h1>
            <p>A Theme created with react.js and tilt.js </p>
            <h4 className="nextPage">Continue</h4>
        </div>
        
    );
}


export default CardInner;