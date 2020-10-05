import React from 'react';
import './Hero.css';

function Hero(props) {
    return (
        <>
            <div className="col-md-5 col-10 mx-auto hero-wrapper">
                <div className="hero-img-border">
                    <img src={props.img} className="hero-img" alt={props.alt} />
                </div>
                
                <div className="hero-title-box">
                    <h3 className="hero-title">{props.title}</h3>
                    <p>{props.bio}</p>
                </div>

                <div className="hero-btn-box">
                    <span
                    onClick={() => (window.location = `${props.website}`)}
                    className="hero-website-btn"
                    >Visit Website</span>
                </div>
            </div>
        </>
    )
}

export default Hero;
