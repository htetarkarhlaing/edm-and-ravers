import React from 'react';
import './Hero.css';

function Hero(props) {
    return (
        <>
            <div className="col-md-6 col-12 hero-wrapper">
                <div className="hero-title-box">
                    {props.title}
                </div>
            </div>
        </>
    )
}

export default Hero;
