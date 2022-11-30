import React from 'react';
import Logo from '../assets/img/logo.png';

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
                            className="nav-link mx-2 fw-bolder text-dark"
                            aria-current="page"
                            href="#"
                        >
                            Home
                        </a>
                        <a className="nav-link mx-2 text-dark" href="#">
                            Trainers
                        </a>
                        <a className="nav-link mx-2 text-dark" href="#">
                            Match Team
                        </a>
                        <a className="nav-link mx-2 text-dark" href="#">
                            Sport Vanue
                        </a>
                        <a className="nav-link mx-2 text-dark" href="#">
                            Food Calories
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
