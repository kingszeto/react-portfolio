import React from 'react';
import './Route1.css'

function Route1(){
    return (
        <div>
            <div className="train" id="1" style={{backgroundColor: "#0039A6"}}></div>
            <svg className="Route1">
                <path stroke="#0039A6" fill="none" d="M -33 -150 L 357 250 Q 407 300 407 350 L 407 1220"></path>
            </svg>
        </div>
    )
}

export default Route1