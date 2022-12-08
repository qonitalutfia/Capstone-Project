import React from 'react';
import Logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="Logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ms-auto">
                        <a
                            className="nav-link c-nav-link mx-2 text-dark"
                            aria-current="page"
                            href="#"
                        >
                            <Link to="/">Home</Link>
                        </a>
                        <a
                            className="nav-link c-nav-link mx-2 text-dark"
                            href="#"
                        >
                            <Link to="/trainer">Trainers</Link>
                        </a>
                        <a
                            className="nav-link c-nav-link mx-2 text-dark"
                            href="#"
                        >
                            <Link to="/team">Match Team</Link>
                        </a>
                        <a
                            className="nav-link c-nav-link mx-2 text-dark"
                            href="#"
                        >
                            <Link to="/place">Sport Vanue</Link>
                        </a>
                        <a
                            className="nav-link c-nav-link mx-2 text-dark"
                            href="#"
                        >
                            <Link to="/food">Food Calories</Link>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
