import React, { useEffect, useState } from 'react';
import Hero from '../assets/img/hero-trainer.png';
import TrainerService from '../service/trainer.service.js';
import user from '../assets/img/user.svg';

export default function Trainers() {
    const [trainer, setTrainer] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        TrainerService.getAllTrainer(keyword).then((response) => {
            console.log(response);
            setTrainer(response.data.result);
            setData(response.data.result);
        });
    }, [keyword]);

    const searchData = (e) => {
        e.preventDefault();
        setKeyword(query);
        console.log(query);
    };

    const filterData = (item) => {
        const result = data.filter((data) => {
            return data.profesi == item;
        });
        setTrainer(result);
    };

    const allData = () => {
        setTrainer(data);
    };

    return (
        <div className="container py-4">
            <img className="img-hero-trainer" src={Hero} alt="" />
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h1
                        className="heading aos-init aos-animate mb-4 text-center"
                        data-aos="fade-up"
                    >
                        Find your ideal trainer here
                    </h1>
                    <form
                        action="#"
                        className="narrow-w form-search d-flex align-items-stretch mb-3 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        onSubmit={searchData}
                    >
                        <div className="dropdown">
                            <button
                                className="btn btn-trainer-dropdown dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Category
                            </button>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => allData()}
                                    >
                                        All
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => filterData('football')}
                                    >
                                        football
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => filterData('gym')}
                                    >
                                        gym
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => filterData('Bola')}
                                    >
                                        Bola
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <input
                            type="text"
                            className="form-control search-input-trainer px-4"
                            placeholder="Search Trainers ..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn btn-search-trainer"
                        >
                            Search
                        </button>
                    </form>

                    <div className="card bg-light w-100 card-list-trainer">
                        <div className="row">
                            {trainer.map((trainer, index) => (
                                <div className="col-md-6">
                                    <a
                                        className="card-trainer"
                                        href={`https://wa.me/+${trainer.phone}?text=Send20%a20%quote`}
                                        key={trainer.id}
                                        target="_blank"
                                    >
                                        <div className="card-body p-3">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    // src={`https://technext.github.io/property/images/person_${trainer.id}-min.jpg`}
                                                    src={`https://booking.webestica.com/assets/images/avatar/0${trainer.id}.jpg`}
                                                    alt={trainer.name}
                                                    className="img-fluid rounded-circle img-trainer"
                                                />
                                                <div className="ms-4">
                                                    <h5 className="card-title text-start mb-0">
                                                        {trainer.name}
                                                    </h5>
                                                    <ul className="nav nav-divider">
                                                        <li className="nav-item">
                                                            {trainer.profesi}
                                                        </li>
                                                    </ul>
                                                    <ul className="nav nav-divider">
                                                        <li className="nav-item">
                                                            {trainer.phone}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
