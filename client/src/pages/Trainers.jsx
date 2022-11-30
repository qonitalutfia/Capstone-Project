import React from 'react';
import Hero from '../assets/img/hero-trainer.png';

export default function Trainers() {
    return (
        <div className="container py-4">
            <img className="img-hero-trainer" src={Hero} alt="" />
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h1
                        className="heading aos-init aos-animate mb-4"
                        data-aos="fade-up"
                    >
                        Find your ideal trainer here
                    </h1>
                    <form
                        action="#"
                        className="narrow-w form-search d-flex align-items-stretch mb-3 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <input
                            type="text"
                            className="form-control search-input-trainer px-4"
                            placeholder="ex : yoga imut"
                        />
                        <button
                            type="submit"
                            className="btn btn-search-trainer"
                        >
                            Search
                        </button>
                    </form>

                    <div className="card bg-light w-100">
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://technext.github.io/property/images/person_4-min.jpg"
                                    alt="Image"
                                    className="img-fluid rounded-circle img-trainer"
                                />
                                <div className="ms-4">
                                    <h5 className="card-title text-start mb-0">
                                        Yoga UMM
                                    </h5>
                                    <ul className="nav nav-divider">
                                        <li className="nav-item">Balet</li>
                                    </ul>
                                    <ul className="nav nav-divider">
                                        <li className="nav-item">
                                            +6281216777423
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
