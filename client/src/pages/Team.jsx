import React, { useEffect, useState } from 'react';
import Hero from '../assets/img/hero-team.png';
import dataTeam from '../service/team.service.js';

export default function Team() {
    const [team, setTeam] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        dataTeam.getAllTeam(keyword).then((response) => {
            console.log(response);
            setTeam(response.data.result);
            setData(response.data.result);
        });
    }, [keyword]);

    const searchData = (e) => {
        e.preventDefault();
        setKeyword(query);
        console.log(query);
    };

    const allData = () => {
        setTeam(data);
    };

    const filterData = (item) => {
        const result = data.filter((data) => {
            return data.sport == item;
        });
        setTeam(result);
    };

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1
                        className="heading aos-init aos-animate title-team text-start"
                        data-aos="fade-up"
                    >
                        Find Your <br /> Opposing Here
                    </h1>
                </div>
                <div className="col-md-6">
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
                                        onClick={() => filterData('futsal')}
                                    >
                                        futsall
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => filterData('basketball')}
                                    >
                                        Basketball
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <input
                            type="text"
                            className="form-control search-input-team mx-1 px-4"
                            placeholder="Find your team opponent here ..."
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

                    <div className="card p-4 card-list-trainer">
                        {team.map((team, index) => (
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item m-2">
                                    <h2
                                        className="accordion-header"
                                        id={`heading-${team.id}`}
                                    >
                                        <button
                                            className="accordion-button card-team-accordion py-1"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse-${team.id}`}
                                            aria-expanded="true"
                                            aria-controls={`collapse-${team.id}`}
                                        >
                                            <div
                                                className="card-trainer"
                                                key={team.id}
                                            >
                                                <div className="card-body p-3">
                                                    <div className="d-flex align-items-center">
                                                        <img
                                                            src={`https://raw.githubusercontent.com/ayuubb/img-project/main/team/${team.id}.png`}
                                                            alt={team.name}
                                                            className="img-fluid rounded-circle img-team"
                                                        />
                                                        <div className="ms-4">
                                                            <h5 className="card-title text-start mb-0">
                                                                {team.name}
                                                            </h5>
                                                            <ul className="nav nav-divider">
                                                                <li className="nav-item">
                                                                    {team.place}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse-${team.id}`}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={`heading-${team.id}`}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {team.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <img className="hero-team w-100" src={Hero} alt="hero" />
        </div>
    );
}
