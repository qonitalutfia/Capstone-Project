import React from 'react';
import Header from '../components/Header';
import Hero from '../assets/img/hero-home.png';

export default function Home() {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col text-start">
                        <h1 className="fw-bold title-home">
                            ATHLETIC <br /> LEAGUE
                        </h1>
                        <p className="fs-3">
                            Practice with a purpose, Play with a passion
                        </p>
                        <a
                            className="btn text-white btn-about-us"
                            href="#"
                            role="button"
                        >
                            About Us
                        </a>
                    </div>
                    <div className="col">
                        <img className="img-hero-home" src={Hero} alt="hero" />
                    </div>
                </div>
            </div>
        </div>
    );
}
